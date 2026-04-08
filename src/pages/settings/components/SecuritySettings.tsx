// SecuritySettings.tsx

import React, { useState } from "react";
import { SecuritySettingsType } from "../../../modals/settings";

const SecuritySettings: React.FC = () => {
  const [security, setSecurity] = useState<SecuritySettingsType>({
    twoFactorAuth: false,
  });

  return (
    <div className="space-y-4">
  <h2 className="text-2xl font-semibold">Security Settings</h2>

  <label className="flex items-center space-x-2">
    <input type="checkbox" />
    <span>Enable Two-Factor Authentication</span>
  </label>
</div>
  );
};

export default SecuritySettings;