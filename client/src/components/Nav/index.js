import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../util/use-auth";

export default function Nav() {
  const auth = useAuth();
  return (
    <NavBar>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/profile">Profile</Link>
      </Item>
      {auth.user ? (
        <Item onClick={auth.logout}>
          <Link to="/">Sign out</Link>
        </Item>
      ) : (
        <Item>
          <Link to="/signin">Sign In</Link>
        </Item>
      )}
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
  padding: 1em 2em;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Item = styled.li`
  color: white;
  list-style: none;
  :hover {
    font-weight: bold;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
    @media only screen and (max-width: 768px) {
      line-height: 40px;
      font-size: 25px;
    }
  }
`;
