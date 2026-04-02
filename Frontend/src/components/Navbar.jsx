import { Link } from 'react-router-dom';  // Link is React Router's version of <a> — it navigates without refreshing the page
import logoUrl from '../assets/logo.svg'; // dynamically import the logo from assets

export default function Navbar() {
  return (
    <nav className="navbar">                           {/* <nav> is a semantic HTML element for navigation */}

      <Link to="/" className="flex items-center font-display text-text-primary text-xl hover:scale-105 transition-transform duration-300 origin-left">                                    {/* clicking the logo goes back to the homepage */}
        <img src={logoUrl} alt="HackKnight Logo" className="w-10 h-10" />
        <span className="leading-none pt-0.5 font-bold">HackKnight</span>                        {/* placeholder for the logo/brand name */}
      </Link>

      <ul className="flex gap-6 items-center">         {/* unordered list to hold nav items */}

        <li>                                           {/* list item for Schedule */}
          <Link to="/schedule" className="navbar-link">Schedule</Link>         {/* Link navigates to the /schedule page */}
        </li>

        <li>                                           {/* list item for Team */}
          <a href="/#team" className="navbar-link">Team</a>                    {/* href="/#team" scrolls to the element with id="team" on the homepage */}
        </li>

        <li>                                           {/* list item for Sponsors */}
          <Link to="/sponsors" className="navbar-link">Sponsors</Link>         {/* Link navigates to the /sponsors page */}
        </li>

        <li>                                           {/* list item for FAQ */}
          <a href="/#faq" className="navbar-link">FAQ</a>                      {/* href="/#faq" scrolls to the element with id="faq" on the homepage */}
        </li>

      </ul>

      <button className="btn-primary">Register</button>                        {/* placeholder Register button — no functionality yet */}

    </nav>
  );
}