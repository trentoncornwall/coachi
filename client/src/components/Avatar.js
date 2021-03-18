import React from "react";
import styled from "styled-components";

export default function Avatar({ size, image }) {
  switch (size) {
    case "large":
      return <Lrg src={image} />;

    case "medium":
      return <Md src={image} />;

    case "small":
      return <Sm src={image} />;
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
