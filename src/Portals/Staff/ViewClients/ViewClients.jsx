import React from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { staffRoutes } from "../../../routes";
import DataGrid from "../../../Components/DataTable/DataGrid";

const ViewClients = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper title="View Clients">
      <Group
        position="right"
        my={20}
        onClick={() => navigate(staffRoutes.addClient)}
      >
        <Button variant="filled">ADD CLIENT</Button>
      </Group>
      <DataGrid
        columns={[
          {
            name: "UID",
            selector: (row) => row.UID,
          },
          {
            name: "Client Name",
            selector: (row) => row.client_name,
          },
        ]}
        data={[
          {
            UID: "123",
            client_name: "John Doe",
          },
          {
            UID: "123",
            client_name: "John Doe",
          },
          {
            UID: "123",
            client_name: "John Doe",
          },
          {
            UID: "123",
            client_name: "John Doe",
          },
        ]}
        pagination={true}
      />
    </PageWrapper>
  );
};

export default ViewClients;
