import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import api from "../../util/api";

export default function MessageModal({ show, setShow, mentor }) {
  const [message, setMessage] = useState("Coming Soon");
  const TextAreaEl = useRef();

  useEffect(() => {
    setMessage("");
  }, [show]);

  const closeModal = () => {
    setShow(false);
  };

  const SendMessage = () => {
    api
      .conversationCreate({ recipient: mentor._id, content: message })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    show && (
      <MessageContainer>
        <MessageCard>
          <Title>Messaging {mentor.first}</Title>
          <Body>
            <TextArea
              value={"Coming Soon"}
              ref={TextAreaEl}
              // onChange={() => setMessage(TextAreaEl.current.value)}
            ></TextArea>
            <Buttons>
              <Button onClick={closeModal}>Close</Button>
              {/* <Button onClick={SendMessage}>Send</Button> */}
            </Buttons>
          </Body>
        </MessageCard>
      </MessageContainer>
    )
  );
}

const MessageContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  top: 0;
`;

const MessageCard = styled.div`
  width: 500px;
  height: 500px;

  background-color: white;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  z-index: 10;
`;

const Title = styled.div`
  border-radius: 0px 5px 0px 0px;
  display: flex;
  padding-left: 1em;
  text-transform: capitalize;
  align-items: center;
  color: white;
  background: var(--accent);
  height: 3em;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 450px;
  height: 350px;
  margin-bottom: 1em;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  width: 6em;
  font-size: 1em;
  padding: 0.4em 1em;
  border: 0px;
  border-radius: 5px;
  background-color: var(--accent);
  :hover {
    opacity: 0.8;
  }
`;

const Buttons = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;
