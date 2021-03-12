import React from "react";
import Nav from "../Nav";
import { useAuth } from "../../util";

export default function Feed() {
  const auth = useAuth();

  return (
    <>
      <Nav />
    </>
  );
}
