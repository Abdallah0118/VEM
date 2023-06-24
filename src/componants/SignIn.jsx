import React from "react";
import "./CSS/SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="center shadow">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
