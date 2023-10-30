import React from "react";
import AnimationLoader from "./LotieAnimation";
import { LoadingOverlay } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const CustomAnimation = ({ visible }) => {
  const isMedium = useMediaQuery("(max-width: 768px)");
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
