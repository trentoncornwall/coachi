import React, { useState, useEffect } from "react";
import api from "../util/api";
import Feed from "../components/Feed";
import SignIn from "../components/SignIn/";

export default function Home() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    // TODO check to see if the user is already authenticated, no relying on the state
    api.userCheck().then((result) => {
      if (result.data) {
        return setAuth(true);
      }

      return setAuth(false);
    });
  }, [isAuth]);

  return <>{isAuth ? <Feed /> : <SignIn setAuth={setAuth} />}</>;
}
