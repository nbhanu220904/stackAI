import React from "react";
import devAvatar from "../assets/img-avatar.jpg"; // Adjust path if needed

const DeveloperAvatar = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="flex items-center gap-4 backdrop-blur-sm px-4 py-2 rounded-xl ">
        {/* Avatar Image */}
        <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden scale-95 hover:scale-105 transition-transform duration-300">
          <img
            src={devAvatar}
            alt="Developer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        {/* <span className="text-sm sm:text-base font-medium text-gray-800">
          Developed by <strong>Bhanu</strong>
        </span> */}
        {/* <span className="text-sm sm:text-base font-medium text-gray-700">
          Crafted with care by{" "}
          <strong className="text-blue-600 font-semibold">Bhanu</strong>
        </span> */}
        <span className="text-sm sm:text-base font-medium text-gray-700">
          Designed and developed by{" "}
          <strong className="text-blue-600 font-semibold">Bhanu</strong>
        </span>
      </div>
    </div>
  );
};

export default DeveloperAvatar;
