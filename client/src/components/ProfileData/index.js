import React, { useState } from "react";
import styled from "styled-components";
/**
 *
 * @param user - _id, username, first, last
 * TODO -  About me
 * TODO -  Social Media
 * TODO -  Languages row
 * TODO -  Location row
 * TODO -  If section has data, display w/ edit button or input field
 */

export default function ProfileData({ user }) {
  return (
    <>
      <Row>
        <label>Github</label> <input />
      </Row>
      <Row>
        <label>LinkedIn</label> <input />
      </Row>
      <Row>
        <label>Website</label> <input />
      </Row>
    </>
  );
}

const Row = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  margin-bottom: 15px;
`;
