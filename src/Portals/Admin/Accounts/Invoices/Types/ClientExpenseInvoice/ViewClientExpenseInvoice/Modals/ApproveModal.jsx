import { Badge, Button, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { MainBlue } from "../../../../../../../../Utils/ThemeColors";
import { CurrencyFormatter } from "../../../../../../../../Utils/CommonFormatters";
import { axios_put } from "../../../../../../../../Utils/Axios";
import { adminRoutes } from "../../../../../../../../routes";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../../../../../../../Components/CustomLoader/CustomLoader";

function ApproveModal({ Data, setUpdate }) {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const handleApprove = async (id) => {
    setLoading(true);
    let url = "/client-expense/" + id;
    await axios_put({ url: url, data: { status: "Approved" } }).then((res) => {
      if (res.status === 200 || res.status == 201) {
        toast.success("Client Expense Invoice Approved Successfully");
        setLoading(false);
        setUpdate(true);
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
        Approve Client Expense Invoice of "{Data.client.client_name} (
        {Data.client.UID})" of Service "{Data.payment_for}" for amount "
        {CurrencyFormatter(Data.expense_amount)}" ?
      </Text>
      {Data.quotation.balance_warning ? (
        <Flex justify={"center"}>
          <Badge fw={300} style={{ fontSize: "14px" }} color="yellow">
            Warning: Client Expenses are Excceding 80% of the Client Balance !
          </Badge>
        </Flex>
      ) : (
        ""
      )}
      <Flex justify={"center"} mt={15}>
        {/* <Button w={'50%'} color={MainBlue()} variant='light' ml={5} mr={5}>Cancel</Button> */}
        <Button
          w={"100%"}
          ml={5}
          mr={5}
          color={MainBlue()}
          onClick={() => handleApprove(Data.id)}
        >
          Approve
        </Button>
      </Flex>
    </CustomLoader>
  );
}

export default ApproveModal;
