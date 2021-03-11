import React from "react";
import styled from "styled-components";
import { useAuth } from "../../util/use-auth";

export default function Nav() {
  const auth = useAuth();
  return (
    <NavBar>
      <Item>Home</Item>
      <Item>Profile</Item>
      <Item>Feed</Item>
      <Item>Post</Item>
      <UserColumn>
        {/* // TODO LogGut or SignIn button */}
        {auth.user ? (
          <button onClick={auth.logout}>logout</button>
        ) : (
          <button>signin</button>
        )}
      </UserColumn>
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f45b69;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  padding: 1em;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Item = styled.div`
  flex: 1;
  text-align: center;
  margin: 0.25em;
  padding: 0.25em;
  color: white;
`;
const UserColumn = styled.div`
  flex: 1;
  text-align: center;
  margin: 0.25em;
  padding: 0.25em;
`;
