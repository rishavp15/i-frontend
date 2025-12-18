import React from 'react';

export default function StatsSection() {
  const stats = [
    { value: '50K+', label: 'Total learners trained' },
    { value: '95%', label: 'Placement & internship rate' },
    { value: '200+', label: 'Hiring & campus partners' },
    { value: '4.8★', label: 'Average course rating' }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Why learners choose us</h2>
      </div>
      <div className="stats-row">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
