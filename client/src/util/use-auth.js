import React, { useState, useEffect, useContext, createContext } from "react";
import api from "./api";
import firebase from "firebase";

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
  const [avatar, setAvatar] = useState(null);

  const signin = (user) => {
    return api.userLogin(user).then((result) => {
      if (result.status === 204) {
        return false;
      } else {
        console.log(result.data);
        setUser(result.data);
        getAvatar(result.data);
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

  const getAvatar = (result) => {
    // console.log("alskdjflkasdjfkljasd");

    const storageRef = firebase.storage().ref();
    const avatarRef = storageRef.child(`avatar/${result._id}.jpg`);

    avatarRef.getDownloadURL().then((url) => setAvatar(url));
  };

  const addAvatar = (imageUrl) => {
    setAvatar(imageUrl);
  };

  // useEffect(() => {
  //   if (user) {
  //     const storageRef = firebase.storage().ref();
  //     const avatarRef = storageRef.child(`avatar/${user.id}`);

  //     avatarRef
  //       .getDownloadURL()
  //       .then((url) => setUser({ ...user, avatar: url }));
  //   }
  //   // updates user w/ avatar from firebase storage
  // }, []);

  return { user, avatar, signin, signup, logout, addAvatar };
}
