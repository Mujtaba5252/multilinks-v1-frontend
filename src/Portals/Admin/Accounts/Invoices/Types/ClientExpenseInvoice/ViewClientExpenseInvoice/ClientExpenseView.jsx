import { Button, Flex, Grid, Loader, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CirclePlus } from "tabler-icons-react";
import DataGrid from "../../../../../../../Components/DataTable/DataGrid";
import PageWrapper from "../../../../../../../Components/PageWrapper/PageWrapper";
import { axios_get } from "../../../../../../../Utils/Axios";
import { ClientExpenseViewHeader } from "./ClientExpenseViewHeader";
import ModalComponent from "../../../../../../../Components/ModalComponent/ModalComponent";
import ApprovedQutationForExpense from "../AddClientExpense/Modal/ApprovedQutationsForExpense";

function ClientExpenseView({ isInvoice,pending }) {
  const [clientExpenseData, setClientExpenseData] = useState([]);
  const [addExpense, setAddExpense] = useState(false);
  const [update, setUpdate] = useState(false); //for updating the data after adding the expense
  const fetchClientExpense = async () => {
    //url will be changed depending on the invoice or reciept using isInvoice
    let url = "/client-expense?status="+pending;
    await axios_get({ url: url }).then((res) => {
      setClientExpenseData(res.data.data);
    });
  };
  useEffect(() => {
    fetchClientExpense();
    setUpdate(false);
  }, [update]);
  return (
    <PageWrapper
      title={isInvoice ? "Client Expense Invoices" : "Client Expense Receipts"}
    >
      <ModalComponent
        opened={addExpense}
        setOpened={setAddExpense}
        radius
        size={1200}
        >
          <ApprovedQutationForExpense />
      </ModalComponent>
      <Grid>
        <Grid.Col span={12}>
          {isInvoice ? (
            <Flex justify="end">
              <Button leftIcon={<CirclePlus />} variant="filled" 
                onClick={() => { setAddExpense(true) }}
              >
                Add Expense
              </Button>
            </Flex>
          ) : (
            "Filter for reciepts"
          )}
        </Grid.Col>
        <Grid.Col span={12}>
            <DataGrid
              columns={ClientExpenseViewHeader({isInvoice,setUpdate})}
              data={clientExpenseData}
              pagination={true}
            />
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
}

export default ClientExpenseView;
