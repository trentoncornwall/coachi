import React, { useState, useEffect } from "react";
import styled from "styled-components";
import placeholder from "../images/avatar_placeholder.png";
import firebase from "firebase";
import Loading from "./Loading";
/**
 * @param Size (large, medium, or small) and user.id.
 * @param uid needs to be user ID from mongo
 * @param reload while in profile, updates component if user uploads a new photo
 */

export default function Avatar({ size, uid, reload }) {
  const [image, setImage] = useState(null);

  const checkStorage = (uid) => {
    const avatarRef = firebase.storage().ref().child(`avatar/${uid}.jpg`);

    avatarRef
      .getDownloadURL()
      .then((url) => setImage(url))
      .catch((err) => setImage(placeholder));
  };

  useEffect(() => {
    checkStorage(uid);
  }, [reload]);

  switch (size) {
    case "large":
      return image ? (
        <Lrg src={image} />
      ) : (
        <LoadingDiv>
          <Loading type="bubbles" color="var(--accent)" />
        </LoadingDiv>
      );

    case "medium":
      return <Md src={image} />;

    case "small":
      return <Sm src={image} />;
  }
}

const LoadingDiv = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px var(--accent) solid;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

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
