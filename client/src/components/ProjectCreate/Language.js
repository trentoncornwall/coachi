import React, { useState, useRef } from "react";
import languageList from "../../util/languages";
import Autocomplete from "react-autocomplete";
import styled from "styled-components";

export default function Lnaguage() {
  const LangEl = useRef();

  const addLanguage = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={addLanguage}>
      <Row>
        <Label>Languages:</Label>

        <Input ref={LangEl} />

        <Autocomplete
          getItemValue={(item) => item.label}
          items={languageList.items}
        />
      </Row>
    </form>
  );
}

const Row = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-bottom: 1em;
`;

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
