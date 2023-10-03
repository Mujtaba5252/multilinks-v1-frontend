import React, { useContext, useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import CustomLoader from "../../../Components/CustomLoader/CustomLoader";
import { Button, Grid, Group, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { UserContext } from "../../../Contexts/UserContext";
import { CircleCheck, CircleX } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import { axios_post } from "../../../Utils/Axios";
import { staffRoutes } from "../../../routes";
import toast from "react-hot-toast";

const AddLeaveRequest = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      client_name: "",
      emirates_id: "",
      designation: "",
      date: new Date(),
      leave_date: [],
      subject: "",
      reason: "",
    },
    validate: {},
  });
  useEffect(() => {
    setLoading(true);
    if (user) {
      form.setValues({
        client_name: user?.name,
        emirates_id: user?.emirates_ID,
        designation: user?.designation,
      });
      setLoading(false);
    }
  }, [user]);
  const handleSubmit = async (formValues) => {
    setLoading(true);
    const values = {
      leave_date: formValues.leave_date,
      reason: formValues.reason,
      subject: formValues.subject,
    };
    try {
      let url = "/leave-request";
      let response = await axios_post({ url, data: values });
      if (response.data?.data) {
        toast.success("Leave Request Added Successfully");
        navigate(staffRoutes.viewLeaveRequest);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  return (
    <PageWrapper title={"ADD LEAVE REQUEST"}>
      <CustomLoader loading={loading}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mb={"md"}
                label={"Name"}
                placeholder="Please Enter Name"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("client_name")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mb={"md"}
                label={"Emirates ID"}
                placeholder="Please Enter Emirates ID"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("emirates_id")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mb={"md"}
                label={"Designation"}
                placeholder="Please Enter Designation"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("designation")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <DateInput
                label="Date"
                placeholder="Please Date"
                size="md"
                withSelect={true}
                {...form?.getInputProps("date")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <DatePickerInput
                type="range"
                label="Leave Date"
                placeholder="Please Select Leave Date"
                size="md"
                fw={"lighter"}
                {...form?.getInputProps("leave_date", { array: true })}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mb={"md"}
                label={"Subject"}
                placeholder="Please Enter Subject"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("subject")}
              />
            </Grid.Col>
            <Grid.Col md={12}>
              <Textarea
                form={form}
                mb={"md"}
                label={"Reason"}
                placeholder="Please Enter Reason"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("reason")}
                rows={5}
              />
            </Grid.Col>
          </Grid>
          <Group position="right">
            <Button
              mt={"md"}
              mb={"md"}
              variant="outline"
              onClick={() => {
                navigate(-1);
              }}
              leftIcon={<CircleX color="red" />}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              mt={"md"}
              mb={"md"}
              leftIcon={<CircleCheck color="white" />}
            >
              Submit
            </Button>
          </Group>
        </form>
      </CustomLoader>
    </PageWrapper>
  );
};

export default AddLeaveRequest;
