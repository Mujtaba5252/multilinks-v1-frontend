import React from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import { staffRoutes } from "../../../routes";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { LeaveRequestHeader } from "./LeaveRequestHeader";
import { useNavigate } from "react-router";

const ViewLeaveRequest = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper title={"VIEW LEAVE REQUESTS"}>
      {" "}
      <Group
        position="right"
        my={20}
        onClick={() => navigate(staffRoutes.addLeaveRequest)}
      >
        <Button variant="filled">ADD CLIENT</Button>
      </Group>
      <DataGrid columns={LeaveRequestHeader()} data={[]} pagination={true} />
    </PageWrapper>
  );
};

export default ViewLeaveRequest;
