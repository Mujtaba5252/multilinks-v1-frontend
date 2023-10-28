import { Button, Flex, Text } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios_put } from "../../../../../Utils/Axios";
import { adminRoutes } from "../../../../../routes";
import toast from "react-hot-toast";
import CustomLoader from "../../../../../Components/CustomLoader/CustomLoader";

const LeaveRejectModal = ({ Data, setUpdate }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleReject = async (id) => {
    setLoading(true);
    let url = "/leave-request/" + id;
    try {
      await axios_put({ url: url, data: { status: "Rejected" } }).then(
        (res) => {
          if (res.data.data) {
            toast.success("Leave Rejected Successfully");
            setUpdate(true);
            navigate(adminRoutes.leaves);
            setLoading(false);
          } else {
            toast.error("Something went wrong");
            setLoading(false);
          }
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <CustomLoader loading={loading}>
      <Text fw={300} style={{ fontSize: "14px" }} align="center">
        Reject Leave Request for "{Data.staff?.name}-({Data.staff.staff_ID})" ?
        By Rejecting this leave, the leave will be Rejected.
      </Text>
      <Flex justify={"center"} mt={15}>
        {/* <Button w={"50%"} color={"red"} variant="light" ml={5} mr={5}>
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
};

export default LeaveRejectModal;
