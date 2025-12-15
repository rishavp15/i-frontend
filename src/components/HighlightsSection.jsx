import React from 'react';

export default function HighlightsSection() {
  return (
    <section className="section">
      <div className="highlight-grid">
        <article className="highlight-card highlight-card-global">
          <p className="highlight-eyebrow">Global</p>
          <h3 className="highlight-title">
            Studied by lots of<br />
            students around<br />
            the globe.
          </h3>
          <div className="highlight-visual highlight-visual-global"></div>
        </article>

        <article className="highlight-card highlight-card-rating">
          <p className="highlight-eyebrow">Liked</p>
          <h3 className="highlight-title">
            4.5+ Rating for<br />
            our courses
          </h3>
          <p className="highlight-sub">4.5+ Google Reviews</p>
          <div className="highlight-visual highlight-visual-rating">
            <span className="rating-value">4.5+</span>
            <span className="rating-sparkle">✨</span>
          </div>
        </article>

        <article className="highlight-card highlight-card-offers">
          <p className="highlight-eyebrow">Offers</p>
          <h3 className="highlight-title">
            Awesome<br />
            discounts on all<br />
            courses
          </h3>
          <p className="highlight-sub">
            ₹500 OFF on every course. Get started on a new skill today.
          </p>
          <div className="highlight-visual highlight-visual-offer">
            <div className="offer-course-pill">
              <span className="offer-pill-label">All course</span>
              <span className="offer-pill-name">Machine Learning</span>
            </div>
            <div className="offer-tag">
              <span>₹500 OFF</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
