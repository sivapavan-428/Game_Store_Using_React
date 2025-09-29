import React from "react";
import Toptool from "./Toptool";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Toptool />
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
