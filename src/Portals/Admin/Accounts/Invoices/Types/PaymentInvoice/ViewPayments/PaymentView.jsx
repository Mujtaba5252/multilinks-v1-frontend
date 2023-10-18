import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../../../../Components/PageWrapper/PageWrapper";
import { Flex, Grid, Loader, Switch, Text } from "@mantine/core";
import { axios_get } from "../../../../../../../Utils/Axios";
import { PaymentViewHeader } from "./PaymentViewHeader";
import DataGrid from "../../../../../../../Components/DataTable/DataGrid";
import FilterBarPaymentView from "./FilterBarPaymentView";
import { fetchPayment } from "./PaymentFunctions";

function PaymentView({ isInvoice, pending }) {
  const [paymentData, setPaymentData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [statusFilter, setStatusFilter] = useState(true);
  const [pagination, setPagination] = useState([]);
  let url = "/invoice?status=" + pending;
  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.checked);
    pending = statusFilter ? "Rejected" : "Approved";
    url = "/invoice?status=" + pending;
    fetchPayment({ url, setPaymentData, setPagination });
  }
  useEffect(() => {
    fetchPayment({ url, setPaymentData, setPagination });
    setUpdate(false);
  }, [update, url]);
  return (
    <>
      <PageWrapper title={isInvoice ? "Payment Invoices" : "Payment Receipts"}>
        <Grid>
          <Grid.Col span={12} my={15}>
            {isInvoice ? (
              <FilterBarPaymentView currentUrl={url} setPagination={setPagination} setPaymentData={setPaymentData} />
            ) : (
              <>
                <Grid my={10}>
                  <Grid.Col span={10}>
                    <FilterBarPaymentView currentUrl={url} setPagination={setPagination} setPaymentData={setPaymentData} />
                  </Grid.Col>
                  <Grid.Col span={2}>
                    <Flex justify={'end'}>
                      <Switch
                        label={statusFilter ? "Approved" : "Rejected"}
                        color="green"
                        labelPosition="left"
                        checked={statusFilter}
                        onChange={(e) => handleStatusFilter(e)}
                        styles={{ track: { backgroundColor: "red" } }}
                      />
                    </Flex>
                  </Grid.Col>
                </Grid>

              </>
            )}
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid
              columns={PaymentViewHeader({ isInvoice, setUpdate })}
              data={paymentData}
              currentUrl={url}
              setData={setPaymentData}
              pagination={pagination}
              setPagination={setPagination}
            />
          </Grid.Col>
        </Grid>

      </PageWrapper >
    </>
  );
}

export default PaymentView;
