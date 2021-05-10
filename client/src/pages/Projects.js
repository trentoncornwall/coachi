import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewProject from "../components/NewProject";

export default function Projects() {
  const [view, setView] = useState("create");

  useEffect(() => {
    console.log(view);
  }, [view]);

  return (
    //! changing this page to handle MESSAGES no longer going projects routes yet
    <>
      {/* <SubNav>
        <Button onClick={() => setView("projects")}>projects</Button>
        <Button onClick={() => setView("create")}>new</Button>
      </SubNav>
      {view === "create" && <NewProject />} */}
    </>
  );
}
const SubNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 15.5rem;
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
