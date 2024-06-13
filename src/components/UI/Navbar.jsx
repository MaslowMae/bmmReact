import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  
  return (
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        > About 
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Portfolio"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/PortfolioPage' ? 'nav-link active' : 'nav-link'}
        > Projects 
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Resume"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/ResumePage' ? 'nav-link active' : 'nav-link'}
        > Resume 
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        > Contact me
        </Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;

