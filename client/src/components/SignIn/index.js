import React, { useState } from "react";
import Login from "./Login";
import Switch from "./Switch";
import Register from "./Register";
import styled from "styled-components";

export default function SignIn({ setAuth }) {
  const [register, setRegister] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const createAccount = () => {
    setRegister(!register);
  };

  return (
    <>
      <Panel>
        {register ? (
          <Register changeView={createAccount} setNewUser={setNewUser} />
        ) : (
          <Login setAuth={setAuth} newUser={newUser} />
        )}
      </Panel>
      <NewUserPanel>
        <Switch register={register} changeView={createAccount} />
      </NewUserPanel>
    </>
  );
}

const Panel = styled.div`
  background-color: var(--light);
  padding: 15px;
  height: auto;
  width: 30vw;
  min-width: 400px;
  margin: 25vh auto 0;
  border: 1px var(--dark) solid;
  border-radius: 4px;
`;

const NewUserPanel = styled.div`
  background-color: var(--white);
  padding: 0px 15px;
  height: auto;
  width: 30vw;
  min-width: 400px;
  margin: 15px auto 0;
  border: 1px var(--dark) solid;
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;
