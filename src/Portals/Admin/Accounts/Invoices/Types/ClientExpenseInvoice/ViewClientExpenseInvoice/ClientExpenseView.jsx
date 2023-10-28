import { Button, Flex, Grid, Loader, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CirclePlus } from "tabler-icons-react";
import DataGrid from "../../../../../../../Components/DataTable/DataGrid";
import PageWrapper from "../../../../../../../Components/PageWrapper/PageWrapper";
import { axios_get } from "../../../../../../../Utils/Axios";
import { ClientExpenseViewHeader } from "./ClientExpenseViewHeader";
import ModalComponent from "../../../../../../../Components/ModalComponent/ModalComponent";
import ApprovedQutationForExpense from "../AddClientExpense/Modal/ApprovedQutationsForExpense";
import FilterBarClientExpense from "./FilterBarClientExpense";
import { fetchClientExpense } from "./ClientPaymentFunctions";

function ClientExpenseView({ isInvoice, pending }) {
  const [clientExpenseData, setClientExpenseData] = useState([]);
  const [addExpense, setAddExpense] = useState(false);
  const [pagination, setPagination] = useState([]);
  const [update, setUpdate] = useState(false); 
  let url = "/client-expense?status=" + pending;
  
  useEffect(() => {
    fetchClientExpense({ url, setClientExpenseData, setPagination });
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
            <Grid m={0} my={10}>
              <Grid.Col span={12}>
              <Flex justify={"end"} mb={10}>  
                  <Button leftIcon={<CirclePlus />} variant="filled"
                    onClick={() => { setAddExpense(true) }}
                  >
                    Add Expense
                  </Button>
                </Flex>
              </Grid.Col>
              <Grid.Col span={12} >
                <FilterBarClientExpense currentUrl={url} setPagination={setPagination} setClientExpenseData={setClientExpenseData}/>  
              </Grid.Col>
            </Grid>
          ) : (
            <Grid.Col span={12} my={15} >
                <FilterBarClientExpense currentUrl={url} setPagination={setPagination} setClientExpenseData={setClientExpenseData}/>  
              </Grid.Col>
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          <DataGrid
            columns={ClientExpenseViewHeader({ isInvoice, setUpdate })}
            data={clientExpenseData}
            currentUrl={url}
            setData={setClientExpenseData}
            pagination={pagination}
            setPagination={setPagination}
          />
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
}

export default ClientExpenseView;
