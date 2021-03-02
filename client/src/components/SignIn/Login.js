import React from "react";

export default function Login() {
  return (
    <form className="login">
      <h1> login</h1>
      <input placeholder="username" />
      <input placeholder="password" type="password" />
      <button>login </button>
    </form>
  );
}
