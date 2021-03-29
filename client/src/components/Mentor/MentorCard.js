import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import MessageIcon from "@material-ui/icons/Message";

//TODO Fix the social media links

export default function MentorCard({ mentor }) {
  console.log(mentor);
  return (
    <Card>
      <Title>
        {mentor.first} {mentor.last}
      </Title>
      <AvatarContainer>
        <Avatar size="small" uid={mentor._id} />
      </AvatarContainer>
      <Info>
        <Row>
          {mentor.github && (
            <a href={mentor.github}>
              <GitHubIcon fontSize="large" />
            </a>
          )}
          {mentor.linkedin && (
            <a href={mentor.linkedin}>
              <LinkedInIcon fontSize="large" />
            </a>
          )}
          {mentor.website && (
            <a href={mentor.website}>
              <LanguageIcon fontSize="large" />
            </a>
          )}
        </Row>
        <Row>{mentor.description}</Row>
        <Contact>
          <MessageIcon fontSize="large" />
        </Contact>
      </Info>
    </Card>
  );
}

const Contact = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  top: 7em;
  background-color: var(--accent);
  color: white;
  border-radius: 7px;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Info = styled.div`
  position: relative;
  height: 100%;
  top: -5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  font-size: 0.8em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 1em;
  width: 100%;

  a {
    text-decoration: none;
    color: var(--dark);
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  right: 1em;
  top: -4.5em;
`;

const Card = styled.div`
  height: 350px;
  width: 300px;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
`;

const Title = styled.div`
  display: flex;
  text-transform: capitalize;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 1em;
  color: white;
  background: var(--accent);
  height: 3em;
  width: 100%;
`;
