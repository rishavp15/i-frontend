import React from 'react';

export default function CareerPage() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <h1>Career Opportunities</h1>
        <div className="coming-soon-icon">🚀</div>
        <p className="coming-soon-subtitle">Join our team and grow with us</p>
        <p className="coming-soon-message">
          Exciting career opportunities are coming to Indrapeeth. This page is under construction.
        </p>
        <div className="coming-soon-timeline">
          <div className="timeline-item">
            <span className="timeline-marker">🎯</span>
            <p>Current Openings</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-marker">🌱</span>
            <p>Growth Opportunities</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-marker">💼</span>
            <p>Team & Culture</p>
          </div>
        </div>
        <p className="coming-soon-eta">Coming in a few days...</p>
      </div>
    </div>
  );
}
