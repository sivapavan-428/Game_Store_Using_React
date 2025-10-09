import React from "react";
import Toptool from "./Toptool";
// import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "./MainLayout.css"; 

function MainLayout() {
  return (
    <div className="main-layout">
      <Toptool />
      <div className="main-body">
        
        {/* <div className="content"> */}
          <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}

export default MainLayout;
