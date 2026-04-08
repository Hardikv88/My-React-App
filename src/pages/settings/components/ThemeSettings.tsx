// src/pages/Settings/components/ThemeSettings.tsx

import React, { use, useEffect, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

const ThemeSettings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  console.log("Current theme:", theme);
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
          <div>
            <h3 className="font-medium text-gray-700">Light Mode</h3>
            <p className="text-sm text-gray-500">Bright and clean appearance</p>
          </div>

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
          <div>
            <h3 className="font-medium text-gray-500 dark:text-white">
              Dark Mode
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Easy on the eyes at night
            </p>
          </div>

          {theme === "dark" && (
            <span className="text-blue-500 font-semibold">✓</span>
          )}
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default ThemeSettings;
