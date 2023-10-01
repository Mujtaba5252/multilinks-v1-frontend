import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../../../../Components/PageWrapper/PageWrapper";
import { Grid, Loader, Text } from "@mantine/core";
import { axios_get } from "../../../../../../../Utils/Axios";
import { PaymentViewHeader } from "./PaymentViewHeader";
import DataGrid from "../../../../../../../Components/DataTable/DataGrid";
function PaymentView({ isInvoice,pending }) {
  const [paymentData, setPaymentData] = useState([]);
  const [update, setUpdate] = useState(false);
  let url = "/invoice?status="+pending;
  const fetchPayment = async () => {
    await axios_get({ url: url,withSNo:true }).then((res) => {
      setPaymentData(res.data.data);
      console.log(res.data.data);
    });
  };
  useEffect(() => {
    fetchPayment();
    setUpdate(false);
  }, [update,url]);
  return (
    <>
      <PageWrapper title={isInvoice ? "Payment Invoices" : "Payment Receipts"}>
        <Grid>
          <Grid.Col span={12}>
            {isInvoice ? (
              <Text align="center">Payment Invoice Filters</Text>
            ) : (
              <Text align="center">Payment Receipt Filters</Text>
            )}
          </Grid.Col>
          <Grid.Col span={12}>
            { paymentData.length > 0 ? (
              <DataGrid
                columns={PaymentViewHeader({isInvoice,setUpdate})}
                data={paymentData}
                pagination={true}
              />)
            : (<Text align="center">No Data Found</Text>)}
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default PaymentView;
