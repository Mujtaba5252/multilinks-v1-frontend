import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Flex, Grid, Group } from "@mantine/core";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { PaymentInvoiceHeader } from "./PaymentInvoiceHeader";
import ModalComponent from "../../../Components/ModalComponent/ModalComponent";
import QuotationsForPaymentInvoice from "./Modals/QuotationsForPaymentInvoice";
import { getPaymentInvoiceData } from "./PaymentFunctions";
import FilterBarPaymentView from "../../Admin/Accounts/Invoices/Types/PaymentInvoice/ViewPayments/FilterBarPaymentView";
import { CirclePlus } from "tabler-icons-react";

const ViewPaymentInvoice = () => {
  const [PaymentInvoiceData, setPaymentInvoiceData] = useState([]);
  const [addPayment, setAddPayment] = useState(false);
  const [pagination, setPagination] = useState([]);
  let url = "/invoice";

  useEffect(() => {
    getPaymentInvoiceData({ url, setPaymentInvoiceData, setPagination });
  }, []);

  return (
    <PageWrapper title={"VIEW PAYMENT INVOICE"}>
      <Grid>
        <ModalComponent
          opened={addPayment}
          setOpened={setAddPayment}
          radius
          size={1200}
        >
          <QuotationsForPaymentInvoice />
        </ModalComponent>
        <Grid.Col mt={10} span={12} mb={10}>
          <Flex justify={"end"}>
            <Button
              w={200}
              leftIcon={<CirclePlus />}
              onClick={() => {
                setAddPayment(true);
              }}
              variant="filled"
            >
              ADD PAYMENT INVOICE
            </Button>
          </Flex>
        </Grid.Col>
        <Grid.Col mb={10} span={12}>
          <FilterBarPaymentView
            currentUrl={url}
            setPaymentData={setPaymentInvoiceData}
            setPagination={setPagination}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <DataGrid
            columns={PaymentInvoiceHeader()}
            data={PaymentInvoiceData}
            pagination={pagination}
            currentUrl={url}
            setPagination={setPagination}
            setData={setPaymentInvoiceData}
          />
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
};

export default ViewPaymentInvoice;
