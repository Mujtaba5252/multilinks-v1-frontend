import React from "react";
import AnimationLoader from "./LotieAnimation";
import { LoadingOverlay } from "@mantine/core";

const CustomAnimation = ({ visible }) => {
  return (
    <LoadingOverlay
      loader={<AnimationLoader />}
      visible={visible}
      zIndex={2}
      overlayBlur={2}
      
    />
  );
};

export default CustomAnimation;
