import React, { useState, useEffect } from 'react';
import EnrollModal from '../EnrollModal';
import API_URL from '../../config/api';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  // Sample courses as fallback
  const sampleCourses = [
    {
      _id: '1',
      title: 'Web Development Fundamentals',
      description: 'Learn HTML, CSS, JavaScript, and modern web development practices from scratch',
      category: 'Web Development',
      duration: '8 weeks',
      instructor: 'Expert Instructor',
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      moduleCount: 12,
      students: []
    },
    {
      _id: '2',
      title: 'Advanced React & Redux',
      description: 'Master React hooks, Redux state management, and build production-ready applications',
      category: 'Web Development',
      duration: '6 weeks',
      instructor: 'Senior Developer',
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      moduleCount: 15,
      students: []
    },
    {
      _id: '3',
      title: 'Data Science with Python',
      description: 'Learn Python programming, data analysis, visualization, and machine learning basics',
      category: 'Data Science',
      duration: '10 weeks',
      instructor: 'Dr. Data Expert',
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      moduleCount: 20,
      students: []
    },
    {
      _id: '4',
      title: 'Machine Learning Masterclass',
      description: 'Deep dive into ML algorithms, neural networks, and AI applications with hands-on projects',
      category: 'AI & ML',
      duration: '12 weeks',
      instructor: 'AI Specialist',
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      moduleCount: 18,
      students: []
    },
    {
      _id: '5',
      title: 'Cloud Computing with AWS',
      description: 'Master AWS services, cloud architecture, deployment strategies, and DevOps practices',
      category: 'Cloud Computing',
      duration: '8 weeks',
      instructor: 'Cloud Architect',
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      moduleCount: 14,
      students: []
    },
    {
      _id: '6',
      title: 'Full Stack Development',
      description: 'Complete course covering frontend, backend, databases, and deployment for full stack apps',
      category: 'Web Development',
      duration: '16 weeks',
      instructor: 'Full Stack Expert',
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      moduleCount: 25,
      students: []
    }
  ];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${API_URL}/api/courses`);
      const data = await response.json();
      // Use fetched courses if available, otherwise use sample courses
      setCourses(data.length > 0 ? data : sampleCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Use sample courses if backend is not available
      setCourses(sampleCourses);
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowEnrollModal(true);
  };

  return (
    <>
      <div id="courses-page" className="courses-page">
        <div className="page-shell">
          <div className="courses-page-header">
            <h1>Our Courses</h1>
            <p>Explore our comprehensive collection of learning programs</p>
          </div>

          {loading ? (
            <div className="loading">Loading courses...</div>
          ) : courses.length === 0 ? (
            <div className="no-courses">
              <h2>No courses available yet</h2>
              <p>More courses are coming soon</p>
            </div>
          ) : (
            <div className="courses-page-grid">
              {courses.map((course) => (
                <div key={course._id} className="course-page-card">
                  {course.thumbnail && (
                    <div className="course-card-image">
                      <img src={course.thumbnail} alt={course.title} />
                      <span className="course-level">{course.level}</span>
                    </div>
                  )}
                  <div className="course-card-body">
                    <h3>{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <div className="course-meta">
                      <span className="course-category">{course.category}</span>
                      <span className="course-duration">⏱️ {course.duration}</span>
                    </div>
                    <div className="course-info">
                      <p className="course-instructor">👨‍🏫 {course.instructor}</p>
                      <p className="course-modules">📚 {course.moduleCount} modules</p>
                       {/* Price is no longer displayed */}
                    </div>
                    <div className="course-enrolled">
                      <span>{course.students?.length || 0} students enrolled</span>
                    </div>
                    <button
                      className="btn btn-primary enroll-btn"
                      onClick={() => handleEnrollClick(course)}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showEnrollModal && (
        <EnrollModal
          isOpen={showEnrollModal}
          onClose={() => setShowEnrollModal(false)}
          selectedCourse={selectedCourse?.title}
        />
      )}
    </>
  );
}
