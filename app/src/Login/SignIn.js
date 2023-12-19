import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import img1 from "../Images/img1.jpg";

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 8 || password.length > 16 || !/\d/.test(password)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    navigate("/");
  };

  return (
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
              <input
                type="password"
                name="current-password"
                placeholder="Password"
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
              <input type="submit" value="Login" />
            </div>
            <p className="signup">
              Don't have an account? <Link to="/register">Sign Up.</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
