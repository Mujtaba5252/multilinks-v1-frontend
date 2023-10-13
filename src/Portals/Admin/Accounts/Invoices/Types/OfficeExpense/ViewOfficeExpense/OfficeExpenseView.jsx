import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../../../../Components/PageWrapper/PageWrapper";
import { Button, Flex, Grid, Loader, Text } from "@mantine/core";
import { OfficeExpenseViewHeader } from "./OfficeExpenseViewHeader";
import DataGrid from "../../../../../../../Components/DataTable/DataGrid";
import { CirclePlus } from "tabler-icons-react";
import { axios_get } from "../../../../../../../Utils/Axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { adminRoutes } from "../../../../../../../routes";

function OfficeExpenseView({ isInvoice, pending }) {
  const navigate = useNavigate();
  const [officeExpenseData, setOfficeExpenseData] = useState([]);
  let url = "/office-expense?staus=" + pending;
  const fetchOfficeExpense = async () => {
    await axios_get({ url: url }).then((res) => {
      if (res.status === 200) {
        setOfficeExpenseData(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    });
  };

  useEffect(() => {
    fetchOfficeExpense();
  }, [url]);
  return (
    <>
      <PageWrapper
        title={
          isInvoice ? "Office Expense Invoices" : "Office Expense Receipts"
        }
      >
        <Grid>
          <Grid.Col span={12}>
            {isInvoice ? (
              <Flex justify="end">
                <Button
                  leftIcon={<CirclePlus />}
                  variant="filled"
                  onClick={() => navigate(adminRoutes.addOfficeExpenseInvoice)}
                >
                  Add Expense
                </Button>
              </Flex>
            ) : (
              <Text align="center">Office Expense Receipt Filters</Text>
            )}
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid
              columns={OfficeExpenseViewHeader({ isInvoice })}
              data={officeExpenseData}
              pagination={true}
            />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default OfficeExpenseView;
