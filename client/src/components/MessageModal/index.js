import React from "react";
import styled from "styled-components";

export default function MessageModal({ show, setShow }) {
  const closeModal = () => {
    setShow(false);
  };
  return (
    show && (
      <MessageContainer>
        <p>Message</p>
        <button onClick={closeModal}>Close</button>
      </MessageContainer>
    )
  );
}

const MessageContainer = styled.div``;
