import React, { useState, useRef } from "react";
import styled from "styled-components";
import api from "../../util/api";

export default function Register() {
  const [username, setUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [verify, setVerify] = useState();
  const inputUsername = useRef();
  const inputFirstName = useRef();
  const inputLastNamme = useRef();
  const inputPassword = useRef();
  const inputVerify = useRef();

  const registerUser = (e) => {
    e.preventDefault();

    //TODO validations:
    // ! DB User validation error handling result.data.?errors
    // ! pasword length
    // ! password complexity

    if (password === verify) {
      const newUser = {
        username: username,
        first: firstName,
        last: lastName,
        password: password,
      };

      api
        .userCreate(newUser)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  };

  return (
    <RegisterForm onSubmit={registerUser}>
      <Header>Register</Header>
      <Input
        ref={inputUsername}
        onChange={() => setUsername(inputUsername.current.value)}
        placeholder="username"
      />
      <Input
        ref={inputFirstName}
        onChange={() => setFirstName(inputFirstName.current.value)}
        placeholder="first name"
      />
      <Input
        ref={inputLastNamme}
        onChange={() => setLastName(inputLastNamme.current.value)}
        placeholder="last name"
      />
      <Input
        ref={inputPassword}
        onChange={() => setPassword(inputPassword.current.value)}
        placeholder="password"
        type="password"
      />
      <Input
        ref={inputVerify}
        onChange={() => setVerify(inputVerify.current.value)}
        placeholder="password"
        type="password"
      />
      <Button type="submit">Register</Button>
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
