import React, { useEffect, useRef } from 'react';

export default function ExpertsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section" id="experts" ref={sectionRef}>
      <div className="experts-card">
        <div className="experts-inner">
          <div className="experts-left">
            <p className="experts-eyebrow">Experts</p>
            <h2 className="experts-title">
              Industry<br />
              Professionals<br />
              From
            </h2>
            <p className="experts-sub">
              Get better knowledge from our best industry experts from the best of the
              companies.
            </p>
          </div>

          <div className="experts-right">
            <img src="/logo_row_1.png" alt="partner" className="experts-logo" />
            <img src="/logo_row_2.png" alt="partner" className="experts-logo" />
            <img src="/logo_row_3.png" alt="partner" className="experts-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
