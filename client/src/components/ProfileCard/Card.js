import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import MessageIcon from "@material-ui/icons/Message";

//TODO Fix the social media links

export default function Card({ mentor, modal, message }) {
  const Message = () => {
    message(mentor);
    modal(true);
  };
  return (
    <ContainerCard>
      <Title>
        {mentor.first} {mentor.last}
      </Title>
      <AvatarContainer>
        <Avatar size="small" uid={mentor._id} />
      </AvatarContainer>
      <Info>
        <Row>
          {mentor.github && (
            <a target="_blank" href={"https://" + mentor.github}>
              <GitHubIcon fontSize="large" />
            </a>
          )}
          {mentor.linkedin && (
            <a target="_blank" href={"https://" + mentor.linkedin}>
              <LinkedInIcon fontSize="large" />
            </a>
          )}
          {mentor.website && (
            <a target="_blank" href={"https://" + mentor.website}>
              <LanguageIcon fontSize="large" />
            </a>
          )}
        </Row>
        <Row>{mentor.description}</Row>
        <Contact onClick={Message}>
          <MessageIcon fontSize="large" />
        </Contact>
      </Info>
    </ContainerCard>
  );
}

const Contact = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  bottom: 4.5em;
  width: 87%;

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

const ContainerCard = styled.div`
  height: 350px;
  width: 300px;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  margin: 3em;
`;

const Title = styled.div`
  border-radius: 0px 5px 0px 0px;
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
