import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import api from "../../util/api";
import { useAuth } from "../../util/use-auth";

/**
 *
 * @param user - _id, username, first, last
 * TODO -  About me textarea
 * TODO -  Languages row
 * TODO -  Location row
 * TODO -  If section has data, display w/ edit button or input field
 */

export default function ProfileData({ user }) {
  const { updateUser } = useAuth();
  const formEl = useRef();
  const githubInput = useRef();
  const linkedinInput = useRef();
  const websiteInput = useRef();
  const descriptionInput = useRef();

  //* checks if the user info exists already
  const [info, setInfo] = useState({
    github: user?.github || "",
    linkedin: user?.linkedin || "",
    website: user?.website || "",
    description: user?.description || "",
  });

  const updateProfile = (e) => {
    e.preventDefault();
    api.userUpdate(info).then((res) => updateUser());
  };

  return (
    <Form onSubmit={updateProfile} ref={formEl}>
      <Row>
        <Label>Github</Label>{" "}
        <Input
          name="github"
          ref={githubInput}
          value={info.github}
          onChange={() => {
            setInfo({ ...info, github: githubInput.current.value });
          }}
        />
      </Row>
      <Row>
        <Label>LinkedIn</Label>{" "}
        <Input
          name="linkedin"
          ref={linkedinInput}
          value={info.linkedin}
          onChange={() => {
            setInfo({ ...info, linkedin: linkedinInput.current.value });
          }}
        />
      </Row>
      <Row>
        <Label>Website</Label>{" "}
        <Input
          name="website"
          ref={websiteInput}
          value={info.website}
          onChange={() => {
            setInfo({ ...info, website: websiteInput.current.value });
          }}
        />
      </Row>
      <Row>
        <Label>About you</Label>{" "}
        <TextArea
          ref={descriptionInput}
          name="description"
          value={info.description}
          onChange={() => {
            setInfo({ ...info, description: descriptionInput.current.value });
          }}
        />
      </Row>
      <Save type="submit">Save</Save>
    </Form>
  );
}

const Form = styled.form`
  margin: 2em 0em;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 1em;
  min-width: 350px;
`;
const Label = styled.div`
  color: var(--dark);
  width: 100%;
  margin-bottom: 0.3em;
  line-height: 1.5rem;
`;
const Input = styled.input`
  font-weight: normal;
  width: 100%;
  border: 1px solid lightgrey;
  padding: 0.4rem;
  outline: none;
  :focus {
    box-shadow: 0 0 3px var(--primary);
    border: 1px solid var(--primary);
  }
`;

const TextArea = styled.textarea`
  min-height: 10em;
  font-weight: normal;
  width: 100%;
  border: 1px solid lightgrey;
  padding: 0.4rem;
  outline: none;
  :focus {
    box-shadow: 0 0 3px var(--primary);
    border: 1px solid var(--primary);
  }
`;

const Save = styled.button`
  cursor: pointer;
  color: white;
  font-size: 1em;
  padding: 0.4em 1em;
  border: 0px;
  border-radius: 5px;
  background-color: var(--accent);
  :hover {
    opacity: 0.8;
  }
`;
