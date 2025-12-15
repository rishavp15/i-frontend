import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config/api';

export default function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      const decoded = JSON.parse(jsonPayload);
      setUser(decoded);
      fetchNotifications(token);
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
      navigate('/');
    }
  }, [navigate]);

  const fetchNotifications = async (token) => {
    try {
      const response = await fetch(`${API_URL}/api/notifications`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setNotifications(data.notifications || []);
      setUnreadCount(data.unreadCount || 0);
      
      // Mock enrolled courses - in production would fetch from backend
      setEnrollments([
        {
          _id: '1',
          title: 'Web Development Fundamentals',
          category: 'Web Development',
          enrolledDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          status: 'ongoing',
          progress: 65,
          instructor: 'John Doe'
        },
        {
          _id: '2',
          title: 'React Advanced Patterns',
          category: 'Frontend',
          enrolledDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          status: 'ongoing',
          progress: 30,
          instructor: 'Jane Smith'
        },
        {
          _id: '3',
          title: 'JavaScript Essentials',
          category: 'Programming',
          enrolledDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          status: 'completed',
          progress: 100,
          instructor: 'Alex Kumar'
        }
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const markNotificationRead = async (notificationId) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_URL}/api/notifications/${notificationId}/read`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setNotifications(n => n.map(notif => 
        notif._id === notificationId ? { ...notif, read: true } : notif
      ));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const deleteNotification = async (notificationId) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_URL}/api/notifications/${notificationId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setNotifications(n => n.filter(notif => notif._id !== notificationId));
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loader"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getInitial = (email) => email?.charAt(0).toUpperCase() || '?';
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="user-dashboard-modern">
      {/* Sidebar */}
      <div className="dashboard-sidebar-modern">
        <div className="sidebar-user-card">
          <div className="user-avatar-large">
            {getInitial(user.email)}
          </div>
          <h2 className="sidebar-username">Welcome Back!</h2>
          <p className="sidebar-email">{user.email}</p>
          <div className="sidebar-stats">
            <div className="stat-item">
              <span className="stat-number">{enrollments.length}</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{unreadCount}</span>
              <span className="stat-label">New</span>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav-modern">
          <button
            className={`nav-button-modern ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            <span className="icon">📊</span>
            <span>Overview</span>
          </button>
          <button
            className={`nav-button-modern ${activeSection === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveSection('courses')}
          >
            <span className="icon">📚</span>
            <span>My Courses</span>
            {enrollments.length > 0 && <span className="badge">{enrollments.length}</span>}
          </button>
          <button
            className={`nav-button-modern ${activeSection === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveSection('notifications')}
          >
            <span className="icon">🔔</span>
            <span>Notifications</span>
            {unreadCount > 0 && <span className="badge danger">{unreadCount}</span>}
          </button>
          <button
            className={`nav-button-modern ${activeSection === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveSection('settings')}
          >
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </button>
        </nav>

        <button className="logout-btn-modern" onClick={handleLogout}>
          <span>🚪</span> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="dashboard-content-modern">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="section-overview">
            <div className="greeting-card">
              <div className="greeting-content">
                <h1>Welcome to Your Learning Hub</h1>
                <p>Continue your learning journey and track your progress</p>
              </div>
              <div className="greeting-stats">
                <div className="stat-card">
                  <span className="stat-icon">📚</span>
                  <div>
                    <p className="stat-value">{enrollments.length}</p>
                    <p className="stat-text">Courses Enrolled</p>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">✅</span>
                  <div>
                    <p className="stat-value">{enrollments.filter(e => e.status === 'completed').length}</p>
                    <p className="stat-text">Completed</p>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">🔥</span>
                  <div>
                    <p className="stat-value">{enrollments.filter(e => e.status === 'ongoing').length}</p>
                    <p className="stat-text">In Progress</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="section-title">Your Recent Courses</h2>
            <div className="course-cards-grid">
              {enrollments.slice(0, 3).map((course) => (
                <div key={course._id} className={`course-card-modern ${course.status}`}>
                  <div className="course-header">
                    <div className="course-badge">{course.category}</div>
                    <div className={`status-badge ${course.status}`}>
                      {course.status === 'completed' ? '✓ Completed' : '● In Progress'}
                    </div>
                  </div>
                  <h3>{course.title}</h3>
                  <p className="course-instructor">Instructor: {course.instructor}</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className="progress-text">{course.progress}% complete</p>
                </div>
              ))}
            </div>

            {notifications.length > 0 && (
              <>
                <h2 className="section-title">Latest Notifications</h2>
                <div className="latest-notifications">
                  {notifications.slice(0, 3).map((notif) => (
                    <div key={notif._id} className={`notif-item ${!notif.read ? 'unread' : ''}`}>
                      <div className="notif-icon">
                        {notif.type === 'announcement' && '📢'}
                        {notif.type === 'enrollment' && '📝'}
                        {notif.type === 'certificate' && '🏆'}
                        {notif.type === 'reminder' && '⏰'}
                        {notif.type === 'course-update' && '✨'}
                      </div>
                      <div className="notif-content">
                        <p className="notif-title">{notif.title}</p>
                        <p className="notif-date">{formatDate(notif.createdAt)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Courses Section */}
        {activeSection === 'courses' && (
          <div className="section-courses">
            <h1>My Courses</h1>
            {enrollments.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📚</div>
                <h2>No courses yet</h2>
                <p>Start learning today! Browse available courses.</p>
                <a href="/courses" className="btn btn-primary">Browse Courses</a>
              </div>
            ) : (
              <div className="courses-list">
                {enrollments.map((course) => (
                  <div key={course._id} className="course-detailed-card">
                    <div className="course-detail-left">
                      <h3>{course.title}</h3>
                      <p className="course-category">{course.category}</p>
                      <p className="course-instructor">👨‍🏫 {course.instructor}</p>
                      <p className="course-enrolled">Enrolled: {formatDate(course.enrolledDate)}</p>
                    </div>
                    <div className="course-detail-right">
                      <div className="progress-section">
                        <div className="progress-bar-large">
                          <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                        </div>
                        <p className="progress-percentage">{course.progress}%</p>
                      </div>
                      <div className={`status-badge-large ${course.status}`}>
                        {course.status === 'completed' ? '✓ Completed' : '● In Progress'}
                      </div>
                      <button className="continue-btn">
                        {course.status === 'completed' ? 'Review' : 'Continue'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Notifications Section */}
        {activeSection === 'notifications' && (
          <div className="section-notifications">
            <div className="notif-header">
              <h1>Notifications</h1>
              {unreadCount > 0 && (
                <button className="mark-all-read">Mark all as read</button>
              )}
            </div>
            {notifications.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🔔</div>
                <h2>No notifications</h2>
                <p>You're all caught up!</p>
              </div>
            ) : (
              <div className="notifications-timeline">
                {notifications.map((notif) => (
                  <div key={notif._id} className={`notif-timeline-item ${!notif.read ? 'unread' : ''}`}>
                    <div className="notif-timeline-dot"></div>
                    <div className="notif-timeline-content">
                      <div className="notif-top">
                        <div className="notif-meta">
                          <span className="notif-icon-large">
                            {notif.type === 'announcement' && '📢'}
                            {notif.type === 'enrollment' && '📝'}
                            {notif.type === 'certificate' && '🏆'}
                            {notif.type === 'reminder' && '⏰'}
                            {notif.type === 'course-update' && '✨'}
                          </span>
                          <div>
                            <h3>{notif.title}</h3>
                            <p className="notif-type">{notif.type}</p>
                          </div>
                        </div>
                        <span className="notif-date-large">{formatDate(notif.createdAt)}</span>
                      </div>
                      <p className="notif-message">{notif.message}</p>
                      <div className="notif-actions">
                        {!notif.read && (
                          <button 
                            className="action-btn mark-read"
                            onClick={() => markNotificationRead(notif._id)}
                          >
                            Mark as read
                          </button>
                        )}
                        <button 
                          className="action-btn delete-notif"
                          onClick={() => deleteNotification(notif._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <div className="section-settings">
            <h1>Account Settings</h1>
            <div className="settings-grid">
              <div className="settings-card">
                <h3>Profile Information</h3>
                <div className="setting-item">
                  <label>Email Address</label>
                  <p>{user.email}</p>
                </div>
                <div className="setting-item">
                  <label>Member Since</label>
                  <p>{formatDate(new Date(user.iat * 1000))}</p>
                </div>
              </div>
              <div className="settings-card">
                <h3>Change Password</h3>
                <form className="settings-form">
                  <input 
                    type="password" 
                    placeholder="Current Password" 
                    required 
                  />
                  <input 
                    type="password" 
                    placeholder="New Password" 
                    required 
                  />
                  <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    required 
                  />
                  <button type="submit" className="btn btn-primary">Update Password</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

