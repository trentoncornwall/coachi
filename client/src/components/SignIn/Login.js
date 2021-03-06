import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import api from "../../util/api";

export default function Login({ setAuth, newUser }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [toastMessage, setToastMessage] = useState();
  const inputUsername = useRef();
  const inputPassword = useRef();

  const SignIn = (e) => {
    e.preventDefault();

    const user = { username, password };

    api.userLogin(user).then((result) => {
      switch (result.data) {
        case "Success":
          setAuth(true);
          break;
        case "Failed":
          setToastMessage("Incorrect username or password");
          break;
      }
    });
  };

  useEffect(() => {
    if (newUser) setToastMessage("New account created.");
  }, [newUser]);
  return (
    <>
      <LoginForm onSubmit={SignIn}>
        <Header>Sign In</Header>
        <Input
          ref={inputUsername}
          placeholder="username"
          onChange={() => setUsername(inputUsername.current.value)}
        />
        <Input
          ref={inputPassword}
          placeholder="password"
          type="password"
          onChange={() => setPassword(inputPassword.current.value)}
        />
        <Button type="submit">Submit</Button>
        {toastMessage && <ToastMessage>{toastMessage}</ToastMessage>}
      </LoginForm>
    </>
  );
}

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  max-width: 20rem;
  height: 2em;
  padding: 0px 10px;
  margin-bottom: 15px;
  font-size: 1em;
  border: 1px var(--dark) solid;
  border-radius: 5px;
  :focus {
    border: 2px solid var(--secondary);
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 21.5rem;
  height: 2em;
  font-size: 1em;
  margin: 0px 0px 15px 0px;
  color: var(--white);
  background-color: var(--accent);
  border: 1px var(--dark) solid;
  :hover {
    cursor: pointer;
    opacity: 0.9;
    background-color: var(--accent);
  }
`;

const Header = styled.h1`
  margin: 15px 0px;
  color: var(--dark);
`;

const ToastMessage = styled.div`
  width: 100%;
  max-width: 21.5rem;
  height: 2em;
  font-size: 1em;
  margin: 0px 0px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--dark);
`;
