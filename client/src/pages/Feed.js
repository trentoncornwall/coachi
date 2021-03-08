import React from "react";
import { useAuth } from "../util/use-auth";

export default function Feed() {
  const auth = useAuth();

  return <p>{auth.user}</p>;
}
