import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../store/slices/authSlice";
import "./login.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(LoginUser(email, password));
  };

  return (
    <>
      <div className="login__user">
        <h1 className="title__font"> QUIZZIE </h1>
        <div>
          <NavLink to="/" activeClassName="active">
            <button className="signUpButton">Signup </button>
          </NavLink>
          <button type="button " className="signUpButton">
            Login
          </button>
        </div>
        <br />
        <div className="mid__container">
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
        </div>
        <NavLink to="/dashboard" activeClassName="active">
          <button type="submit" className="login__button" onClick={handleLogin}>
            {" "}
            LOGIN{" "}
          </button>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
