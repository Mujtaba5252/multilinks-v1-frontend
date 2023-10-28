import React from "react";
import AnimationLoader from "./LotieAnimation";
import { LoadingOverlay } from "@mantine/core";

const CustomAnimation = ({ visible }) => {
  return (
    <LoadingOverlay
      style={{position:'fixed',top:0,left:0,width:'100%',height:'100%' }}
      loader={<AnimationLoader />}
      visible={visible}
      zIndex={2}
      overlayBlur={2}
      
    />
  );
};

export default CustomAnimation;
