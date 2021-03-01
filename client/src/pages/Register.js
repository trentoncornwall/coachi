import React, { useState, useRef } from "react";
import api from "../util/api";

export default function Register() {
  const [username, setusername] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const inputName = useRef();
  const inputPassword = useRef();
  const inputPassword2 = useRef();

  const submit = (e) => {
    e.preventDefault();
    if (password === password2) {
      console.log(`Registering ${username}...`);
      console.log(password);
      const data = {
        username: username,
        password: password,
      };
      console.log(data);
      api.userCreate(data).then((response) => console.log(response));
    } else {
      return console.log("passwords not matched");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input
          placeholder="username"
          ref={inputName}
          onChange={() => setusername(inputName.current.value)}
        />
        <input
          placeholder="password"
          ref={inputPassword}
          type="password"
          onChange={() => setPassword(inputPassword.current.value)}
        />
        <input
          placeholder="password"
          ref={inputPassword2}
          type="password"
          onChange={() => setPassword2(inputPassword2.current.value)}
        />
        <button> button </button>
      </form>
    </div>
  );
}
