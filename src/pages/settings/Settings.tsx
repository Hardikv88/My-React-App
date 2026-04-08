// src/pages/Settings/Settings.tsx

import React, { useState } from "react";
import NotificationSettings from "./components/NotificationSettings";
import SecuritySettings from "./components/SecuritySettings";
import ThemeSettings from "./components/ThemeSettings";
import { useTheme } from "../../context/ThemeContext";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("notifications");
  const { theme } = useTheme();
  const tabs = [
    { key: "notifications", label: "Notifications" },
    { key: "security", label: "Security" },
    { key: "theme", label: "Theme" },
  ];

  console.log("Current theme in Settings:", theme);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage your account preferences
          </p>
        </div>

        {/* Tabs */}
        <div className="relative border-b border-gray-200 mb-8">
          {/* Scrollable tabs (mobile friendly) */}
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative pb-3 text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300
                  ${
                    activeTab === tab.key
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
              >
                {tab.label}
                {/* Active underline */}
                {activeTab === tab.key && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 rounded-full transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gray-50 rounded-2xl p-5 md:p-6 transition-all duration-300">
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "security" && <SecuritySettings />}
          {activeTab === "theme" && <ThemeSettings />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
