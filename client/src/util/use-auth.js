import { set } from "mongoose";
import React, { useState, useEffect, useContext, createContext } from "react";
import api from "./api";
//initates context withvalue example 'light'
const authContext = createContext();

//creates provider
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(false);

  const signin = (user) => {
    return api.userLogin(user).then(async (result) => {
      switch (result.data) {
        case "Success":
          await api.userCheck().then((response) => {
            setUser(response.data);
          });
          break;
        case "Failed":
          setUser(false);
          return false;
      }
    });
  };

  const signup = (user) => {
    // return api.userCreate(user).then();
    return api.userCreate(user).then((result) => {
      return result.data;
    });
  };

  const logout = () => {
    return api.userLogout().then(() => {
      setUser(false);
    });
  };

  useEffect(() => {
    const checkUser = api.userCheck().then((result) => {
      setUser(result.data);
    });
    return () => checkUser;
  }, []);

  return { user, signin, signup, logout };
}
