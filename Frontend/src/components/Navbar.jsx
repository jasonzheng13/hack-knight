import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logoprimary.svg';

// Flip to true when MLH approves the badge
const SHOW_MLH_BADGE = false;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* MLH Trust Badge — fixed to top-left of viewport */}
      {SHOW_MLH_BADGE && (
        <a
          id="mlh-trust-badge"
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray"
          target="_blank"
          rel="noreferrer"
          className="w-[50px] md:w-[100px]"
          style={{
            display: "block",
            position: "fixed",
            left: "0px",
            top: 0,
            zIndex: 10000,
          }}
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-gray.svg"
            alt="Major League Hacking 2026 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>
      )}

      {/* ── LEFT GROUP (flex-1) — Logo + Wordmark ─────────── */}
      <div className="flex flex-1 items-center">
        {/* On mobile: absolutely centered icon only. On desktop: normal flow with ml to clear badge */}
        <a
          href="/#hero"
          className="navbar-logo flex items-center gap-2 font-display text-text-primary text-xl hover:scale-105 transition-transform duration-300"
        >
          <img src={logoUrl} alt="HackKnight Logo" className="w-10 h-10" />
          <span className="navbar-wordmark leading-none pt-0.5 font-bold text-2xl">HackKnight</span>
        </a>
      </div>

      {/* ── CENTER — Desktop nav tabs ──────────────────────── */}
      <ul className="navbar-desktop-links flex gap-20 items-center">
        <li><a href="/#sponsors" className="navbar-link">Sponsors</a></li>
        <li><a href="/#photos"   className="navbar-link">Past Events</a></li>
        <li><a href="/#schedule" className="navbar-link">Schedule</a></li>
        <li><a href="/#team"     className="navbar-link">Team</a></li>
        <li><a href="/#faq"      className="navbar-link">FAQ</a></li>
      </ul>

      {/* ── RIGHT GROUP (flex-1) — Apply Now + Hamburger ───── */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <Link to="/register" className="navbar-desktop-register btn-primary">Apply Now</Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-mobile-toggle"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div className={`mobile-nav-menu ${menuOpen ? 'mobile-nav-menu-open' : ''}`}>
        <ul className="flex flex-col items-center gap-6 pt-6 pb-4">
          <li><a href="/#sponsors" className="navbar-link text-lg" onClick={() => setMenuOpen(false)}>Sponsors</a></li>
          <li><a href="/#photos"   className="navbar-link text-lg" onClick={() => setMenuOpen(false)}>Past Events</a></li>
          <li><a href="/#schedule" className="navbar-link text-lg" onClick={() => setMenuOpen(false)}>Schedule</a></li>
          <li><a href="/#team"     className="navbar-link text-lg" onClick={() => setMenuOpen(false)}>Team</a></li>
          <li><a href="/#faq"      className="navbar-link text-lg" onClick={() => setMenuOpen(false)}>FAQ</a></li>
        </ul>
        <div className="flex justify-center pb-6">
          <Link to="/register" className="btn-primary" onClick={() => setMenuOpen(false)}>Apply Now</Link>
        </div>
      </div>
    </nav>
  );
}
