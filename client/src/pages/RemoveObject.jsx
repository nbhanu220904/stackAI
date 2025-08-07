/* eslint-disable no-unused-vars */
import {
  EditIcon,
  HashIcon,
  LucideEraser,
  ScissorsIcon,
  SparklesIcon,
} from "lucide-react";
import React, { useState } from "react";

const RemoveObject = () => {
  const [input, setInput] = useState("");
  const [object, setObject] = useState("");
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
          <h1 className="text-xl font-semibold">AI Object Remover</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          onChange={(event) => setInput(event.target.files[0])}
          //   value={input}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required
        />
        <p className="mt-6 text-sm font-medium">Describe Object to Remove</p>
        <textarea
          onChange={(event) => setObject(event.target.value)}
          value={object}
          rows={5}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="Ex: Remove car in Background. etc..."
          required
        />
        <p className="text-xs text-gray-500 font-light mt-1">
          Be Specific and clearly mention that what you have to remove from the
          image.
        </p>
        <br />

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#004e92] to-[#0d1452] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <ScissorsIcon className="w-5" />
          Remove Object
        </button>
      </form>
      {/* Write Article Input Right Column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <ScissorsIcon className="w-5 h-5 text-[#004e92]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <ScissorsIcon className="w-9 h-9" />
            <p>
              Remove the background from your image with precision — upload your
              photo and click 'Remove Background' to eliminate unwanted
              surroundings instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RemoveObject;
