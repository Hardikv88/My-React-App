// src/types/settings.ts

export interface ProfileSettingsType {
  name: string;
  email: string;
}

export interface NotificationSettingsType {
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export interface SecuritySettingsType {
  twoFactorAuth: boolean;
}