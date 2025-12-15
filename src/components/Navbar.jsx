import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState('login');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAuthClick = (type) => {
    setAuthType(type);
    setAuthModalOpen(true);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-row">
          {/* left: white glass background containing logo + text links only */}
          <div className="navbar-glass">
            <div className="nav-left">
              <Link to="/" className="logo-mark">
                <span>IP</span>
              </Link>
              <ul className="nav-menu">
                <li><Link className="nav-link" to="/about">About</Link></li>
                <li><Link className="nav-link" to="/programs">Programs</Link></li>
                <li className="nav-item-hiring">
                  <Link className="nav-link" to="/career">Career</Link>
                  <span className="pill">We are hiring</span>
                </li>
                <li><Link className="nav-link" to="/blog">Blog</Link></li>
                <li><Link className="nav-link" to="/courses">Courses</Link></li>
              </ul>
            </div>
          </div>

          {/* right side: auth buttons + theme toggle are outside the white glass */}
          <div className="nav-extras">
            <div className="nav-center">
              <button className="btn btn-ghost auth-btn" onClick={() => handleAuthClick('signup')}>Sign up</button>
              <button className="btn btn-primary btn-icon-right auth-btn" onClick={() => handleAuthClick('login')}>
                <span>Login</span>
                <span>⟶</span>
              </button>
            </div>

            <div className="nav-right">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                <span className="theme-sun">☀</span>
                <span className="theme-moon">☾</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        type={authType}
      />
    </>
  );
}
