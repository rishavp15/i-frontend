import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EnrollModal from '../EnrollModal';

export default function CourseDetailPage() {
  const { courseName } = useParams();
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  // Course data based on route parameter
  const courseDetails = {
    'machine-learning': {
      title: 'Machine Learning',
      subtitle: 'Master the fundamentals of ML and AI',
      description: 'Dive deep into machine learning algorithms, neural networks, and real-world applications. This comprehensive course covers supervised learning, unsupervised learning, deep learning, and hands-on projects with Python and TensorFlow.',
      duration: '2 Months',
      level: 'Intermediate',
      category: 'Computer Science',
      offer: '10% OFF',
      instructor: 'Dr. AI Expert',
      students: 2450,
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop',
      highlights: [
        'Supervised & Unsupervised Learning',
        'Neural Networks & Deep Learning',
        'Natural Language Processing',
        'Computer Vision Applications',
        'Real-world ML Projects',
        'TensorFlow & PyTorch'
      ],
      modules: [
        'Introduction to Machine Learning',
        'Linear Regression & Classification',
        'Decision Trees & Random Forests',
        'Neural Networks Basics',
        'Deep Learning with CNNs',
        'Natural Language Processing',
        'Reinforcement Learning',
        'Final Capstone Project'
      ],
      prerequisites: ['Basic Python', 'Mathematics (Linear Algebra)', 'Statistics Basics']
    },
    'data-science': {
      title: 'Data Science',
      subtitle: 'Transform data into insights',
      description: 'Learn to analyze, visualize, and interpret complex data. Master Python, pandas, NumPy, and popular data visualization tools. Build predictive models and make data-driven decisions with confidence.',
      duration: '2 Months',
      level: 'Beginner to Intermediate',
      category: 'Computer Science',
      offer: '10% OFF',
      instructor: 'Data Science Team',
      students: 3200,
      rating: 4.7,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      highlights: [
        'Python for Data Analysis',
        'Data Visualization with Matplotlib & Seaborn',
        'Statistical Analysis',
        'Pandas & NumPy Mastery',
        'Machine Learning Basics',
        'Real Business Case Studies'
      ],
      modules: [
        'Python Programming Fundamentals',
        'Data Manipulation with Pandas',
        'Data Visualization Techniques',
        'Statistical Analysis',
        'Introduction to Machine Learning',
        'SQL for Data Science',
        'Big Data Tools',
        'Capstone Project'
      ],
      prerequisites: ['Basic Programming Knowledge', 'Basic Mathematics']
    },
    'artificial-intelligence': {
      title: 'Artificial Intelligence',
      subtitle: 'Build intelligent systems',
      description: 'Explore the cutting-edge world of AI. Learn about neural networks, deep learning, computer vision, NLP, and robotics. Create intelligent applications that can see, hear, and make decisions.',
      duration: '2 Months',
      level: 'Advanced',
      category: 'Computer Science',
      offer: '10% OFF',
      instructor: 'AI Research Team',
      students: 1800,
      rating: 4.9,
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      highlights: [
        'Deep Learning Architectures',
        'Computer Vision with OpenCV',
        'Natural Language Understanding',
        'Reinforcement Learning',
        'AI Ethics & Responsible AI',
        'Production ML Systems'
      ],
      modules: [
        'AI Fundamentals',
        'Deep Neural Networks',
        'Convolutional Neural Networks',
        'Recurrent Neural Networks',
        'Transformer Models',
        'Computer Vision Projects',
        'NLP Applications',
        'AI Deployment'
      ],
      prerequisites: ['Machine Learning Basics', 'Python Advanced', 'Linear Algebra']
    },
    'azure': {
      title: 'Microsoft Azure',
      subtitle: 'Master cloud computing',
      description: 'Become proficient in Microsoft Azure cloud platform. Learn to deploy, manage, and scale applications. Get hands-on with virtual machines, databases, AI services, and DevOps practices.',
      duration: '2 Months',
      level: 'Intermediate',
      category: 'Computer Science',
      offer: '10% OFF',
      instructor: 'Cloud Architect',
      students: 2100,
      rating: 4.6,
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
      highlights: [
        'Azure Fundamentals & Architecture',
        'Virtual Machines & App Services',
        'Azure Databases & Storage',
        'Azure DevOps & CI/CD',
        'Security & Identity Management',
        'Azure AI & ML Services'
      ],
      modules: [
        'Introduction to Cloud Computing',
        'Azure Core Services',
        'Azure Virtual Machines',
        'Azure Storage Solutions',
        'Azure Networking',
        'Azure Security',
        'Azure DevOps',
        'Real-world Projects'
      ],
      prerequisites: ['Basic Networking', 'Operating Systems Knowledge']
    },
    'python': {
      title: 'Advance Python',
      subtitle: 'From basics to advanced',
      description: 'Master Python programming from scratch. Learn syntax, data structures, OOP, web development, data analysis, and automation. Build real projects and become a Python expert.',
      duration: '2 Months',
      level: 'Beginner',
      category: 'Computer Science',
      offer: '10% OFF',
      instructor: 'Python Expert',
      students: 4500,
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=600&fit=crop',
      highlights: [
        'Python Fundamentals',
        'Object-Oriented Programming',
        'File Handling & Data Processing',
        'Web Development with Flask/Django',
        'Data Analysis with Pandas',
        'Automation & Scripting'
      ],
      modules: [
        'Python Basics & Syntax',
        'Data Structures',
        'Functions & Modules',
        'OOP Concepts',
        'File I/O Operations',
        'Web Development',
        'Database Integration',
        'Final Projects'
      ],
      prerequisites: ['None - Beginner Friendly']
    },
    'cloud-computing': {
      title: 'Cloud Computing',
      subtitle: 'AWS, Azure, and GCP',
      description: 'Comprehensive cloud computing course covering major platforms. Learn cloud architecture, deployment strategies, security, and cost optimization across AWS, Azure, and Google Cloud.',
      duration: '2 Months',
      level: 'Intermediate',
      category: 'Computer Science',
      offer: '10% OFF',
      instructor: 'Cloud Team',
      students: 2800,
      rating: 4.7,
      thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop',
      highlights: [
        'Multi-Cloud Architecture',
        'AWS Services Mastery',
        'Azure Cloud Solutions',
        'Google Cloud Platform',
        'DevOps & CI/CD',
        'Cloud Security Best Practices'
      ],
      modules: [
        'Cloud Fundamentals',
        'AWS Core Services',
        'Azure Essentials',
        'Google Cloud Basics',
        'Cloud Networking',
        'Cloud Storage & Databases',
        'Cloud Security',
        'Certification Prep'
      ],
      prerequisites: ['Basic Linux', 'Networking Basics']
    }
  };

  const course = courseDetails[courseName] || courseDetails['python'];

  return (
    <>
      <div className="course-detail-page">
        <div className="page-shell">
          <div className="course-content-grid">
            {/* Main Content */}
            <div className="course-main">
              {/* Top summary section */}
              <section className="course-section course-top">
                <div className="course-breadcrumb">
                  <Link to="/courses">Courses</Link>
                  <span>•</span>
                  <span>{course.title}</span>
                </div>
                <h1 className="course-title">{course.title}</h1>
                <p className="course-subtitle">{course.subtitle}</p>
                <div className="course-top-meta">
                  <span>⭐ {course.rating} Rating</span>
                  <span>👥 {course.students.toLocaleString()} Students</span>
                </div>
                <div className="course-top-actions">
                  <button
                    className="btn-enroll-primary"
                    onClick={() => setShowEnrollModal(true)}
                  >
                    🚀 Enroll Now
                  </button>
                </div>
              </section>

              {/* About Course */}
              <section className="course-section">
                <h2>About This Course</h2>
                <p className="course-description">{course.description}</p>
              </section>

              {/* What You'll Learn */}
              <section className="course-section">
                <h2>What You'll Learn</h2>
                <div className="highlights-grid">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Course Modules */}
              <section className="course-section">
                <h2>Course Curriculum</h2>
                <div className="modules-list">
                  {course.modules.map((module, index) => (
                    <div key={index} className="module-item">
                      <span className="module-number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="module-title">{module}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Prerequisites */}
              <section className="course-section">
                <h2>Prerequisites</h2>
                <div className="prerequisites-list">
                  {course.prerequisites.map((prereq, index) => (
                    <div key={index} className="prereq-item">
                      <span>📌</span>
                      <span>{prereq}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="course-sidebar">
              <div className="course-card-sticky">
                <h3>Ready to Start?</h3>
                <div className="course-details">
                  <div className="detail-item">
                    <span className="detail-label">Instructor:</span>
                    <span className="detail-value">{course.instructor}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Format:</span>
                    <span className="detail-value">Live & Interactive</span>
                  </div>
                </div>
                <button 
                  className="btn-enroll-sidebar"
                  onClick={() => setShowEnrollModal(true)}
                >
                  Enroll Now
                </button>
                <p className="admin-managed-note">Everything here can be changed or managed from the admin panel.</p>
                <Link to="/courses" className="btn-back">
                  ← Browse All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEnrollModal && (
        <EnrollModal
          isOpen={showEnrollModal}
          onClose={() => setShowEnrollModal(false)}
          selectedCourse={course.title}
        />
      )}
    </>
  );
}
