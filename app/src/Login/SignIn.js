import React from "react";
import { Link } from "react";
import "./SignIn.css";
import img1 from "../Images/img1.jpg";

const SignIn = ({ toggleForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="user signinBx">
      <div className="imgBx">
        <img src={img1} alt="img1" />
      </div>
      <div className="formBx">
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Login" />
          <p className="signup">Don't have an account?</p>
          <Link to="/signup">Sign Up.</Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
