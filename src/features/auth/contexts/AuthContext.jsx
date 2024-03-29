import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as authApi from "../../../api/auth";
import * as userApi from "../../../api/user";
import { getToken, storeToken, clearToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => {
          console.log(res.data);
          setAuthUser(res.data.user);
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        })
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (credential) => {
    const res = await authApi.login(credential);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  const logout = () => {
    setAuthUser(null);
    clearToken();
  };

  const updateUser = async (user) => {
    const res = await userApi.updateUser(user);
    setAuthUser((prev) => ({ ...prev, ...res.data }));
  };
  return (
    <AuthContext.Provider
      value={{ register, authUser, login, initialLoading, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
