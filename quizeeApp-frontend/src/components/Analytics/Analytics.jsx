import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Analytics = () => {
  return (
    <div>
      <Sidebar />
      <h1>welcome to Analytics page </h1>
    </div>
  );
};

export default Analytics;
