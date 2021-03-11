import React from "react";
import { useAuth } from "../util/use-auth";
import Feed from "../components/Feed";
import SignIn from "../components/SignIn/";
import Nav from "../components/Nav";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Nav />
      {!auth.user && <SignIn />}
    </>
  );
}
