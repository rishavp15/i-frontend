import React from 'react';

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="logo-strip-inner">
        <div className="logo-marquee">
          <div className="logo-marquee-track" aria-hidden="false">
            <div className="logo-row">
              <img src="/autodesk_logo.svg" alt="Autodesk" />
              <img src="/adobe_logo.svg" alt="Adobe" />
              <img src="/microsoft_logo.svg" alt="Microsoft" />
              <img src="/googleForEducation.png" alt="Google for Education" />
            </div>
            {/* duplicate row for continuous marquee */}
            <div className="logo-row" aria-hidden="true">
              <img src="/autodesk_logo.svg" alt="Autodesk" />
              <img src="/adobe_logo.svg" alt="Adobe" />
              <img src="/microsoft_logo.svg" alt="Microsoft" />
              <img src="/googleForEducation.png" alt="Google for Education" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
