import React, { useState, useEffect } from "react";
import { useAuth } from "../util/use-auth";
import Feed from "../components/Feed";
import SignIn from "../components/SignIn/";

export default function Home() {
  const auth = useAuth();

  return <>{auth.user ? <Feed /> : <SignIn />}</>;
}
