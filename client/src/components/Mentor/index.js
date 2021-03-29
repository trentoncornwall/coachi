import React, { useState, useEffect } from "react";
import api from "../../util/api";
import styled from "styled-components";
import MentorCard from "./MentorCard";
import Loading from "../Loading";

export default function Mentor() {
  const [mentors, setMentors] = useState(null);
  useEffect(() => {
    api.mentors().then((result) => setMentors(result.data));
  }, []);
  return (
    <Container>
      {mentors ? (
        mentors.map((mentor) => <MentorCard key={mentor._id} mentor={mentor} />)
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
