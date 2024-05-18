import '../styles/Navbar.css';

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav className="navbar">
      <a  href="/https://www.linkedin.com/in/bmontanye/">LinkedIn</a> 
      <a href="/">Portfolio</a>
      <a href="/">Contact form</a>
    </nav>
  );
}

export default Navbar;