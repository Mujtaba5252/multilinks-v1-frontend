import React, { useState, useEffect } from "react";
import PageWrapper from "../../../../Components/PageWrapper/PageWrapper";
import { Button, Flex, Grid, Loader, Text } from "@mantine/core";
import DataGrid from "../../../../Components/DataTable/DataGrid";
import { axios_get } from "../../../../Utils/Axios";

function QuotationView({pending}) {
  const [quotationData, setQuotationData] = useState([]);
  const [update, setUpdate] = useState(false);
  let url = "/quotation?status="+pending;
  const fetchQuotation = async () => {
    await axios_get({ url: url }).then((res) => {
      setQuotationData(res.data.data);
      setLoading(false);
      console.log(res.data.data);
    });
  };
  useEffect(() => {
    fetchQuotation();
    setUpdate(false);
  }, [update,url]);

  return (
    <>
      <PageWrapper title="Qutations">
        <Grid>
          <Grid.Col span={12}>
            <Text align="center">Quotation filters</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            {loading ? (
              <Loader />
            ) : quotationData.length > 0 ? (
              <DataGrid
                columns={StaffViewHeader()}
                data={quotationData}
                pagination={true}
              />
            ) : (
              <Text align="center">No Qutations to Display</Text>
            )}
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default QuotationView;
