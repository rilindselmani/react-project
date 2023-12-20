import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import "./navbar.css";
import User from "../Images/User.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="web-logo" src={Logo} alt="logo" />
      <br />
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/login">
          <img className="user-login" src={User} alt="User-login"></img>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
