import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css";
import img2 from "../Images/img2.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Password validation: between 8 and 16 characters including at least one digit
    if (password.length < 8 || password.length > 16 || !/\d/.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    // Additional validation, e.g., check if passwords match
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    } else {
      setConfirmPasswordError(false);
    }

    // Perform your form submission logic here

    // Redirect to the login page after successful form submission
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="user signupBx">
        <div className="formBx">
          <form onSubmit={handleSubmit}>
            <h2>Create an account</h2>
            <div className="formGroup">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formGroup">
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: passwordError ? "1px solid red" : "" }}
              />
              {passwordError && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Password must be between 8 and 16 characters long and contain
                  at least one digit.
                </p>
              )}
            </div>
            <div className="formGroup">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ border: confirmPasswordError ? "1px solid red" : "" }}
              />
              {confirmPasswordError && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Passwords do not match.
                </p>
              )}
            </div>
            <div className="formGroup">
              <input type="submit" value="Sign Up" />
            </div>
            <p className="signup">
              Already have an account?
              <Link to="/login">Sign in.</Link>
            </p>
          </form>
        </div>
        <div className="imgBx">
          <img src={img2} alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
