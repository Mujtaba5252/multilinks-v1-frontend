import React, { useEffect, useState } from "react";
import StaffCardStats from "./StaffCardStats";
import StaffRingStats from "./StaffRingStats";
import WelcomeCard from "./WelcomeCard";
import { useMediaQuery } from "@mantine/hooks";
import { axios_get } from "../../../Utils/Axios";
import CustomLoader from "../../../Components/CustomLoader/CustomLoader";

const StaffDashboard = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getStats = async () => {
    setLoading(true);
    let url = "/dashboard/staff";
    await axios_get({ url: url })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getStats();
  }, []);
  return (
    <CustomLoader loading={loading}>
      {!matches && <WelcomeCard />}
      <StaffCardStats data={data} />
      <StaffRingStats data={data} />
    </CustomLoader>
  );
};

export default StaffDashboard;
