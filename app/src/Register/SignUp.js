import React from "react";
<<<<<<< HEAD
=======
import {  useNavigate } from "react-router-dom";
>>>>>>> 54673d99bcff9bea2f2775c9ba74cadce24dd99e
import "./SignUp.css";
import { Link } from "react-router-dom";
import img2 from "../Images/img2.jpg";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your form submission logic here

    // Redirect to the login page after successful form submission
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    // Redirect to the login page when the button is clicked
    navigate("/login");
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="container">
      <div className="user signupBx">
        <div className="formBx">
          <form onSubmit={handleSubmit}>
            <h2>Create an account</h2>
            <div className="formGroup">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="formGroup">
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="formGroup">
              <input
                type="password"
                name="password"
                placeholder="Create Password"
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="formGroup">
              <input type="submit" value="Sign Up" />
            </div>
            <p className="signup">
              Already have an account?
              <button onClick={handleLoginRedirect}>Sign In.</button>
            </p>
          </form>
        </div>
        <div className="imgBx">
          <img src={img2} alt="img2" />
        </div>
>>>>>>> 54673d99bcff9bea2f2775c9ba74cadce24dd99e
      </div>
    </div>
  );
};

export default SignUp;
