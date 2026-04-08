import React, { useState } from "react";
import { NotificationSettingsType } from "../../../modals/settings";

const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState<NotificationSettingsType>({
    emailNotifications: true,
    pushNotifications: false,
  });

  const toggleSetting = (key: keyof NotificationSettingsType) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Notification Settings
        </h2>
        <p className="text-sm text-gray-500">
          Manage how you receive notifications
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-5 space-y-5">
        
        {/* Email Notifications */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-md font-medium text-gray-700">
              Email Notifications
            </h3>
            <p className="text-sm text-gray-500">
              Receive updates via email
            </p>
          </div>

          {/* Toggle */}
          <button
            onClick={() => toggleSetting("emailNotifications")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300
              ${
                settings.emailNotifications
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
                ${
                  settings.emailNotifications
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
            />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t"></div>

        {/* Push Notifications */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-md font-medium text-gray-700">
              Push Notifications
            </h3>
            <p className="text-sm text-gray-500">
              Get real-time alerts on your device
            </p>
          </div>

          {/* Toggle */}
          <button
            onClick={() => toggleSetting("pushNotifications")}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300
              ${
                settings.pushNotifications
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
                ${
                  settings.pushNotifications
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;