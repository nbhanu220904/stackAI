import React from "react";
// import { assets } from "../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const NavBar = () => {
  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="flex justify-between items-center fixed z-5 w-full backdrop-blur-15xl py-3 px-4 sm:px-20 xl:px-32 bg-white/20">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Stack
        <span className="text-2xl text-blue-600 font-bold">AI</span>
      </h1>

      {user ? (
        <UserButton />
      ) : (
        <button
          type="button"
          onClick={openSignIn}
          className="flex items-center gap-0.5 text-md cursor-pointer px-8 py-2 rounded-full bg-blue-600 text-white"
        >
          Get Started <ArrowRightIcon className="text-sm w-8 h-5" />
        </button>
      )}
    </div>
  );
};

export default NavBar;
