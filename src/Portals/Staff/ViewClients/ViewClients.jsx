import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { staffRoutes } from "../../../routes";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { axios_get } from "../../../Utils/Axios";
import { ClientHeader } from "./ClientHeader";

const ViewClients = () => {
  const navigate = useNavigate();
  const [ClientData, setClientData] = useState([]);

  const getCleintData = async () => {
    axios_get({ url: "/client" }).then((res) => {
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
