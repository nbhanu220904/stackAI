import React from "react";
// import gradientBg from "../assets/v960-ning-05.jpg";
import { useNavigate } from "react-router-dom";

import { AiToolsData } from "../assets/assets"; // Assuming you have a data file for AI tools
import { useUser } from "@clerk/clerk-react";

const AITools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="relative px-4 sm:px-20 xl:px-32 w-full min-h-screen flex flex-col justify-center">
      {/* Background image layer */}
      {/* <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-55 z-0 rotate-180"
        style={{ backgroundImage: `url(${gradientBg})` }}
      ></div> */}

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-6">
          <div className="px-4 sm:px-20 xl:px-32 py-10">
            <div className="text-center">
              <h1 className="text-slate-700 text-[40px] font-semibold mb-4">
                Create Smarter with Next-Gen AI
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                All-in-one tools to write, design, and elevate your
                content—powered by cutting-edge AI innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            {/* {AiToolsData.map((item, index) => (
              <div
                key={index}
                className="p-8 m-4 max-w-xs rounded-lg bg-[#fdfdfe] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:translate-y-1 cursor-pointer"
                onClick={() => user && navigate(item.path)}
              >
                <item.icon className="w-16 h-16 mb-4 text-blue-600" />
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))} */}
            {AiToolsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-8 m-4 max-w-xs rounded-lg bg-[fdfdfe] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => user && navigate(item.path)}
              >
                {/* {item.Icon && typeof item.Icon === "function" && (
                  <item.Icon className="w-16 h-16 mb-4 text-blue-600" />
                )} */}
                {/* <item.Icon className="flex justify-center items-center w-16 h-16 mb-4 text-white" /> */}
                {/* <div className="flex justify-center items-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#B153EA] to-[#E549A3]">
                  <item.Icon className="w-8 h-8 text-white" />
                </div> */}
                <item.Icon
                  className="w-12 h-12 p-3 text-white rounded-xl"
                  style={{
                    background: `linear-gradient(to bottom, ${item.bg.from}, ${item.bg.to})`,
                  }}
                />
                <h3 className="mt-6 mb-3 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-[95%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITools;
