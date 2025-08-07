import {
  EditIcon,
  File,
  FileTextIcon,
  HashIcon,
  LucideEraser,
  SparklesIcon,
} from "lucide-react";
import React, { useState } from "react";

const ReviewResume = () => {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Write Article Input Left Column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <SparklesIcon className="w-6 text-[#004e92]" />
          <h1 className="text-xl font-semibold">AI Resume Review</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          onChange={(event) => setInput(event.target.files[0])}
          //   value={input}
          type="file"
          accept="application/pdf"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required
        />
        <p className="text-xs text-gray-500 font-light mt-1">
          Support PDF format only...
        </p>
        <br />

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#004e92] to-[#0d1452] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <FileTextIcon className="w-5" />
          Review Resume
        </button>
      </form>
      {/* Write Article Input Right Column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <FileTextIcon className="w-5 h-5 text-[#004e92]" />
          <h1 className="text-xl font-semibold">
            Resume Review Analysis Report
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <FileTextIcon className="w-9 h-9" />
            <p>
              Effortlessly refine your resume — upload your CV and click 'Review
              Resume' to get instant, AI-powered feedback for a polished,
              job-ready profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
