import React from "react";
import { useAuth } from "../util/use-auth";
import firebase from "firebase";
import styled from "styled-components";
import Avatar from "../components/Avatar";

//TODO -  #1 - uploading avatar should rerender state
//TODO -  About me row
//TODO -  Languages row
//TODO -  Github row
//TODO -  Location row
//TODO -  redirect or restrict pathing to this compontant based off of AUTH
//TODO -  account for image types, png && jpeg
//TODO -  reduce image quality or make the images small for storage purposes
//TODO -  cropping for avatar?

export default function Profile() {
  const { user } = useAuth();

  const imageUpload = (event) => {
    const file = event.target.files[0];

    //* firebase solution:
    const storageRef = firebase.storage().ref();
    // Uploads to avatar/USERID.jpg
    const uploadTask = storageRef.child(`avatar/${user._id}.jpg`).put(file);

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
        // console.log("Upload Completed");
      })
    );
  };

  return user ? (
    <Panel>
      <ProfileForm>
        <PanelHeader>{user.username}</PanelHeader>
        <Row>
          <Avatar size="large" uid={user._id} />
        </Row>
        <Row>
          <label>Photo</label>
          <UploadEl
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

const Panel = styled.div`
  background-color: var(--light);
  height: auto;
  max-width: 900px;
  margin: 5vh auto;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  overflow: hidden;
`;

const UploadEl = styled.input`
  display: block;
  max-width: 20rem;
  height: 2rem;
  cursor: pointer;
  padding: 0px 12px;
  ::file-selector-button {
    margin-right: 15px;
    font-size: 1em;
    padding: 5px;
    border: 1px var(--dark) solid;
    border-radius: 5px;
    background-color: var(--white);
  }
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
