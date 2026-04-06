import { LoginResponseModel } from "../modals/LoginResponseModel";

const USER_DATA_KEY = "userData";

export const getUser = (): LoginResponseModel | null => {
  const data = localStorage.getItem(USER_DATA_KEY);
  return data ? JSON.parse(data) : null;
};

export const setUser = (user: LoginResponseModel) => {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem(USER_DATA_KEY);
};