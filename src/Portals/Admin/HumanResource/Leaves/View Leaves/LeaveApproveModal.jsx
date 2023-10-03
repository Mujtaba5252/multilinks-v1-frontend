import { Button, Flex, Text } from "@mantine/core";
import React, { useState } from "react";
import { MainBlue } from "../../../../../Utils/ThemeColors";
import { axios_put } from "../../../../../Utils/Axios";
import { useNavigate } from "react-router";
import { adminRoutes } from "../../../../../routes";
import CustomLoader from "../../../../../Components/CustomLoader/CustomLoader";
import toast from "react-hot-toast";

const LeaveApproveModal = ({ Data, setUpdate }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleApprove = async (id) => {
    setLoading(true);
    let url = "/leave-request/" + id;
    try {
      console.log(url);
      await axios_put({ url: url, data: { status: "Approved" } }).then(
        (res) => {
          if (res.data.data) {
            toast.success("Leave Approved Successfully");
            setUpdate(true);
            setLoading(false);
            navigate(adminRoutes.leaves);
          } else {
            toast.error("Something went wrong");
            setLoading(false);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CustomLoader loading={loading}>
      <Text fw={300} style={{ fontSize: "14px" }} align="center">
        Approve Leave for "{Data.staff.name} ({Data.staff.staff_ID})"? By
        Approving this leave, the leave will be Approved.
      </Text>
      <Flex justify={"center"} mt={15}>
        <Button
          w={"50%"}
          color={"green"}
          variant="light"
          ml={5}
          mr={5}
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </Button>
        <Button
          w={"50%"}
          ml={5}
          mr={5}
          color={"green"}
          onClick={() => handleApprove(Data.id)}
        >
          Approve
        </Button>
      </Flex>
    </CustomLoader>
  );
};

export default LeaveApproveModal;
