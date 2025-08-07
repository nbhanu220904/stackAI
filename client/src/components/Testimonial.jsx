import React from "react";
import developerImage from "../assets/image-avatar.jpg";

const Testimonial = () => {
  <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>;
  return (
    <div className="relative px-4 sm:px-20 xl:px-32 w-full min-h-screen flex flex-col justify-center items-center">
      {/* Background image layer */}
      {/* <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-55 z-0 rotate-0"
        style={{ backgroundImage: `url(${gradientBg})` }}
      ></div> */}
      <div className="justify-center items-center text-center space-y-4 mb-6">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Loved by Creators
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="max-w-80 bg-black text-white rounded-2xl">
          <div className="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src={developerImage}
              alt=""
              className="h-[330px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            />
            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div className="px-4 pb-4">
            <p className="font-medium border-b border-gray-600 pb-5">
              “I’ve tried dozens of tools, but StackAI is the first that truly
              understands the needs of creators like me — intuitive, fast, and
              delightfully powerful.”
            </p>
            <p className="mt-4">— N Bhanu Durga Prasad</p>
            <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
              Full Stack Developer
            </p>
          </div>
        </div>
        <div className="max-w-80 bg-black text-white rounded-2xl">
          <div className="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src={developerImage}
              alt=""
              className="h-[330px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            />
            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div className="px-4 pb-4">
            <p className="font-medium border-b border-gray-600 pb-5">
              “I’ve tried dozens of tools, but StackAI is the first that truly
              understands the needs of creators like me — intuitive, fast, and
              delightfully powerful.”
            </p>
            <p className="mt-4">— N Bhanu Durga Prasad</p>
            <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
              Full Stack Developer
            </p>
          </div>
        </div>
        <div className="max-w-80 bg-black text-white rounded-2xl">
          <div className="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src={developerImage}
              alt=""
              className="h-[330px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            />
            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div className="px-4 pb-4">
            <p className="font-medium border-b border-gray-600 pb-5">
              “I’ve tried dozens of tools, but StackAI is the first that truly
              understands the needs of creators like me — intuitive, fast, and
              delightfully powerful.”
            </p>
            <p className="mt-4">— N Bhanu Durga Prasad</p>
            <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
