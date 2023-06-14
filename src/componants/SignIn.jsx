import React from "react";
import "./CSS/SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div class="center shadow">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div class="signup_link">
            Not a member? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
