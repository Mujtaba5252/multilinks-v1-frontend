import React, { useState, useEffect } from "react";
import PageWrapper from "../../../../../Components/PageWrapper/PageWrapper";
import { Grid, Text } from "@mantine/core";
import { axios_get } from "../../../../../Utils/Axios";
import DataGrid from "../../../../../Components/DataTable/DataGrid";
import { LeavesViewHeader } from "./LeavesViewHeader";
import { Filter } from "tabler-icons-react";
import FilterBarLeaves from "./FilterBarLeaves";
import { fetchLeaves } from "./LeaveFuntions";

function LeavesView() {
  const [leavesData, setLeavesData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [pagination, setPagination] = useState([]);

  let url = "/leave-request";

  useEffect(() => {
    fetchLeaves({ url, setLeavesData, setPagination });
  }, [update, url]);
  return (
    <>
      <PageWrapper title="Leave Requests">
        <Grid>
          <Grid.Col span={12} my={15}>
            <FilterBarLeaves currentUrl={url} setLeavesData={setLeavesData} setPagination={setPagination} />
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid
              columns={LeavesViewHeader({ setUpdate })}
              data={leavesData}
              pagination={pagination}
              setPagination={setPagination}
              currentUrl={url}
              setData={setLeavesData}
            />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default LeavesView;
