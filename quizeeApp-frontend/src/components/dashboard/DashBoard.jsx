import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashboard__1">
      <Sidebar />
      <div className="restOfTheBar">
        <div className="upper__bar">
          <div className="box__1">
            <span>12 quiz </span>
            <p>Created</p>
          </div>
          <div className="box__2">
            <span>12 questions </span>
            <p>Created</p>
          </div>
          <div className="box__3">
            <span>1.4K Total </span>
            <p>Impressions</p>
          </div>
        </div>
        <h2 className="mid__title"> Trending Quizs </h2>
        <div className="lower__bar"></div>
      </div>
    </div>
  );
};

export default DashBoard;
