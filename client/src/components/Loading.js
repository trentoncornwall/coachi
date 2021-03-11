import React from "react";
import ReactLoading from "react-loading";
// https://github.com/fakiolinho/react-loading
export default function Loading({ type, color }) {
  return <ReactLoading type={type} color={color} height={100} width={200} />;
}
