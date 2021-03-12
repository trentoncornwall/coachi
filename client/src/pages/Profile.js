import React from "react";
import { useAuth } from "../util/use-auth";

export default function Profile() {
  const auth = useAuth();
  //TODO Create as a private link only for Auth Users
  console.log(auth.user.first);
  return <p> hello world</p>;
}
