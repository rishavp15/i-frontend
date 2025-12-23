import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <p>© 2024 Indrapeeth Foundation. All rights reserved.</p>

        <div className="footer-contact">
          <div className="footer-contact-group">
            <span className="footer-contact-label">Support Email</span>
            <a href="mailto:support@indrapeeth.com">support@indrapeeth.com</a>
            <a href="mailto:indrapeethteam@gmail.com">indrapeethteam@gmail.com</a>
          </div>

          <div className="footer-contact-group">
            <span className="footer-contact-label">Call / WhatsApp</span>
            <a href="tel:+917979013012">+91-79790 13012</a>
            <a href="tel:+918207566051">+91 82075 66051</a>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <a href="#programs">Programs</a>
        <a href="#career">Career</a>
        <a href="#blogs">Blogs</a>
      </div>
    </footer>
  );
}
