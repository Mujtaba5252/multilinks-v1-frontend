import { Grid, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import React from "react";
import { useParams } from "react-router";

const Step1 = ({ form, loading }) => {
  const params = useParams();
  return (
    <Grid>
      <Grid.Col md={12}>
        <TextInput
          form={form}
          mt={"md"}
          mb={"md"}
          value={""}
          label={"Client UID"}
          placeholder="Enter Client UID"
          size="md"
          withAsterisk={true}
          disabled={params.editId}
          {...form?.getInputProps("UID")}
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <DatePickerInput
          form={form}
          mt={"md"}
          mb={"md"}
          size={"sm"}
          label="Select date"
          withAsterisk
          placeholder="Select date"
          disabled={params.editId}
          {...form?.getInputProps("quotation_date")}
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <TextInput
          form={form}
          mt={"md"}
          mb={"md"}
          value={""}
          label={"Client Name"}
          placeholder="Enter Client Name"
          size="md"
          withAsterisk={true}
          disabled={params.editId}
          {...form?.getInputProps("client_name")}
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <TextInput
          form={form}
          mt={"md"}
          mb={"md"}
          value={""}
          label={"Client Email"}
          placeholder="Enter Client Name"
          size="md"
          withAsterisk={true}
          disabled={params.editId}
          {...form?.getInputProps("client_email")}
        />
      </Grid.Col>
      <Grid.Col md={6}>
        <TextInput
          form={form}
          mt={"md"}
          mb={"md"}
          value={""}
          label={"Client Contact Number"}
          placeholder="Enter Client Contact Number"
          size="md"
          withAsterisk={true}
          disabled={params.editId}
          {...form?.getInputProps("client_contact_number")}
        />
      </Grid.Col>
      <Grid.Col md={12}>
        <Select
          label="Select Service Type"
          placeholder="Select Service Type"
          withAsterisk={true}
          size="md"
          data={[
            { value: "visa", label: "VISA Service" },
            { value: "license", label: "License Service" },
            { value: "other", label: "Other Service" },
          ]}
          disabled={params.editId}
          {...form?.getInputProps("service_type")}
        />
      </Grid.Col>
    </Grid>
  );
};

export default Step1;
