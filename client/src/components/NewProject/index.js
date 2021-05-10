import React from "react";
import styled from "styled-components";
export default function NewProject() {
  return (
    <Panel>
      <PanelHeader>New Project</PanelHeader>
    </Panel>
  );
}

const Panel = styled.div`
  background-color: var(--light);
  height: auto;
  max-width: 900px;
  margin: 5vh auto;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PanelHeader = styled.div`
  color: white;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  background-color: var(--accent);
  margin-bottom: 2rem;
`;
