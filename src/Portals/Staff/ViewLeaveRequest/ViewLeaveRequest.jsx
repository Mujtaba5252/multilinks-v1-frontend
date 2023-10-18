import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Grid, Group } from "@mantine/core";
import { staffRoutes } from "../../../routes";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { LeaveRequestHeader } from "./LeaveRequestHeader";
import { useNavigate } from "react-router";
import { axios_get } from "../../../Utils/Axios";
import { getLeaveRequests } from "./LeaveFunction";
import FilterBarLeaves from "../../Admin/HumanResource/Leaves/View Leaves/FilterBarLeaves"

const ViewLeaveRequest = () => {
  const navigate = useNavigate();
  const [getLeaveData, setLeaveData] = useState([]);
  const [pagination, setPagination] = useState([]);
  let url = "/leave-request";

  useEffect(() => {
    getLeaveRequests({ url, setLeaveData, setPagination });
  }, []);

  return (
    <PageWrapper title={"VIEW LEAVE REQUESTS"}>
      <Grid my={20}>
        <Grid.Col span={12}>
          <Group
            position="right"
            mb={10}
            onClick={() => navigate(staffRoutes.addLeaveRequest)}
          >
            <Button variant="filled">ADD LEAVE REQUEST</Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <FilterBarLeaves currentUrl={url} setLeavesData={setLeaveData} setPagination={setPagination} />
        </Grid.Col>
      </Grid>

      <DataGrid
        columns={LeaveRequestHeader()}
        data={getLeaveData}
        pagination={pagination}
        currentUrl={url}
        setPagination={setPagination}
        setData={setLeaveData}
      />
    </PageWrapper>
  );
};

export default ViewLeaveRequest;
