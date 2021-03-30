import React, { useState, useEffect } from "react";
import api from "../../util/api";
import styled from "styled-components";
import Card from "./Card";
import Loading from "../Loading";

// TODO Adjust to take UID as a prop and return that user's card.

export default function ProfileCard() {
  const [mentors, setMentors] = useState(null);
  useEffect(() => {
    api.mentors().then((result) => setMentors(result.data));
  }, []);
  return (
    <Container>
      {mentors ? (
        mentors.map((mentor) => <Card key={mentor._id} mentor={mentor} />)
      ) : (
        <Loading />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
`;
