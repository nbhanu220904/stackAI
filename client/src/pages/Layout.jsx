import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex flex-col min-h-screen">
        <h1>Layout</h1>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
