import React, { useRef } from "react";
import { useAuth } from "../../util/use-auth";
export default function Feed() {
  const auth = useAuth();
  return (
    <>
      <h1>hello ...{auth.user.username}</h1>
      <button onClick={auth.logout}>logout</button>
    </>
  );
}
