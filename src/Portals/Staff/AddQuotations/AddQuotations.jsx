import { Button, Group, Stepper } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import LicenseForm from "./LicenseForm";
import OtherServiceForm from "./OtherServiceForm";
import Step1 from "./Step1";
import VisaForm from "./VisaForm";
import { axios_get, axios_post, axios_switch } from "../../../Utils/Axios";
import toast from "react-hot-toast";
import { staffRoutes } from "../../../routes";
import CustomLoader from "../../../Components/CustomLoader/Customloader";

const AddQuotations = () => {
  const param = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);
  const [Loading, setLoading] = useState(false);
  //for ssetting client data
  const clientData = location.state;
  if (location.state) {
    localStorage.setItem("clientData", JSON.stringify(clientData));
  }
  const storedClientData = JSON.parse(localStorage.getItem("clientData"));
  ///form validation
  const form = useForm({
    initialValues: {
      UID: !param.editId ? storedClientData?.UID : "",
      client_name: !param.editId ? storedClientData?.client_name : "",
      client_email: !param.editId ? storedClientData?.client_email : "",
      client_contact_number: !param.editId
        ? storedClientData?.client_contact_number
        : "",
      quotation_date: !param.editId ? new Date() : null,
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
    if (!param.editId) {
      form.reset();
    }
  };
  //function for showing date in DatePickerInput in this format September 05,2023

  //get Quotation Data
  const getQuotationData = async () => {
    setLoading(true);
    axios_get({ url: `/quotation/${param.editId}` })
      .then((res) => {
        let data = res.data.data;

        const amountValues = {};
        data?.offered_services?.forEach((item) => {
          // Assuming item.service is the service type and item.amount is the amount
          amountValues[`${item?.service}Amount`] = item.amount;
        });

        form.setValues({
          UID: data?.client?.UID,
          client_name: data?.client?.client_name,
          client_email: data?.client?.client_email,
          client_contact_number: data?.client?.client_contact_number,
          //quotation date is string so we need to convert it into date
          // quotation_date: DateFunction(parseISO(data?.quotation_date)),

          service_type: data?.service_type,
          offered_services: data?.offered_services?.map((item) => item.service),

          license_type: data?.service_type_additional_fields?.license_type,
          service_charges: data?.service_charges,
          entryPermit: data?.offered_services?.map((item) => item.service),
          total: data?.total,
          discount: data?.discount,
          grand_total_numeric: data?.grand_total_numeric,
          grand_total_in_words: data?.grand_total_in_words,
          visa_status: data?.service_type_additional_fields?.visa_status,
          ...amountValues,
        });
        setTotal(data?.total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (param.editId) {
      getQuotationData();
    }
  }, [param.editId]);

  //handle submit
  const handleSubmit = async (formValues) => {
    setLoading(true);
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
      quotation_date: formValues.quotation_date,
      service_type_additional_fields: { visa_status: formValues.visa_status },
      service_charges: formValues.service_charges,
      client: storedClientData?.id,
      total: formValues.total,
      discount: formValues.discount,
      grand_total_numeric: formValues.grand_total_numeric,
      grand_total_in_words: formValues.grand_total_in_words,
    };
    let url;
    if (param.editId) {
      url = `/quotation/${param.editId}`;
    } else {
      url = "/quotation";
    }

    console.log(values);
    await axios_switch(param.editId ? "put" : "post", {
      url: url,
      data: values,
    })
      .then((res) => {
        if (res.data.data) {
          toast.success(
            param.edit
              ? "Quotation Updated Successfully"
              : "Quotation Added Successfully"
          );
          navigate(staffRoutes.viewQuotation);
          setLoading(false);
        } else {
          toast.error("Quotation Already Exist");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
        setLoading(false);
      });
  };
  return (
    <PageWrapper title={param.editId ? "Update Quotation" : "Add Quotation"}>
      <CustomLoader loading={Loading}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="First Step">
              <Step1 form={form} loading={Loading} />
            </Stepper.Step>
            <Stepper.Step label="Second Step">
              {form.values.service_type === "visa" ? (
                <VisaForm form={form} total={total} setTotal={setTotal} />
              ) : form.values.service_type === "license" ? (
                <LicenseForm form={form} total={total} setTotal={setTotal} />
              ) : form.values.service_type === "other" ? (
                <OtherServiceForm
                  form={form}
                  total={total}
                  setTotal={setTotal}
                />
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
                <Button type="submit">
                  {param.editId ? "Update" : "Submit"}
                </Button>
              </>
            ) : null}
          </Group>
        </form>
      </CustomLoader>
    </PageWrapper>
  );
};

export default AddQuotations;
