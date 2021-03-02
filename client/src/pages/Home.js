import React, { useState, useRef } from "react";
import SignIn from "../components/SignIn/";
import api from "../util/api";

export default function Home() {
  const [username, setusername] = useState(null);
  const [password, setPassword] = useState(null);
  const inputName = useRef();
  const inputPassword = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log(`username: ${username}, password: ${password}`);

    api
      .userLogin({ username: username, password: password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <SignIn />
      {/* <form onSubmit={submit}>
        <input
          ref={inputName}
          onChange={() => setusername(inputName.current.value)}
        />
        <input
          ref={inputPassword}
          type="password"
          onChange={() => setPassword(inputPassword.current.value)}
        />
        <button> button </button>
      </form>
      <button onClick={() => api.userCheck().then((user) => console.log(user))}>
        check user
      </button> */}
    </div>
  );
}
