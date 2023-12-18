import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import "./navbar.css";
import User from "../Images/User.png";
import Icon from "../Images/Icon.svg";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);

    const body = document.body;
    body.classList.toggle("dark-mode");
  };
  return (
    <div className={`navbar ${clicked ? "dark-mode" : ""}`}>
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
        <Link to="/SignIn" target="_blank" rel="noreferrer">
          <img className="user-login" src={User} alt="User-login"></img>
        </Link>
      </div>
      <button
        className={`button ${clicked ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <button className={`button-icon ${clicked ? "moveLeft" : ""}`}>
          <img className="icona" src={Icon} alt="icona" />
        </button>
      </button>
    </div>
  );
};

export default Navbar;
