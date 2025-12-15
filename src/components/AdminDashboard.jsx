import React, { useEffect, useState } from 'react';
import API_URL from '../config/api';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Admin access required. Please sign in with an admin account.');
      setAuthorized(false);
      setLoading(false);
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.role !== 'admin') {
        setMessage('Admin access required. Please sign in with an admin account.');
        setAuthorized(false);
        setLoading(false);
        return;
      }
      setAuthorized(true);
      fetchData(token);
    } catch (error) {
      setMessage('Invalid session. Please sign in again as admin.');
      setAuthorized(false);
      setLoading(false);
    }
  }, [activeTab]);

  const fetchData = async (tokenArg) => {
    const token = tokenArg || localStorage.getItem('token');
    if (!token) return;
    setLoading(true);
    setMessage('');

    try {
      const endpoint = activeTab === 'contacts' ? '/api/admin/contacts' : '/api/admin/enrollments';
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        if (activeTab === 'contacts') {
          setContacts(data.contacts);
        } else {
          setEnrollments(data.enrollments);
        }
      } else {
        setMessage(data.message || 'Error fetching data');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, type) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Admin access required. Please sign in with an admin account.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this?')) return;

    try {
      const endpoint = type === 'contact' ? `/api/admin/contacts/${id}` : `/api/admin/enrollments/${id}`;
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setMessage('Deleted successfully');
        fetchData();
      } else {
        setMessage('Error deleting item');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <section className="admin-panel">
      <div className="admin-header">
        <div>
          <p className="admin-kicker">Secure Area</p>
          <h2>Admin Dashboard</h2>
          <p className="admin-subtitle">Manage contacts, enrollments, and users</p>
        </div>
        <div className="admin-status-badge">Protected</div>
      </div>

      {!authorized && (
        <div className="admin-guard">
          <h3>Admin access required</h3>
          <p>Please sign in with an admin account to view this area.</p>
          <div className="admin-guard-actions">
            <a className="btn-primary" href="/">Go to Home</a>
          </div>
        </div>
      )}

      {authorized && (
        <>
          <div className="admin-tabs">
            <button
              className={`tab-btn ${activeTab === 'contacts' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('contacts');
              }}
            >
              Contact Messages ({contacts.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'enrollments' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('enrollments');
              }}
            >
              Enrollments ({enrollments.length})
            </button>
          </div>

          {message && <div className="admin-message">{message}</div>}
          {loading && <p>Loading...</p>}

          {activeTab === 'contacts' && (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.message.substring(0, 50)}...</td>
                      <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(contact._id, 'contact')}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'enrollments' && (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollments.map((enroll) => (
                    <tr key={enroll._id}>
                      <td>{enroll.name}</td>
                      <td>{enroll.email}</td>
                      <td>{enroll.phone}</td>
                      <td>{enroll.course}</td>
                      <td>{new Date(enroll.createdAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(enroll._id, 'enrollment')}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </section>
  );
}
