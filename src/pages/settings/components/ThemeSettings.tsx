// src/pages/Settings/components/ThemeSettings.tsx

import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const ThemeSettings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Choose your preferred theme
        </p>
      </div>

      {/* Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border dark:border-gray-700 p-5 space-y-4">
        {/* Light Theme */}
        <div
          className={`cursor-pointer flex items-center justify-between p-4 rounded-xl border transition
            ${
              theme === "light"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
        >
          <button onClick={toggleTheme} className="w-full text-left">
            <h3 className="font-medium text-gray-700">Light Mode</h3>
            <p className="text-sm text-gray-500">Bright and clean appearance</p>
          </button>

          {theme === "light" && (
            <span className="text-blue-500 font-semibold">✓</span>
          )}
        </div>

        {/* Dark Theme */}
        <div
          className={`cursor-pointer flex items-center justify-between p-4 rounded-xl border transition
            ${
              theme === "dark"
                ? "border-blue-500 bg-gray-700"
                : "border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
        >
          <button onClick={toggleTheme} className="w-full text-left">
            <h3 className="font-medium text-gray-700">Dark Mode</h3>
            <p className="text-sm text-gray-500">Easy on the eyes at night</p>
          </button>

          {theme === "dark" && (
            <span className="text-blue-500 font-semibold">✓</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
