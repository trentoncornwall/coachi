import React, { useState, useRef } from "react";
import Language from "./Language";
import styled from "styled-components";

export default function ProjectCreate() {
  const [Languages, SetLanguages] = useState([]);

  return (
    <FormContainer>
      <ProjectForm>
        <Row>
          <Label>Title:</Label> <Input />
        </Row>
        <Row>
          <Label>Description:</Label> <TextArea />
        </Row>
      </ProjectForm>
      <Language />
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 1em;
`;

const ProjectForm = styled.form``;

const Label = styled.label`
  color: var(--dark);
  margin: 0.3em;
  line-height: 1.5rem;
`;

const Input = styled.input`
  font-weight: normal;
  width: 100%;
  border: 1px solid lightgrey;
  padding: 0.4rem;
  outline: none;
  min-width: 500px;
  :focus {
    box-shadow: 0 0 3px var(--primary);
    border: 1px solid var(--primary);
  }
  @media (max-width: 768px) {
    min-width: 350px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-bottom: 1em;
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
