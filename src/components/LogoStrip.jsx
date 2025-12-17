import React from 'react';

export default function LogoStrip() {
  const logos = [
    { src: '/autodesk_logo.svg', alt: 'Autodesk' },
    { src: '/adobe_logo.svg', alt: 'Adobe' },
    { src: '/microsoft_logo.svg', alt: 'Microsoft' },
    { src: '/googleForEducation.png', alt: 'Google for Education' }
  ];

  return (
    <section className="logo-strip">
      <div className="logo-strip-inner">
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {/* First set */}
            {logos.map((logo, i) => (
              <img key={`set1-${i}`} src={logo.src} alt={logo.alt} className="marquee-logo" />
            ))}
            {/* Second set for seamless loop */}
            {logos.map((logo, i) => (
              <img key={`set2-${i}`} src={logo.src} alt={logo.alt} className="marquee-logo" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
