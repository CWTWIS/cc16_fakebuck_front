import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as authApi from "../../../api/auth";
import { getToken, storeToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => {
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
    setAuthUser(res.data);
    storeToken(res.data.accessToken);
  };
  return (
    <AuthContext.Provider value={{ register, authUser, login, initialLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
