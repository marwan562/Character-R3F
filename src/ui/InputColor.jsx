import React from "react";

const InputColor = ({ children, color, setColor }) => {
  return (
    <div className="flex justify-around">
      <label
        for="hs-color-input"
        className="block text-sm font-medium  text-blue-600 dark:text-white"
      >
        {children}
      </label>
      <input
        type="color"
        className="p-1 h-6 w-10 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
        id="hs-color-input"
        value={color}
        title="Choose your color"
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default InputColor;
