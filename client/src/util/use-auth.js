import React, { useState, useEffect, useContext, createContext } from "react";
import api from "./api";

//initilize firebase
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
      if (result.status === 204) {
        return false;
      } else {
        setUser(result.data);
        return true;
      }
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

  //run every time a page loads
  useEffect(() => {
    console.log(user);
    api.userCheck().then((result) => {
      result.data && setUser(result.data);
    });
  }, []);

  return { user, signin, signup, logout };
}
