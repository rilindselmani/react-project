import React from "react";
import "./SignUp.css";
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
      </div>
    </div>
  );
};

export default SignUp;
