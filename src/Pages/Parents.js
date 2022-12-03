import React from "react";
import { CountContext } from "../App";
import Child from "./Child";
import { useContext } from "react";
const Parents = () => {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h1>{count} </h1>
      <Child />
    </div>
  );
};

export default Parents;
