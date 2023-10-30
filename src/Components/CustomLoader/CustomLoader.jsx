import React from "react";
import { Loader, LoadingOverlay } from "@mantine/core";
import "./loader.css";
import CustomAnimation from "./CustomAnimation";

function CustomLoader({ color, children, loading }) {
  return (
    <div>
      <CustomAnimation visible={loading} />
      {children}
    </div>
  );
}

export default CustomLoader;
