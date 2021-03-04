import React from "react";
import SignIn from "../components/SignIn/";

export default function Home() {
  //TODO add global state
  //TODO add API to check user
  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(`username: ${username}, password: ${password}`);

  //   api
  //     .userLogin({ username: username, password: password })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <SignIn />
    </>
  );
}
