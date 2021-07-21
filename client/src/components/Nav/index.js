import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../util/use-auth";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
// TODO replace with icons
export default function Nav() {
  const auth = useAuth();

  return (
    <NavBar>
      <Item>
        <Link to="/"><HomeRoundedIcon fontSize="Large"/></Link>
      </Item>
      <Item>
        <Link to="/profiles"><PeopleRoundedIcon fontSize="Large"/></Link>
      </Item>
 
      {auth.user ? (<>
     <Item>
     <Link to="/profile"><PersonRoundedIcon fontSize="Large"/></Link>
   </Item>
        <Item onClick={auth.logout}>
          <Link to="/">Sign out</Link>
        </Item>
   </>
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
  max-width: 50rem;
  margin: 0 auto;
  padding: 1em 2em;
  border-radius: 0px 0px 4px 4px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
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
