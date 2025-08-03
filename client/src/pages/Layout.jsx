import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Menu, XIcon } from "lucide-react";
import SideBar from "../components/SideBar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <>
      {/* <NavBar /> */}
      <div className="flex flex-col items-start justify-start h-screen">
        <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Stack
            <span className="text-2xl text-blue-600 font-bold">AI</span>
          </h1>

          {sidebar ? (
            <XIcon
              onClick={() => setSidebar(false)}
              className="w-6 h-6 text-gray-600 sm:hidden"
            />
          ) : (
            <Menu
              onClick={() => setSidebar(true)}
              className="w-6 h-6 text-gray-600 sm:hidden"
            />
          )}
        </nav>
        <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
          <SideBar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="flex-1 bg-[#f4f7fb]">
            <Outlet />
          </div>
        </div>
        {/* <div className="flex-1 w-full mt-16 px-4">
          <Outlet />
        </div> */}
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SignIn />
    </div>
  );
};

export default Layout;
