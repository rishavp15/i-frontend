import React, { useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: 'Ashwin Kumar',
      image: '/person1.jpg',
      quote: 'The mentorship and hands-on projects helped me land my dream job at Google. Couldn\'t have done it without this program!',
      badge: 'Placed at Google',
      badgeColor: 'blue',
      span: 2
    },
    {
      name: 'Priyanshu Singh',
      image: '/person2.jpg',
      quote: 'My salary increased from ₹4L to ₹12L+ within 8 months of completing the course. Best investment ever!',
      badge: '₹12L+ Salary',
      badgeColor: 'green',
      span: 1
    },
    {
      name: 'Rishu Singh',
      image: '/person3.jpg',
      quote: 'Started freelancing and now earning ₹1.5L monthly. The portfolio projects were game-changers!',
      badge: 'Freelance Success',
      badgeColor: 'purple',
      span: 1
    },
    {
      name: 'Chitranshu Pandey',
      image: '/person4.jpg',
      quote: 'Got promoted to Senior Developer at my current company. The advanced topics covered were incredibly helpful.',
      badge: 'Promoted',
      badgeColor: 'orange',
      span: 1
    },
    {
      name: 'Sunidhi Shristi',
      image: '/person5.jpg',
      quote: 'Built a startup using skills from this course. Now raising Series A funding with my co-founders!',
      badge: 'Startup Founder',
      badgeColor: 'pink',
      span: 2
    },
    {
      name: 'Kavya Verma',
      image: '/person6.jpg',
      quote: 'Switched careers from marketing to tech. The structured learning path made the transition seamless.',
      badge: 'Career Switch',
      badgeColor: 'cyan',
      span: 1
    },
    {
      name: 'Fahim Ahmed',
      image: '/person7.jpg',
      quote: 'Became a full-stack developer and landed a remote position at an international company. Worth every penny!',
      badge: 'Remote Developer',
      badgeColor: 'blue',
      span: 1
    },
    {
      name: 'Natrajori Pandamal',
      image: '/person8.jpg',
      quote: 'The mock interviews and placement support were exceptional. Got placed in my first preference company.',
      badge: 'Top Company',
      badgeColor: 'green',
      span: 1
    },
    {
      name: 'Riya Bhatachrya',
      image: '/person9.jpg',
      quote: 'Not just learned coding but grew in confidence. The community and mentors made all the difference!',
      badge: 'Skills Mastery',
      badgeColor: 'purple',
      span: 2
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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
    <section className="section" id="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-sub">Join 2L+ students who've transformed their careers</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`testimonial-card testimonial-card-${testimonial.span} badge-${testimonial.badgeColor}`}
            >
              <div className="testimonial-content">
                <div className="testimonial-quote">"{testimonial.quote}"</div>
                <div className="testimonial-footer">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-badge">{testimonial.badge}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
