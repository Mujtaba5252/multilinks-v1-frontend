import React, { useEffect, useState } from "react";
import { Grid, Paper,Text, Title } from "@mantine/core";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { QuotationHeader } from "./ModalHeader";
import { getCleintData } from "./AddQuotationFunction";
import FilterBarClient from "../ViewClients/FilterBarClient";
import { MainBlue } from "../../../Utils/ThemeColors";

const AddQuotationModal = () => {
  const [ClientData, setClientData] = useState([]);
  const [pagination, setPagination] = useState([]);
  let url = "/client";

  useEffect(() => {
    getCleintData({ url, setClientData, setPagination });
  }, []);
  return (
    <Paper>
      <Grid>
        <Grid.Col mt={0}><Title order={3} color={MainBlue()} mt={0} align={'center'}>Choose Client to Genrate Quotation</Title></Grid.Col>
        <Grid.Col mb={10} span={12}>
          <FilterBarClient currentUrl={url} setClientData={setClientData} setPagination={setPagination} />
        </Grid.Col>
        <Grid.Col span={12}>
          <DataGrid
            columns={QuotationHeader()}
            data={ClientData}
            pagination={pagination}
            setPagination={setPagination}
            currentUrl={url}
            setData={setClientData}
          />
        </Grid.Col>
      </Grid>

    </Paper>
  );
};

export default AddQuotationModal;
