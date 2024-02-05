import { createContext, useEffect, useState } from "react";
import * as authApi from "../../../api/auth";
import { storeToken } from "../../../utils/local-storage";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(
    localStorage.getItem("accessToken") || null
  );
  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };
  useEffect(() => {}, []);
  const login = async (credential) => {
    const res = await authApi.login(credential);
    setAuthUser(res.data);
  };
  return (
    <AuthContext.Provider value={{ register, authUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
