import React, { useState, useEffect } from "react";
import PageWrapper from "../../../../Components/PageWrapper/PageWrapper";
import { Button, Flex, Grid, Loader, Text } from "@mantine/core";
import DataGrid from "../../../../Components/DataTable/DataGrid";
import { axios_get } from "../../../../Utils/Axios";
import { QuotationViewHeader } from "./QuotationHeader";

function QuotationView({pending}) {
  const [quotationData, setQuotationData] = useState([]);
  const [update, setUpdate] = useState(false);
  const fetchQuotation = async () => {
    let url = "/quotation?status="+pending;
    await axios_get({ url: url }).then((res) => {
      setQuotationData(res.data.data);
    });
  };
  useEffect(() => {
    fetchQuotation();
    setUpdate(false);
  }, [update]);

  return (
    <>
      <PageWrapper title="Qutations">
        <Grid>
          <Grid.Col span={12}>
            <Text align="center">Quotation filters</Text>
          </Grid.Col>
          <Grid.Col span={12}>
              <DataGrid
                columns={QuotationViewHeader({ setUpdate,pending })}
                data={quotationData}
                pagination={true}
              />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default QuotationView;
