import React from 'react';
import { Link } from 'react-router-dom';

export default function CoursesSection() {
  return (
    <section className="section" id="programs">
      <div className="section-header">
        <h2 className="section-title">Trending courses</h2>
      </div>
      <div className="courses-carousel">
        <div className="courses-track">
          <article className="course-card course-ml" data-course="ml" role="button" tabIndex="0">
            <div className="course-card-top">
              <p className="course-pill">Trending · CS</p>
              <h3 className="course-name">Machine<br />Learning</h3>
              <span className="course-offer">10% OFF</span>
            </div>
            <div className="course-card-bottom">
              <div className="course-meta-row">
                <span className="course-meta-label">Duration</span>
                <span className="course-meta-value">2 Months · Project included</span>
              </div>
              <div className="course-meta-row">
                <span className="course-meta-label">Program</span>
                <span className="course-meta-value">Live and interactive</span>
              </div>
              <Link to="/course/machine-learning" className="course-link">View Program ⟶</Link>
            </div>
          </article>

          <article className="course-card course-ds" data-course="ds" role="button" tabIndex="0">
            <div className="course-card-top">
              <p className="course-pill">Trending · CS</p>
              <h3 className="course-name">Data<br />Science</h3>
              <span className="course-offer">10% OFF</span>
            </div>
            <div className="course-card-bottom">
              <div className="course-meta-row">
                <span className="course-meta-label">Duration</span>
                <span className="course-meta-value">2 Months · Project included</span>
              </div>
              <div className="course-meta-row">
                <span className="course-meta-label">Program</span>
                <span className="course-meta-value">Live and interactive</span>
              </div>
              <Link to="/course/data-science" className="course-link">View Program ⟶</Link>
            </div>
          </article>

          <article className="course-card course-ai" data-course="ai" role="button" tabIndex="0">
            <div className="course-card-top">
              <p className="course-pill">Trending · CS</p>
              <h3 className="course-name">Artificial<br />Intelligence</h3>
              <span className="course-offer">10% OFF</span>
            </div>
            <div className="course-card-bottom">
              <div className="course-meta-row">
                <span className="course-meta-label">Duration</span>
                <span className="course-meta-value">2 Months · Project included</span>
              </div>
              <div className="course-meta-row">
                <span className="course-meta-label">Program</span>
                <span className="course-meta-value">Live and interactive</span>
              </div>
              <Link to="/course/artificial-intelligence" className="course-link">View Program ⟶</Link>
            </div>
          </article>

          <article className="course-card course-azure" data-course="azure" role="button" tabIndex="0">
            <div className="course-card-top">
              <p className="course-pill">Trending · CS</p>
              <h3 className="course-name">Microsoft<br />Azure</h3>
              <span className="course-offer">10% OFF</span>
            </div>
            <div className="course-card-bottom">
              <div className="course-meta-row">
                <span className="course-meta-label">Duration</span>
                <span className="course-meta-value">2 Months · Project included</span>
              </div>
              <div className="course-meta-row">
                <span className="course-meta-label">Program</span>
                <span className="course-meta-value">Live and interactive</span>
              </div>
              <Link to="/course/azure" className="course-link">View Program ⟶</Link>
            </div>
          </article>

          <article className="course-card course-python" data-course="python" role="button" tabIndex="0">
            <div className="course-card-top">
              <p className="course-pill">Trending · CS</p>
              <h3 className="course-name">Python</h3>
              <span className="course-offer">10% OFF</span>
            </div>
            <div className="course-card-bottom">
              <div className="course-meta-row">
                <span className="course-meta-label">Duration</span>
                <span className="course-meta-value">2 Months · Project included</span>
              </div>
              <div className="course-meta-row">
                <span className="course-meta-label">Program</span>
                <span className="course-meta-value">Live and interactive</span>
              </div>
              <Link to="/course/python" className="course-link">View Program ⟶</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
