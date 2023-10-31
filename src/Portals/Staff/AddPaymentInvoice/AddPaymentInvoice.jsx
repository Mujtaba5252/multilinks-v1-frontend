import React, { useEffect } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Grid, Group, TextInput, Tooltip } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MainBlue } from "../../../Utils/ThemeColors";
import { DatePickerInput } from "@mantine/dates";
import { axios_post } from "../../../Utils/Axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { staffRoutes } from "../../../routes";
import { numeric_to_word } from "../../../Utils/CommonFormatters";
import { Currency, SortAZ } from "tabler-icons-react";
const AddPaymentInvoice = () => {
  const QutationData = JSON.parse(localStorage.getItem("client_payment"));
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      id: QutationData?.id,
      Qutation_UID: QutationData?.quotation_ID,
      Client_UID: QutationData?.client.UID,
      Date: new Date(),
      Client_Name: QutationData?.client.client_name,
      Client_Contact_Number: QutationData?.client.client_contact_number,
      Service_Type: QutationData?.service_type,
      Approved_Quotation_Amount: QutationData?.grand_total_numeric,
      Amount_in_Numeric: "",
      Amount_in_Words: "",
    },
    validate: {
      Amount_in_Numeric: (value) =>
        value ? null : "Please Enter Amount in Numeric",
      Amount_in_Words: (value) =>
        value ? null : "Please Enter Amount in Words",
    },
  });
  const submitInvoice = async (values) => {
    const value = {
      quotation: values.id,
      amount_received: values.Amount_in_Numeric,
      amount_received_in_words: values.Amount_in_Words,
    };
    const url = "/invoice";
    await axios_post({ url: url, data: value }).then((response) => {
      if (response.status == 201 || response.status == 200) {
        toast.success("Invoice Added Successfully");
        localStorage.removeItem("client_payment");
        navigate(staffRoutes.viewPaymentInvoice);
      } else if (response.status == 400) {
        toast.error(response.data.message);
      } else {
        toast.error("Something Went Wrong");
      }
    });
  };


  return (
    <>
      <PageWrapper title="Add Payment Invoice">
        <Grid>
          <Grid.Col span={12}>
            <form>
              <Grid>
                <Grid.Col span={12}>
                  <TextInput
                    label="Qutation UID"
                    readOnly={true}
                    placeholder="Qutation UID"
                    {...form?.getInputProps("Qutation_UID")}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <DatePickerInput
                    label="Date"
                    placeholder="Date"
                    {...form?.getInputProps("Date")}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <TextInput
                    label="Client UID"
                    placeholder="Client UID"
                    {...form?.getInputProps("Client_UID")}
                    readOnly={true}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <TextInput
                    label="Client Name"
                    placeholder="Client Name"
                    {...form?.getInputProps("Client_Name")}
                    readOnly={true}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <TextInput
                    label="Client Contact Number"
                    placeholder="Client Contact Number"
                    {...form?.getInputProps("Client_Contact_Number")}
                    readOnly={true}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <TextInput
                    label="Service Type"
                    placeholder="Service Type"
                    {...form?.getInputProps("Service_Type")}
                    readOnly={true}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <TextInput
                    label="Approved Quotation Amount"
                    placeholder="Approved Quotation Amount"
                    {...form?.getInputProps("Approved_Quotation_Amount")}
                    readOnly={true}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <TextInput
                    label="Amount in Numeric"
                    placeholder="Please Enter Amount in Numeric"
                    type="number"
                    onMouseMove={() =>
                      form.setValues({
                        Amount_in_Words: numeric_to_word(
                          parseInt(form.values.Amount_in_Numeric)
                        ),
                      })
                    }
                    onBlurCapture={() => {
                      form.setValues({
                        Amount_in_Words: numeric_to_word(
                          parseInt(form.values.Amount_in_Numeric)
                        ),
                      });
                    }}
                    //get the value of ammount in numeric and convert it to words
                    {...form?.getInputProps("Amount_in_Numeric")}
                  />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                  <TextInput
                    label="Amount in Words"
                    placeholder="Please Enter Amount in Words"
                    {...form?.getInputProps("Amount_in_Words")}
                    readOnly={true}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Group position="right" mb={10} mt={10}>
                    <Button
                      color={MainBlue()}
                      onClick={() => {
                        form.isValid()
                          ? submitInvoice(form.values)
                          : form.validate();
                      }}
                    >
                      Submit
                    </Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </form>
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
};

export default AddPaymentInvoice;
