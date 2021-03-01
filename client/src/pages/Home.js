import React, { useState, useRef } from "react";

export default function Home() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const inputName = useRef();
  const inputPassword = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log(`username: ${username}, password: ${password}`);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          ref={inputName}
          onChange={() => setUsername(inputName.current.value)}
        />
        <input
          ref={inputPassword}
          type="password"
          onChange={() => setPassword(inputPassword.current.value)}
        />
        <button> button </button>
      </form>
    </div>
  );
}
