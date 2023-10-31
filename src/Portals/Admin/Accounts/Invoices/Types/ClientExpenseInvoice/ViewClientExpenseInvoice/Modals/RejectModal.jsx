import { Button, Flex, Text } from "@mantine/core";
import React from "react";
import { axios_put } from "../../../../../../../../Utils/Axios";
import { CurrencyFormatter } from "../../../../../../../../Utils/CommonFormatters";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { adminRoutes } from "../../../../../../../../routes";
import CustomLoader from "../../../../../../../../Components/CustomLoader/CustomLoader";

function RejectModal({ Data, setUpdate, setOpenRejectModal }) {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleReject = async (id) => {
    setLoading(true);
    let url = "/client-expense/" + id;
    await axios_put({ url: url, data: { status: "Rejected" } }).then((res) => {
      if (res.status === 200 || res.status == 201) {
        toast.success("Client Expense Invoice Approved Successfully");
        setUpdate(true);
        setLoading(false);
        navigate(adminRoutes.clientExpenseInvoice);
      } else if (res.status === 400) {
        toast.error(res.data.message);
        setLoading(false);
      } else {
        toast.apply(res.data.message);
        setLoading(false);
      }
    });
  };
  return (
    <CustomLoader loading={loading}>
      <Text fw={300} style={{ fontSize: "14px" }} align="center">
        Reject Client Expense Invoice of "{Data.client.client_name} (
        {Data.client.UID})" of Service "{Data.payment_for}" for amount "
        {CurrencyFormatter(Data.expense_amount)}" ?
      </Text>
      <Flex justify={"center"} mt={15}>
        {/* <Button
          w={"50%"}
          color={"red"}
          variant="light"
          ml={5}
          mr={5}
          onClick={() => {
            setOpenRejectModal(false);
          }}
        >
          Cancel
        </Button> */}
        <Button
          w={"100%"}
          ml={5}
          mr={5}
          color={"red"}
          onClick={() => handleReject(Data.id)}
        >
          Reject
        </Button>
      </Flex>
    </CustomLoader>
  );
}

export default RejectModal;
