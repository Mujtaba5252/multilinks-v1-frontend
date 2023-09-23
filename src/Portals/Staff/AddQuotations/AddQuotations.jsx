import { Button, Grid, Group, Stepper, TextInput } from "@mantine/core";
import React, { useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { useForm } from "@mantine/form";

const AddQuotations = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const form = useForm({
    initialValues: {
      quotation: "",
      quotation_date: new Date(),
    },
    validate: (value) => {},
  });
  const handleSubmit = (formValues) => {};
  return (
    <PageWrapper title="Add Quotation">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First Step">
            <Grid>
              <Grid.Col md={6}>
                <TextInput
                  form={form}
                  mt={"md"}
                  mb={"md"}
                  value={""}
                  label={"Quotation"}
                  placeholder="Enter Quotation"
                  size="md"
                  withAsterisk={true}
                  {...form?.getInputProps("quotation")}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                {/* <DatePickerInput
                  form={form}
                  mt={"md"}
                  mb={"md"}
                  size={"xs"}
                  label="Select date"
                  withAsterisk
                  placeholder="Select date"
                  {...form?.getInputProps("quotation_date")}
                /> */}
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
                  {...form?.getInputProps("client_name")}
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
                  {...form?.getInputProps("client_contact_number")}
                />
              </Grid.Col>
            </Grid>
          </Stepper.Step>
          <Stepper.Step label="Second Step"></Stepper.Step>
        </Stepper>
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </form>
    </PageWrapper>
  );
};

export default AddQuotations;
