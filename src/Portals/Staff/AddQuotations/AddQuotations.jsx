import { Button, Group, Stepper } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import LicenseForm from "./LicenseForm";
import OtherServiceForm from "./OtherServiceForm";
import Step1 from "./Step1";
import VisaForm from "./VisaForm";

const AddQuotations = () => {
  const location = useLocation();
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  //for ssetting client data
  const clientData = location.state;
  if (location.state) {
    localStorage.setItem("clientData", JSON.stringify(clientData));
  }
  const storedClientData = JSON.parse(localStorage.getItem("clientData"));
  ///form validation
  const form = useForm({
    initialValues: {
      UID: storedClientData?.UID,
      client_name: storedClientData?.client_name,
      client_email: storedClientData?.client_email,
      client_contact_number: storedClientData?.client_contact_number,
      quotation_date: new Date(),
      service_type: "",
      offered_services: [],
      license_type: "",
      service_charges: "",
      entryPermit: "",
      total: "",
      discount: "",
      grand_total_numeric: "",
      grand_total_in_words: "",
    },
    validate: (value) => {},
  });
  //for stepper
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
    form.values.offered_services = null;
  };
  //handle submit
  const handleSubmit = (formValues) => {
    const values = {
      offered_services: formValues.offered_services?.map((item) => ({
        service: item === "entryPermit" ? formValues.entryPermit : item,
        amount: formValues[`${item}Amount`],
        ispaid: false,
      })),
      quotation_ID: formValues.UID,
      client_name: formValues.client_name,
      client_email: formValues.client_email,
      client_contact_number: formValues.client_contact_number,
      quotation_date: formValues.quotation_date,
      service_type: formValues.service_type,
      visa_status: formValues.visa_status,
      service_charges: formValues.service_charges,
      client: storedClientData?.id,
      total: formValues.total,
      discount: formValues.discount,
      grand_total_numeric: formValues.grand_total_numeric,
      grand_total_in_words: formValues.grand_total_in_words,
    };
    console.log(values);
  };
  return (
    <PageWrapper title="Add Quotation">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First Step">
            <Step1 form={form} />
          </Stepper.Step>
          <Stepper.Step label="Second Step">
            {form.values.service_type === "visa" ? (
              <VisaForm form={form} total={total} setTotal={setTotal} />
            ) : form.values.service_type === "license" ? (
              <LicenseForm form={form} />
            ) : form.values.service_type === "other" ? (
              <OtherServiceForm form={form} />
            ) : null}
          </Stepper.Step>
        </Stepper>
        <Group position="right" mt="xl">
          {active == 0 ? null : (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active == 1 ? (
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button onClick={nextStep}>Next step</Button>
          )}
        </Group>
      </form>
    </PageWrapper>
  );
};

export default AddQuotations;
