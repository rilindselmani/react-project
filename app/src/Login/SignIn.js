import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import img1 from "../Images/img1.jpg";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here

    // Redirect to the home page after successful login
    navigate("/");
  };

  return (
<<<<<<< HEAD
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
          <Link to="signup">Sign Up.</Link>
        </form>
=======
    <div className="container">
      <div className="user signinBx">
        <div className="imgBx">
          <img src={img1} alt="img1" />
        </div>
        <div className="formBx">
          <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <div className="formGroup">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="formGroup">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="formGroup">
              <input type="submit" value="Login" />
            </div>
            <p className="signup">Don't have an account?</p>
            <Link to="/signup">Sign Up.</Link>
          </form>
        </div>
>>>>>>> 54673d99bcff9bea2f2775c9ba74cadce24dd99e
      </div>
    </div>
  );
};

export default SignIn;
