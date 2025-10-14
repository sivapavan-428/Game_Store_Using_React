import React from "react";
import Toptool from "./Toptool";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Toptool />
      <div className="main-body">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
