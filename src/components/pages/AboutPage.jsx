import React from 'react';

export default function AboutPage() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-content">
        <h1>About Indrapeeth</h1>
        <div className="coming-soon-icon">📖</div>
        <p className="coming-soon-subtitle">Learn about our mission, vision, and team</p>
        <p className="coming-soon-message">
          We're crafting an amazing story about Indrapeeth. This page is under construction.
        </p>
        <div className="coming-soon-timeline">
          <div className="timeline-item">
            <span className="timeline-marker">🎯</span>
            <p>Our Mission</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-marker">🌟</span>
            <p>Our Vision</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-marker">👥</span>
            <p>Our Team</p>
          </div>
        </div>
        <p className="coming-soon-eta">Coming in a few days...</p>
      </div>
    </div>
  );
}
