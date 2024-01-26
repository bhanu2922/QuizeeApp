import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignupUser } from "../../store/slices/authSlice";
import { NavLink } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    dispatch(SignupUser(username, password, email));
  };
  return (
    <>
      <div className="signUp__user">
        <h1 className="title__font"> QUIZZIE </h1>
        <div>
          <button className="signUpButton">Signup </button>
          <NavLink to="/login">
            <button className="signUpButton">Login </button>
          </NavLink>
        </div>
        <br />
        <div className="mid__container">
          <div>
            <label for=" username"> Username </label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="email"> Email </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="password"> Password </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label for="confirmPassword"> Confirm Password </label>
            <input type="password" name="password" />
          </div>
          <br />
        </div>
        <button type="submit" className="signup__button" onClick={handleSignup}>
          {" "}
          SUBMIT{" "}
        </button>
      </div>
    </>
  );
};

export default Signup;
