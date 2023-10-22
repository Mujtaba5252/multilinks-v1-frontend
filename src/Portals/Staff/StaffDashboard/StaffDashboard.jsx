import React, { useEffect, useState } from "react";
import StaffCardStats from "./StaffCardStats";
import StaffRingStats from "./StaffRingStats";
import WelcomeCard from "./WelcomeCard";
import { useMediaQuery } from "@mantine/hooks";
import { axios_get } from "../../../Utils/Axios";

const StaffDashboard = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [data, setData] = useState([]);
  const getStats = async () => {
    let url = "/dashboard/staff";
    await axios_get({ url: url, withSNo: true })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getStats();
  }, []);
  return (
    <div>
      {!matches && <WelcomeCard />}
      <StaffCardStats data={data} />
      <StaffRingStats data={data} />
    </div>
  );
};

export default StaffDashboard;
