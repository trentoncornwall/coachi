import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../util/use-auth";
import axios from "axios";
export default function Profile() {
  const { user } = useAuth();
  const [image, setImage] = useState();
  const form = useRef();
  //TODO Create as a private link only for Auth Users

  const updateProfile = () => {
    console.log(form);
  };

  const fileUpload = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result);
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);
    // setImage(e.target.files[0]);
    // uploadimage(e.target.files[0]);
  };

  // const uploadimage = (file) => {
  //   console.log(file, file.name);
  //   let data = new FormData();
  //   data.set("image", file, file.name);
  //   axios
  //     .put("/api/users", data, {
  //       headers: {
  //         accept: "application/json",
  //         "Accept-Language": "en-US,en;q=0.8",
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       const fileReader = new FileReader();
  //       fileReader.onload = () => {
  //         console.log(fileReader.result);
  //         setImage(fileReader.result);
  //       };
  //       fileReader.readAsDataURL(res.data);
  //       // setImage(res.data.originalname.match(/\.(jpeg|jpg|png)$/));
  //     });
  // };
  // return <p> hello world</p>;
  return user ? (
    <Panel>
      {/* {console.log(user)} */}
      <ProfileForm ref={form} onSubmit={updateProfile}>
        <PanelHeader>{user.username}</PanelHeader>
        {image && <img src={image} />}
        <Row>
          <label>photo</label>
          <Input
            type="file"
            name="photo"
            accept=".png, .jpg, .jpeg"
            onChange={fileUpload}
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
