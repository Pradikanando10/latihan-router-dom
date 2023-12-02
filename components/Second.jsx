import { useNavigate } from "react-router-dom";
import React from "react";

const Second = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>ABOUT ROUTE</h3>
      <button onClick={() => navigate("/")}>Check HomePage</button>
    </>
  );
};

export default Second;
