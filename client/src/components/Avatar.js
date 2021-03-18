import React from "react";
import styled from "styled-components";
import placeholder from "../images/avatar_placeholder.png";

export default function Avatar({ size, image }) {
  const avatar = image || placeholder;
  switch (size) {
    case "large":
      return <Lrg src={avatar} />;

    case "medium":
      return <Md src={avatar} />;

    case "small":
      return <Sm src={avatar} />;
  }
}

const Lrg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px var(--accent) solid;
`;

const Md = styled(Lrg)`
  width: 150px;
  height: 150px;
`;

const Sm = styled(Lrg)`
  width: 100px;
  height: 100px;
`;
