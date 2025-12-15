import React, { useState } from 'react';

export default function FaqSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const faqs = [
    {
      q: 'How do live + recorded classes work?',
      a: 'You get live weekend sessions with mentors plus lifetime access to structured recordings, notes and coding exercises inside your dashboard.'
    },
    {
      q: 'Do you provide placement support?',
      a: 'Yes. We conduct resume reviews, mock interviews, referral drives and connect you with our hiring partners for relevant openings.'
    },
    {
      q: 'Can beginners join these programs?',
      a: 'Absolutely. We start from fundamentals and move to advanced topics with step‑by‑step projects and mentor guidance.'
    }
  ];

  const toggleAccordion = (idx) => {
    setActiveIdx(activeIdx === idx ? -1 : idx);
  };

  return (
    <section className="section" id="about">
      <div className="faq-grid">
        <div className="faq-intro">
          <h2 className="section-title">Built for career outcomes</h2>
          <p>
            Every program is designed with industry experts, hands‑on projects and
            mock interviews so that you graduate with real skills and a job‑ready
            portfolio.
          </p>
        </div>

        <div className="accordion">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`accordion-item ${activeIdx === idx ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(idx)}>
                <span>{faq.q}</span>
                <span className="accordion-icon">+</span>
              </div>
              <div className="accordion-body">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
