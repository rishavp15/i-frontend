import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState('login');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAuthClick = (type) => {
    setAuthType(type);
    setAuthModalOpen(true);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-row">
          {/* left: white glass background containing logo + text links only */}
          <div className="navbar-glass">
            <div className="nav-left">
              <Link to="/" className="logo-mark" aria-label="Indrapeeth home">
                <img src="/logo.png" alt="Indrapeeth" className="logo-img" />
              </Link>
              <button className="mobile-menu-btn" aria-label="Open navigation menu" onClick={toggleMenu} type="button">
                <span />
                <span />
                <span />
              </button>
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

      <div className={`mobile-drawer-overlay ${menuOpen ? 'show' : ''}`} onClick={closeMenu} />
      <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="logo-mark small" aria-label="Indrapeeth">
            <img src="/logo.png" alt="Indrapeeth" className="logo-img" />
          </div>
          <button className="mobile-close-btn" aria-label="Close navigation" onClick={closeMenu} type="button">✕</button>
        </div>
        <nav className="mobile-nav-links">
          <Link onClick={closeMenu} to="/about">About</Link>
          <Link onClick={closeMenu} to="/programs">Programs</Link>
          <Link onClick={closeMenu} to="/career">Career</Link>
          <Link onClick={closeMenu} to="/blog">Blog</Link>
          <Link onClick={closeMenu} to="/courses">Courses</Link>
        </nav>
        <div className="mobile-auth">
          <button className="btn btn-primary full" type="button" onClick={() => { closeMenu(); handleAuthClick('login'); }}>Login</button>
          <button className="btn btn-ghost full signup-btn" type="button" onClick={() => { closeMenu(); handleAuthClick('signup'); }}>Sign up</button>
        </div>
      </aside>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        type={authType}
      />
    </>
  );
}
