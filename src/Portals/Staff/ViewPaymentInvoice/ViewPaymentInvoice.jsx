import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { axios_get } from "../../../Utils/Axios";
import { PaymentInvoiceHeader } from "./PaymentInvoiceHeader";
import { staffRoutes } from "../../../routes";
import { useNavigate } from "react-router";

const ViewPaymentInvoice = () => {
  const [PaymentInvoiceData, setPaymentInvoiceData] = useState([]);
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
      {" "}
      <Group
        position="right"
        my={20}
        onClick={() => navigate(staffRoutes.addPaymentInvoice)}
      >
        <Button variant="filled">ADD PAYMENT INVOICE</Button>
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
