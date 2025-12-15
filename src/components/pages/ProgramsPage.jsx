import React from 'react';

export default function ProgramsPage() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <h1>Our Programs</h1>
        <div className="coming-soon-icon">🎓</div>
        <p className="coming-soon-subtitle">Explore our comprehensive learning programs</p>
        <p className="coming-soon-message">
          Discover diverse programs designed to help you master new skills. This page is coming soon.
        </p>
        <div className="coming-soon-timeline">
          <div className="timeline-item">
            <span className="timeline-marker">💻</span>
            <p>Tech Programs</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-marker">🚀</span>
            <p>Career Bootcamps</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-marker">🏆</span>
            <p>Certification Courses</p>
          </div>
        </div>
        <p className="coming-soon-eta">Coming in a few days...</p>
      </div>
    </div>
  );
}
