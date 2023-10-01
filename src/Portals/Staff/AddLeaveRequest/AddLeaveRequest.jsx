import React, { useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Grid, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import CustomLoader from "../../../Components/CustomLoader/CustomLoader";

const AddLeaveRequest = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      leaveType: "",
    },
    validate: {},
  });
  return (
    <PageWrapper title={"ADD LEAVE REQUEST"}>
      <CustomLoader loading={loading}>
        <form>
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mb={"md"}
                label={"Name"}
                placeholder="Enter Name"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("client_name")}
              />
            </Grid.Col>
          </Grid>
        </form>
      </CustomLoader>
    </PageWrapper>
  );
};

export default AddLeaveRequest;
