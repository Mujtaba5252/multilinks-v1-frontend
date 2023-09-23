import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../../Components/PageWrapper/PageWrapper";
import { axios_get } from "../../../../../Utils/Axios";
import { Button, Flex, Grid, Loader, Text } from "@mantine/core";
import DataGrid from "../../../../../Components/DataTable/DataGrid";
import { StaffViewHeader } from "./StaffViewHeader";

function StaffView() {
  const [staffData, setStaffData] = useState([]);

  const fetchStaff = async () => {
    let url = "/user";
    await axios_get({ url: url }).then((res) => {
      setStaffData(res.data.data);
    });
  };
  useEffect(() => {
    fetchStaff();
  }, []);
  return (
    <>
      <PageWrapper title="Staff Members">
        <Grid>
          <Grid.Col span={12}>
            <Flex justify="flex-end">
              <Button>Add Staff</Button>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
              <DataGrid
                columns={StaffViewHeader()}
                data={staffData}
                pagination={true}
              />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default StaffView;
