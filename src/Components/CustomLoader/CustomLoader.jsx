import React from "react";
import { Loader, LoadingOverlay } from "@mantine/core";
import "./loader.css";

function CustomLoader({ color, children, loading }) {
  return (
    <div className="loader_div">
      {loading && (
        <LoadingOverlay visible={true} overlayBlur={2} color={color} />
      )}
      {children}
    </div>
  );
}

export default CustomLoader;
