import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser, setUser, removeUser } from "../utils/localStorage";
import { LoginResponseModel } from "../modals/LoginResponseModel";

interface AuthContextType {
  user: LoginResponseModel | null;
  login: (data: LoginResponseModel) => void;
  logout: () => void;
  updateUser: (data: Partial<LoginResponseModel>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<LoginResponseModel | null>(null);

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) setUserState(storedUser);
  }, []);

  const login = (data: LoginResponseModel) => {
    setUserState(data);
    setUser(data);
  };

  const logout = () => {
    setUserState(null);
    removeUser();
  };

  const updateUser = (data: Partial<LoginResponseModel>) => {
    setUserState((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...data };
      setUser(updated);
      return updated;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;