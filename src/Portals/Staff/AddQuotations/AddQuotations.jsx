import { Button, Group, Stepper } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import LicenseForm from "./LicenseForm";
import OtherServiceForm from "./OtherServiceForm";
import Step1 from "./Step1";
import VisaForm from "./VisaForm";
import { axios_post } from "../../../Utils/Axios";
import toast from "react-hot-toast";
import { staffRoutes } from "../../../routes";

const AddQuotations = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
      discount: 0,
      grand_total_numeric: "",
      grand_total_in_words: "",
    },
    validate: {
      service_type: (value) => (value ? null : "Please Select Service Type"),
      visa_status: (value) => (value ? null : "Please Select Visa Status"),
      service_charges: (value) =>
        value ? null : "Please Enter Service Charges",
      offered_services: (value) => (value ? null : "Please Select Services"),
      total: (value) => (value ? null : "Please Enter Total"),
      grand_total_numeric: (value) =>
        value ? null : "Please Enter Grand Total Numeric",
      grand_total_in_words: (value) =>
        value ? null : "Please Enter Grand Total In Words",
    },
  });
  //for stepper
  const nextStep = () => {
    if (active == 1) {
      handleSubmit(form.values);
    } else {
      if (form.values.service_type?.length > 0) {
        setActive((current) => (current < 2 ? current + 1 : current));
      }
    }
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
    form.values.offered_services = null;
    form.reset();
  };
  //handle submit
  const handleSubmit = async (formValues) => {
    const values = {
      offered_services: formValues.offered_services?.map((item) => ({
        service: item === "entryPermit" ? formValues.entryPermit : item,
        amount: formValues[`${item}Amount`],
        ispaid: false,
      })),
      quotation_ID: formValues.UID,
      quotation_date: formValues.quotation_date,
      service_type: formValues.service_type,
      client_name: formValues.client_name,
      client_email: formValues.client_email,
      client_contact_number: formValues.client_contact_number,
      service_type_additional_fields: { visa_status: formValues.visa_status },
      service_charges: formValues.service_charges,
      client: storedClientData?.id,
      total: formValues.total,
      discount: formValues.discount,
      grand_total_numeric: formValues.grand_total_numeric,
      grand_total_in_words: formValues.grand_total_in_words,
    };
    let url = "/quotation";
    console.log(values);
    await axios_post({ url: url, data: values })
      .then((res) => {
        if (res.data.data) {
          toast.success("Quotation Added Successfully");
          navigate(staffRoutes.viewQuotation);
        } else {
          toast.error("Quotation Already Exist");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
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
              <LicenseForm form={form} total={total} setTotal={setTotal} />
            ) : form.values.service_type === "other" ? (
              <OtherServiceForm form={form} total={total} setTotal={setTotal} />
            ) : null}
          </Stepper.Step>
        </Stepper>
        <Group position="right" mt="xl">
          {active == 0 ? (
            <Button onClick={nextStep}>Next step</Button>
          ) : active == 1 ? (
            <>
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
              <Button type="submit">Submit</Button>
            </>
          ) : null}
        </Group>
      </form>
    </PageWrapper>
  );
};

export default AddQuotations;
