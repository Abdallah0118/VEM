import React from "react";
import "./CSS/SignIn.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      {" "}
      <div class="center shadow">
        <h1>Sign Up</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required name="Username" />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="email" required name="Email" />
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_field">
            <input type="password" required name="Password" />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Sign Up" />
          <div class="signup_link">
            Or <Link to="/signin">Signin</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
