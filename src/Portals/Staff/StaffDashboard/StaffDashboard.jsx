import React from "react";
import StaffCardStats from "./StaffCardStats";
import StaffRingStats from "./StaffRingStats";
import WelcomeCard from "./WelcomeCard";
import { useMediaQuery } from "@mantine/hooks";

const StaffDashboard = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      {!matches && <WelcomeCard />}
      <StaffCardStats />
      <StaffRingStats />
    </div>
  );
};

export default StaffDashboard;
