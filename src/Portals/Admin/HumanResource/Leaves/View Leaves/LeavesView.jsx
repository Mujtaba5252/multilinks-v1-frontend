import React, { useState, useEffect } from "react";
import PageWrapper from "../../../../../Components/PageWrapper/PageWrapper";
import { Grid, Text } from "@mantine/core";
import { axios_get } from "../../../../../Utils/Axios";
import DataGrid from "../../../../../Components/DataTable/DataGrid";
import { LeavesViewHeader } from "./LeavesViewHeader";

function LeavesView() {
  const [leavesData, setLeavesData] = useState([]);
  const [update, setUpdate] = useState(false);

  let url = "/leave-request";
  const fetchLeaves = async () => {
    await axios_get({ url: url }).then((res) => {
      setLeavesData(res.data.data);
    });
  };
  useEffect(() => {
    fetchLeaves();
  }, [update, url]);
  return (
    <>
      <PageWrapper title="Leave Requests">
        <Grid>
          <Grid.Col span={12}>
            <Text align="center">Leave filters</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid
              columns={LeavesViewHeader({ setUpdate })}
              data={leavesData}
              pagination={true}
            />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default LeavesView;
