import { Link } from "react-router-dom";
import "../Components/Header.css";
function Header() {
  return (
    <>
      
      <nav className="nav active desktop-menu-toggle">
  <div className="nav-container">
    <div className="logo">Portfolio</div>
    <ul className="nav-links">
      <li>
         <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/about">About</Link>
      </li>
      <li>
       <Link to="/technology">Technology</Link>
      </li>
      <li>
       <Link to="/degree">Degree</Link>
      </li>
      <li>
       <Link to="/projects">projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {/* <li>
        <Link to="/Api">API Connectivity</Link>
      </li> */}
    </ul>
  </div>
</nav>

    </>
  );
}

export default Header;
