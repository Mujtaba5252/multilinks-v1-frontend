import { Button, Group } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../../Components/DataTable/DataGrid";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { axios_get } from "../../../Utils/Axios";
import { staffRoutes } from "../../../routes";
import { ClientHeader } from "./ClientHeader";

const ViewClients = () => {
  const navigate = useNavigate();
  const [ClientData, setClientData] = useState([]);

  const getCleintData = async () => {
    axios_get({ url: "/client", withSNo: true }).then((res) => {
      console.log(res.data.data);
      setClientData(res.data.data);
    });
  };
  useEffect(() => {
    getCleintData();
  }, []);

  return (
    <PageWrapper title="View Clients">
      <Group
        position="right"
        my={20}
        onClick={() => navigate(staffRoutes.addClient)}
      >
        <Button variant="filled">ADD CLIENT</Button>
      </Group>
      <DataGrid columns={ClientHeader()} data={ClientData} pagination={true} />
    </PageWrapper>
  );
};

export default ViewClients;
