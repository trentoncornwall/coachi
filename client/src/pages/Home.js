import React, { useState, useEffect } from "react";
import api from "../util/api";
import SignIn from "../components/SignIn/";

export default function Home() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    // TODO check to see if the user is already authenticated, no relying on the state
    api.userCheck().then((result) => console.log(result));
    if (isAuth) {
      api.userCheck().then((result) => console.log(result));
    } else {
      console.log("user is not authenticated");
    }
  }, [isAuth]);

  return (
    // TODO create render condition
    <>
      <SignIn setAuth={setAuth} />
    </>
  );
}
