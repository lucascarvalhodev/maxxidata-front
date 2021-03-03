import React, { createContext, useContext, useState } from "react";
import { IUser } from "../alias/IUser";

interface IAuthContextData {
  signed: boolean;
  user: IUser | undefined;
  setUser(user: IUser | undefined): void;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>();

  return (
    <AuthContext.Provider value={{ user, setUser, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
