import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../util/use-auth";
import firebase from "firebase";

export default function Profile() {
  const { user, avatar, addAvatar } = useAuth();

  const form = useRef();
  //TODO -  redirect or restrict pathing to this compontant based off of AUTH
  //TODO -  account for image types, png && jpeg
  //TODO -  reduce image quality or make the images small for storage purposes
  //TODO -  add image croping for avatar
  //TODO -  handle errors more gracefully

  const imageUpload = (event) => {
    const file = event.target.files[0];

    //* firebase solution:
    const storageRef = firebase.storage().ref();

    // Uploads to avatar/USERID.jpg
    const uploadTask = storageRef.child(`avatar/${user.id}.jpg`).put(file);

    //preforms uploads and listens for snapshot, returns urls
    uploadTask.on(
      "state_changed",
      ((snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then((downloadURL) => addAvatar(downloadURL));
      })
    );
  };

  return user ? (
    <Panel>
      {console.log(user, avatar)}
      <ProfileForm ref={form}>
        <PanelHeader>{user.username}</PanelHeader>

        <Row>
          <label>photo</label>
          <Input
            type="file"
            name="photo"
            accept=".png, .jpg, .jpeg"
            onChange={imageUpload}
          />
        </Row>
        <Row>
          <label>First Name</label> <Input placeholder={user.first}></Input>
        </Row>
        <Row>
          <label>Last Name</label> <Input placeholder={user.last}></Input>
        </Row>
      </ProfileForm>
    </Panel>
  ) : (
    <p>sign in first</p>
  );
}

const Panel = styled.div`
  background-color: var(--light);
  height: auto;
  max-width: 900px;
  margin: 10vh auto;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  overflow: hidden;
`;

const PanelHeader = styled.div`
  color: white;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  background-color: var(--accent);
  margin-bottom: 2rem;
`;

const Row = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  margin-bottom: 15px;
`;
const Input = styled.input`
  width: 100%;
  max-width: 20rem;
  height: 2em;
  padding: 0px 10px;
  font-size: 1em;
  border: 1px var(--dark) solid;
  border-radius: 5px;
  :focus {
    border: 2px solid var(--secondary);
  }
`;
const ProfileForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
