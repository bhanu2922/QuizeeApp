import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div class="sidebar">
        <h2 className="sidebar__title">Quizee</h2>
        <ul className="side_middle_bar">
          <NavLink to="">
            <li>
              <button className="side_middle_bar_title">Dashboard </button>
            </li>
          </NavLink>
          <NavLink to="analytics">
            <li>
              <button className="side_middle_bar_title">Analytics</button>
            </li>
          </NavLink>
          <NavLink to="createquiz">
            <li>
              <button className="side_middle_bar_title">Create Quiz</button>{" "}
            </li>
          </NavLink>
        </ul>
        <ul>
          <hr />
          <NavLink to="/ ">
            <li className="footer__title">LOGOUT</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
