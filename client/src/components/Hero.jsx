// import gradientBg from "../assets/gradientherobg.jpg";
import { useNavigate } from "react-router-dom";
import gradientBg from "../assets/v960-ning-05.jpg";

import DeveloperAvatar from "./DeveloperAvatar";

const Hero = () => {
  const navigate = useNavigate();

  return (
    // <div
    //   className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-cover bg-no-repeat min-h-screen"
    //   style={{ backgroundImage: `url(${gradientBg})` }}
    // ></div>
    <div className="relative px-4 sm:px-20 xl:px-32 w-full min-h-screen flex flex-col justify-center">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-67 z-0"
        style={{ backgroundImage: `url(${gradientBg})` }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mx-auto leading-[1.2]">
            Craft with Intelligence <br />
            <span className="text-blue-700">Create with AI</span>
          </h1>
          {/* <h1>Create Smarter with AI Tools</h1>
          <h1>Unleash Ideas. Power Them with AI</h1>
          <h1>Create With AI Tools</h1> */}
          {/* <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
            Elevate every idea with our intelligent AI toolkit. From writing
            compelling articles to generating stunning visuals, streamline your
            creative process and build smarter—faster.
          </p> */}
          <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
            Elevate your ideas with intelligent AI—write, design, and streamline
            your creative process effortlessly.
          </p>
        </div>
        {/* Button section */}
        <div className="flex justify-center gap-4 text-sm max-sm:text-xs">
          <button
            onClick={() => navigate("/ai")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer hover:scale-102 active:scale-95"
          >
            Start Crafting with AI
          </button>
          <button
            onClick={() => navigate("/ai")}
            className="ml-4 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-50 transition duration-300 border-1 border-gray-300 cursor-pointer hover:scale-102 active:scale-95"
          >
            Explore Features
          </button>
        </div>

        {/* Developer Image */}
            
        <DeveloperAvatar />

        {/* End of Developer Avatar */}
      </div>
    </div>
  );
};

export default Hero;
