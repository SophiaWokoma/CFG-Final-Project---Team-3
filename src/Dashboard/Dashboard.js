import React from "react";
import "./Dashboard.css";
import Sidebar from "../Components/Sidebar/Sidebar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainDash } from "../Components/MainDash/MainDash";
import RightSide from "../Components/RightSide/RightSide";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Dashboard-Glass">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}
