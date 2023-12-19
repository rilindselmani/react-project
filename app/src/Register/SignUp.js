import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import img2 from "../Images/img2.jpg";

const SignUp = ({ toggleForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="user signupBx">
      <div className="formBx">
        <form onSubmit={handleSubmit}>
          <h2>Create an account</h2>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email Address" />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <input type="submit" value="Sign Up" />
          <p className="signup">
            Already have an account? <Link to="login">Sign In.</Link>
          </p>
        </form>
      </div>
      <div className="imgBx">
        <img src={img2} alt="img2" />
      </div>
    </div>
  );
};

export default SignUp;
