import "./navbar.css";

// Functional component for rendering the navigation bar
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">API Showcase</div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
