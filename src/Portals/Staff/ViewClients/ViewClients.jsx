import { Button, Grid, Group } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../../Components/DataTable/DataGrid";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { staffRoutes } from "../../../routes";
import { ClientHeader } from "./ClientHeader";
import { getCleintData } from "./ClientFunctions";
import FilterBarClient from "./FilterBarClient";
import { CirclePlus } from "tabler-icons-react";

const ViewClients = () => {
  const navigate = useNavigate();
  const [ClientData, setClientData] = useState([]);
  const [pagination, setPagination] = useState([]);
  let url = "/client";
  useEffect(() => {
    getCleintData({ url, setClientData, setPagination });
  }, []);

  return (
    <PageWrapper title="VIEW CLIENTS">
      <Grid>
        <Grid.Col mt={10} span={12} mb={10}>
          <Group
            position="right"
            onClick={() => navigate(staffRoutes.addClient)}
          >
            <Button w={200} leftIcon={<CirclePlus/>} variant="filled">ADD CLIENT</Button>
          </Group>
        </Grid.Col>
        <Grid.Col mb={10} span={12}>
          <FilterBarClient currentUrl={url} setClientData={setClientData} setPagination={setPagination} />
        </Grid.Col>
        <Grid.Col span={12}>

          <DataGrid
            columns={ClientHeader()}
            data={ClientData}
            pagination={pagination}
            currentUrl={url}
            setPagination={setPagination}
            setData={setClientData}
          />
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
};

export default ViewClients;
