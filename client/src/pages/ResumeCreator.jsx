import React, { useEffect, useState } from "react";

const ResumeCreator = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    // Example launch date: 7 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      {/* Coming Soon Banner */}
      <div className="w-full bg-blue-600 text-white py-3 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="font-semibold text-lg">
          🚀 This feature is available soon!
        </p>
        <div className="flex gap-3 text-sm font-mono">
          <span>{timeLeft.days}d</span>:<span>{timeLeft.hours}h</span>:
          <span>{timeLeft.mins}m</span>:<span>{timeLeft.secs}s</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between p-10 bg-white">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start gap-6 max-w-xl">
          <p className="uppercase tracking-wide text-sm text-gray-500">
            The Best Resume Builder Online
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Make Your Professional Resume{" "}
            <span className="text-blue-600">in Minutes</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Try our free resume builder and create a resume with the power of
            AI. Let the Genius resume maker help build your resume quickly and
            effortlessly.
          </p>

          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg shadow-md">
            Build My Resume Now
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
          <img
            src="https://www.mycvcreator.com/assets/img/about-img1.png"
            alt="Resume preview"
            className="max-w-md w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeCreator;
