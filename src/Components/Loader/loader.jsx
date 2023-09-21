import React from "react";
import { Loader } from "@mantine/core";
import "./loader.css";

function loader({ color }) {
  return (
    <div className="loader_div">
      <Loader color={color} className="loader" />
    </div>
  );
}

export default loader;
