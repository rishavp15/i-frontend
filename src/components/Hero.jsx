import React, { useState } from 'react';
import EnrollModal from './EnrollModal';

export default function Hero() {
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  return (
    <section className="hero" id="home">
      <EnrollModal isOpen={showEnrollModal} onClose={() => setShowEnrollModal(false)} />
      <div className="hero-left">
        <p className="hero-eyebrow">Become a part of skill hub</p>
        <h1 className="hero-title">
          Join the student
          <span>network of Skill&nbsp;India</span>
        </h1>
       
        <div className="hero-cta-row">
          <button 
            className="btn btn-primary btn-icon-right" 
            type="button"
            onClick={() => setShowEnrollModal(true)}
          >
            <span>Enroll now</span>
            <span>▶</span>
          </button>
          <div className="hero-meta hero-meta-cta">
            Enrolled by <strong>2L+ students</strong> across 200+ colleges
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card" data-float="0.2">
          <div className="hero-abstract">
            <span className="hero-bar bar-1"></span>
            <span className="hero-bar bar-2"></span>
            <span className="hero-bar bar-3"></span>
          </div>
          <div className="hero-image-container">
            <img src="/hero_image2.png" alt="Overlay depth" className="hero-overlay-image-secondary" />
            <img src="/natasha_image.png" alt="Student" className="hero-base-image" />
            <img src="/hero_image2.png" alt="Overlay" className="hero-overlay-image" />
            <img src="/google_review_chip.svg" alt="Google review" className="google-review-chip" />
          </div>
        </div>
      </div>
    </section>
  );
}
