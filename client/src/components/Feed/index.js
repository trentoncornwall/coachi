import React from "react";
import api from "../../util/api";
export default function Feed() {
  const logout = () => {
    api.userLogout();
    // this.props.history.push("/");
  };
  return (
    <>
      <h1>hello ...</h1>
      <button onClick={logout}>logout</button>
    </>
  );
}
