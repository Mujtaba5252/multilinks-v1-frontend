import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import { staffRoutes } from "../../../routes";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { LeaveRequestHeader } from "./LeaveRequestHeader";
import { useNavigate } from "react-router";
import { axios_get } from "../../../Utils/Axios";

const ViewLeaveRequest = () => {
  const navigate = useNavigate();
  const [getLeaveData, setLeaveData] = useState([]);
  const getLeaveRequests = () => {
    axios_get({ url: "/leave-request", withSNo: true })
      .then((res) => {
        console.log(res.data.data);
        setLeaveData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLeaveRequests();
  }, []);

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
      <DataGrid
        columns={LeaveRequestHeader()}
        data={getLeaveData}
        pagination={true}
      />
    </PageWrapper>
  );
};

export default ViewLeaveRequest;
