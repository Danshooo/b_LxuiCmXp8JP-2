import { Music4, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/instruments', label: 'Instruments' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/practice', label: 'Practice Tracker' },
  { to: '/about', label: 'About' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <NavLink className="brand" to="/">
          <span className="brand-icon"><Music4 size={18} /></span>
          <span>
            <strong>Music Mentor</strong>
            <small>Beginner learning platform</small>
          </span>
        </NavLink>

        <nav className="nav-desktop">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="primary-btn nav-cta" to="/instruments">
          Start Learning
        </NavLink>

        <button className="menu-btn" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu container">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link mobile ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
