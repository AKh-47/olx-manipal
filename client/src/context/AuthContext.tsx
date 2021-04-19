import React, { ReactElement, useContext, useState } from "react";
import { User, Nullable } from "../utils/types";

interface Props {
  children: ReactElement;
}

interface Value {
  currentUser: Nullable<User>;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<Nullable<Value>>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: Props): ReactElement {
  const [currentUser, setCurrentUser] = useState<Nullable<User>>({
    id: "6056ce13f682253351cc2247",
    name: "Akhil",
    email: "kalaakki@gmail.com",
    iat: 1616301589,
  });

  const register = async (name: string, email: string, password: string) => {};

  const login = async (email: string, password: string) => {};

  const logout = async () => {};

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
