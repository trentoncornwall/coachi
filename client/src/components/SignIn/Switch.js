import React from "react";
import styled from "styled-components";

export default function Switch({ register, changeView }) {
  return register ? (
    <Selector onClick={changeView}> Already have an account?</Selector>
  ) : (
    <Selector onClick={changeView}> Create an account</Selector>
  );
}

const Selector = styled.p`
  font-weight: bold;
  color: var(--accent);
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
