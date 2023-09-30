import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { axios_get } from "../../../Utils/Axios";
import { PaymentInvoiceHeader } from "./PaymentInvoiceHeader";
import { staffRoutes } from "../../../routes";
import { useNavigate } from "react-router";
import ModalComponent from "../../../Components/ModalComponent/ModalComponent";
import QuotationsForPaymentInvoice from "./Modals/QuotationsForPaymentInvoice";

const ViewPaymentInvoice = () => {
  const [PaymentInvoiceData, setPaymentInvoiceData] = useState([]);
  const [addPayment, setAddPayment] = useState(false);
  const navigate = useNavigate();
  const getPaymentInvoiceData = async () => {
    axios_get({ url: "/invoice", withSNo: true })
      .then((res) => {
        console.log(res.data.data);
        setPaymentInvoiceData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPaymentInvoiceData();
  }, []);

  return (
    <PageWrapper title={"VIEW PAYMENT INVOICE"}>
      <ModalComponent
        opened={addPayment}
        setOpened={setAddPayment}
        radius
        size={1200}
        >
          <QuotationsForPaymentInvoice />
      </ModalComponent>
      <Group
        position="right"
        my={20}
      >
        <Button onClick={() => {setAddPayment(true)}} variant="filled">ADD PAYMENT INVOICE</Button>
        <DataGrid
          columns={PaymentInvoiceHeader()}
          data={PaymentInvoiceData}
          pagination={true}
        />
      </Group>
    </PageWrapper>
  );
};

export default ViewPaymentInvoice;
