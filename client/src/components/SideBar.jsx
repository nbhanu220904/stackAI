import { Protect, SignOutButton, useClerk, useUser } from "@clerk/clerk-react";
import {
  EraserIcon,
  File,
  FileTextIcon,
  HashIcon,
  HouseIcon,
  Image,
  LucideLogOut,
  ScissorsIcon,
  SquarePenIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: HouseIcon },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePenIcon },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: HashIcon },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  {
    to: "/ai/remove-background",
    label: "Remove Background",
    Icon: EraserIcon,
  },
  { to: "/ai/remove-object", label: "Remove Object", Icon: ScissorsIcon },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileTextIcon },
  { to: "/ai/resume-creator", label: "Create Resume", Icon: File },
  { to: "/ai/community", label: "Community", Icon: UsersRoundIcon },
];

const SideBar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  //   const { userPlan } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } sm:translate-x-0 transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="user-image"
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="mt-2 text-center">{user.fullName}</h1>
        <div className="px-5 mt-5 text-sm text-gray-600 font-medium">
          {/* {navItems.map(({ to, label, Icon }) => {
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3c81f6] to-[#9234ea] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>;
          })} */}
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded transition-colors duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#004e92] to-[#0d1452] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* User details and logout Section of Sidebar Bottom */}
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img
            src={user.imageUrl}
            alt="user-profile"
            className="w-8 rounded-full"
          />
          <div>
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            {/* <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="Free">
                <span className="font-medium text-gray-700">Premium</span>
              </Protect>{" "}
              Plan
            </p> */}
            <p className="text-xs text-gray-500">
              <Protect
                plan="premium"
                fallback={
                  <span className="font-medium text-gray-700">
                    <strong>Free</strong> Plan
                  </span>
                }
              >
                <span className="font-medium text-gray-700">
                  <strong>Premium</strong> Plan
                </span>
              </Protect>
            </p>
          </div>
        </div>
        {/* <LucideLogOut onClick={signOut} /> */}
        <div className="relative group cursor-pointer">
          <LucideLogOut
            onClick={signOut}
            className="w-4.5 text-gray-600 hover:text-red-800 transition cursor-pointer"
          />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 text-sm opacity-0 group-hover:opacity-80 transition-opacity duration-300 text-gray-700 bg-white px-2 py-1 rounded shadow">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
