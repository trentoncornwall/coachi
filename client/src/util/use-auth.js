import { set } from "mongoose";
import React, { useState, useEffect, useContext, createContext } from "react";
import api from "./api";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (user) => {
    return api.userLogin(user).then((result) => {
      result.data && setUser(result.data);
    });
  };

  const signup = (user) => {
    return api.userCreate(user).then((result) => {
      return result.data;
    });
  };

  const logout = () => {
    return api.userLogout().then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    api.userCheck().then((result) => {
      result.data && setUser(result.data);
    });
  }, []);

  return { user, signin, signup, logout };
}
