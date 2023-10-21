import { Text } from "@mantine/core";
import { useLottie } from "lottie-react";
import CRM from "../../assets/Lottie/CRM.json";

const AnimationLoader = () => {
  const options = {
    animationData: CRM,
    loop: true,
  };

  const { View } = useLottie(options);
  //   const { View: View2 } = useLottie(options2);

  return (
    <div style={{ width: "200px", height: "200px", margin: "auto" }}>
      {View}
    </div>
  );
};

export default AnimationLoader;
