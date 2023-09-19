import { Button, Grid, Group, Loader, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { UserContext } from "../../../Contexts/UserContext";
const AddClient = () => {
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const form = useForm({
    initialValues: {
      addedBy: user?.name,
      UID: "",
      client_name: "",
      client_nationality: "",
      client_email: "",
      client_contact_number: "",
      client_optional_contact: "",
    },
    validate: {},
  });

  const handleSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <PageWrapper title="ADD CLIENT">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          <Grid.Col md={6}>
            <TextInput
              form={form}
              mt={"md"}
              mb={"md"}
              value={user?.name}
              label={"Added By"}
              placeholder="Enter Added By"
              size="md"
              withAsterisk={true}
              {...form?.getInputProps("addedBy")}
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              form={form}
              mt={"md"}
              mb={"md"}
              label={"UID"}
              placeholder="Enter UID"
              size="md"
              withAsterisk={true}
              {...form?.getInputProps("UID")}
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              form={form}
              mt={"md"}
              mb={"md"}
              label={"Client Name"}
              placeholder="Enter Client Name"
              size="md"
              withAsterisk={true}
              {...form?.getInputProps("client_name")}
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              form={form}
              mt={"md"}
              mb={"md"}
              label={"Client Nationality"}
              placeholder="Enter Client Nationality"
              size="md"
              withAsterisk={true}
              {...form?.getInputProps("client_nationality")}
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              form={form}
              mt={"md"}
              mb={"md"}
              label={"Client Email"}
              placeholder="Enter Client Email"
              size="md"
              withAsterisk={true}
              {...form?.getInputProps("client_email")}
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              form={form}
              mt={"md"}
              mb={"md"}
              label={"Client Contact Number"}
              placeholder="Enter Client Contact Number"
              size="md"
              withAsterisk={true}
              {...form?.getInputProps("client_contact_number")}
            />
          </Grid.Col>
          <Grid.Col md={12}>
            <TextInput
              form={form}
              mt={"md"}
              mb={"md"}
              label={"Client Optional Contact Number"}
              placeholder="Enter Client Contact No."
              size="md"
              withAsterisk={true}
              {...form?.getInputProps("client_optional_contact")}
            />
          </Grid.Col>
        </Grid>
        <Group position="right">
          <Button type="submit" mt={"md"} mb={"md"} size="lg">
            Submit
          </Button>
        </Group>
      </form>
    </PageWrapper>
  );
};

export default AddClient;
