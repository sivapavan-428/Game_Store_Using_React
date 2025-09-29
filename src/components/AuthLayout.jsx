import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return <div className="auth-page"><Outlet /></div>;
}

export default AuthLayout;
