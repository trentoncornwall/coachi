import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useAuth } from "../../util/use-auth";

export default function Register({ changeView, setNewUser }) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [toastMessage, setToastMessage] = useState();
  const inputUsername = useRef();
  const inputFirstName = useRef();
  const inputLastNamme = useRef();
  const inputPassword = useRef();
  const inputVerify = useRef();

  const auth = useAuth();

  const registerUser = (e) => {
    e.preventDefault();

    //TODO validations:
    // ! pasword length
    // ! password complexity

    if (password === verify) {
      const newUser = {
        username: username.toLowerCase(),
        first: firstName.toLowerCase(),
        last: lastName.toLowerCase(),
        password: password,
      };

      auth.signup(newUser).then((result) => {
        switch (result) {
          case "Success":
            setNewUser(true);
            changeView();
          case "Username already taken":
            clearForm();
            setToastMessage(result.data);
        }
      });
    } else {
      clearForm();
      setToastMessage("Passwords do not match.");
    }
  };

  const clearForm = () => {
    setUsername("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVerify("");
  };

  return (
    <RegisterForm onSubmit={registerUser}>
      <Header>Register</Header>
      <Input
        ref={inputUsername}
        value={username}
        onChange={() => setUsername(inputUsername.current.value)}
        placeholder="username"
      />
      <Input
        ref={inputFirstName}
        value={firstName}
        onChange={() => setFirstName(inputFirstName.current.value)}
        placeholder="first name"
      />
      <Input
        ref={inputLastNamme}
        value={lastName}
        onChange={() => setLastName(inputLastNamme.current.value)}
        placeholder="last name"
      />
      <Input
        ref={inputPassword}
        value={password}
        onChange={() => setPassword(inputPassword.current.value)}
        placeholder="password"
        type="password"
      />
      <Input
        ref={inputVerify}
        value={verify}
        onChange={() => setVerify(inputVerify.current.value)}
        placeholder="password"
        type="password"
      />
      <Button type="submit">Register</Button>
      {toastMessage && <ToastMessage>{toastMessage}</ToastMessage>}
    </RegisterForm>
  );
}

const RegisterForm = styled.form`
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
    border: 2px solid var(--dark);
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
