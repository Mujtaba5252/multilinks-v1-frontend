import React, { useEffect, useState } from "react";

import { useMediaQuery } from "@mantine/hooks";
import CardStats from "./CardStats";
import FinanceChart from "./FinanceChart";
import RingStats from "./RingStats";
import { axios_get } from "../../../Utils/Axios";

const AdminDashboard = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [data, setData] = useState([]);
  const getStats = async () => {
    let url = "/dashboard/admin";
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
      <CardStats data={data} />
      <FinanceChart data={data} />
      <RingStats data={data} />
    </div>
  );
};

export default AdminDashboard;
