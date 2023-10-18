import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../../../../Components/PageWrapper/PageWrapper";
import { Button, Flex, Grid, Switch } from "@mantine/core";
import { OfficeExpenseViewHeader } from "./OfficeExpenseViewHeader";
import DataGrid from "../../../../../../../Components/DataTable/DataGrid";
import { CirclePlus } from "tabler-icons-react";
import { axios_get } from "../../../../../../../Utils/Axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { adminRoutes } from "../../../../../../../routes";
import FilterBarOfficeExpense from "./FilterBarOfficeExpense";
import { fetchOfficeExpense } from "./OfficeExpenseFunctions";

function OfficeExpenseView({ isInvoice, pending }) {
  const navigate = useNavigate();
  const [officeExpenseData, setOfficeExpenseData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [pagination, setPagination] = useState([]);
  let url = "/office-expense?status=" + pending;

  useEffect(() => {
    fetchOfficeExpense({ url, setOfficeExpenseData, setPagination });
    setUpdate(false);
  }, [update, url]);
  return (
    <>
      <PageWrapper
        title={
          isInvoice ? "Office Expense Invoices" : "Office Expense Receipts"
        }
      >
        <Grid>
          <Grid.Col span={12}>
            <Grid m={0} my={15}>
              {isInvoice && 
            <Grid.Col span={12}>
              <Flex justify="end">
                <Button
                  leftIcon={<CirclePlus />}
                  variant="filled"
                  onClick={() => navigate(adminRoutes.addOfficeExpenseInvoice)}
                >
                  Add Expense
                </Button>
              </Flex>
              </Grid.Col>}
              <Grid.Col mt={10} span={12}>
                  <FilterBarOfficeExpense currentUrl={url} setOfficeExpenseData={setOfficeExpenseData} setPagination={setPagination} isInvoice={isInvoice} />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid
              columns={OfficeExpenseViewHeader({ isInvoice ,setUpdate })}
              data={officeExpenseData}
              pagination={pagination}
              setPagination={setPagination}
              currentUrl={url}
              setData={setOfficeExpenseData}
            />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default OfficeExpenseView;
