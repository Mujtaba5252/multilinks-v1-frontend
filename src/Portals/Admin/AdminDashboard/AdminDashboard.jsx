import React, { useEffect, useState } from "react";

import { useMediaQuery } from "@mantine/hooks";
import CardStats from "./CardStats";
import FinanceChart from "./FinanceChart";
import RingStats from "./RingStats";
import { axios_get } from "../../../Utils/Axios";
import CustomLoader from "../../../Components/CustomLoader/CustomLoader";

const AdminDashboard = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getStats = async () => {
    setLoading(true);
    let url = "/dashboard/admin";
    await axios_get({ url: url })
      .then((res) => {
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
      <CardStats data={data} />
      <FinanceChart stats={data} />
      <RingStats data={data} />
    </CustomLoader>
  );
};

export default AdminDashboard;
