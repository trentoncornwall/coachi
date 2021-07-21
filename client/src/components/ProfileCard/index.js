import React, { useState, useEffect } from "react";
import api from "../../util/api";
import MessageModal from "../MessageModal";
import styled from "styled-components";
import Card from "./Card";
import Loading from "../Loading";

// TODO Adjust to take UID as a prop and return that user's card.

export default function ProfileCard({ modal }) {
  const [mentors, setMentors] = useState(null);
  const [modal_visiable, setShow] = useState(false);
  const [messageMentorData, setMessageMentorData] = useState(null);

  useEffect(() => {
    api.mentors().then((result) => setMentors(result.data));
  }, []);

  return (
    <Container>
      {mentors ? (
        mentors.map((mentor) => (
          <Card
            key={mentor._id}
            mentor={mentor}
            modal={setShow}
            message={setMessageMentorData}
          />
        ))
      ) : (
        <Loading />
      )}
      <MessageModal
        show={modal_visiable}
        setShow={setShow}
        mentor={messageMentorData}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* media query 769 */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
