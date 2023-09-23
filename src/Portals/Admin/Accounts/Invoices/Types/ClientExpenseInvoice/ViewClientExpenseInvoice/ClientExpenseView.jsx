import { Button, Flex, Grid, Loader, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CirclePlus } from "tabler-icons-react";
import DataGrid from "../../../../../../../Components/DataTable/DataGrid";
import PageWrapper from "../../../../../../../Components/PageWrapper/PageWrapper";
import { axios_get } from "../../../../../../../Utils/Axios";
import { ClientExpenseViewHeader } from "./ClientExpenseViewHeader";

function ClientExpenseView({ isInvoice }) {
  const [clientExpenseData, setClientExpenseData] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchClientExpense = async () => {
    setLoading(true);
    //url will be changed depending on the invoice or reciept using isInvoice
    let url = "/invoice";
    await axios_get({ url: url }).then((res) => {
      setClientExpenseData(res.data.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchClientExpense();
  }, []);
  return (
    <PageWrapper
      title={isInvoice ? "Client Expense Invoices" : "Client Expense Receipts"}
    >
      <Grid>
        <Grid.Col span={12}>
          {isInvoice ? (
            <Flex justify="end">
              <Button leftIcon={<CirclePlus />} variant="filled">
                Add Expense
              </Button>
            </Flex>
          ) : (
            "Filter for reciepts"
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {loading ? (
            <Loader />
          ) : clientExpenseData.length > 0 ? (
            <DataGrid
              columns={ClientExpenseViewHeader(true)}
              data={clientExpenseData}
              pagination={true}
            />
          ) : (
            <Text align="center">
              {isInvoice
                ? "No Client Expense Invoices to Display"
                : "No Client Expense Recipts to Display"}
            </Text>
          )}
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
}

export default ClientExpenseView;
