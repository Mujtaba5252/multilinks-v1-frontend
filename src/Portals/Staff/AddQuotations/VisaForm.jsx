import {
  Button,
  Grid,
  Group,
  MultiSelect,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { numeric_to_word } from "../../../Utils/CommonFormatters";

const VisaForm = ({ form, total, setTotal }) => {
  const params = useParams();
  const [calculate, setCalculate] = useState(false);
  const data = [
    { value: "Job Offer Letter", label: "Job Offer Letter" },
    { value: "Insurance", label: "Insurance" },
    { value: "Labor Card Fee", label: "Labor Card Fee" },
    { value: "Entry Permit", label: "Entry Permit" },
    { value: "Status Change", label: "Status Change" },
    { value: "Medical", label: "Medical" },
    { value: "Emirates Id", label: "Emirated ID" },
    { value: "Stamping", label: "Stamping" },
    { value: "Towjeeh", label: "Towjeeh" },
  ];
  let collector = 0;
  useEffect(() => {
    collector =
      parseInt(form.values.service_charges) + parseInt(form.values.total) || 0;
    setTotal(collector);
    form.setFieldValue("grand_total_numeric", collector);
    form.setFieldValue(
      "grand_total_in_words",
      numeric_to_word(parseInt(form.values.grand_total_numeric))
    );
  }, [
    form.values.grand_total_numeric,
    form.values.service_charges,
    form.values.total,
    calculate
  ]);

  // useEffect(() => {
  //   if (form.values.offered_services) {
  //     data.forEach((item) => {
  //       if (!form.values.offered_services.includes(item.value)) {
  //         form?.setFieldValue(`${item.value}Amount`, "");
  //       }
  //     });
  //   }
  //   form.setFieldValue(
  //     "total",
  //     Object.keys(form.values)

  //       .filter((key) => key.endsWith("Amount"))
  //       .reduce((acc, key) => {
  //         return acc + (parseInt(form.values[key]) || 0); // Parse and add the amount (default to 0 if NaN)
  //       }, 0)
  //   );
  // }, [
  //   form.values.total,

  //   form.values.offered_services.map((item) => item.amount),
  // ]);
  return (
    <>
      <Grid>
        <Grid.Col md={12}>
          <Select
            clearable
            form={form}
            label="Visa Status"
            mt={"md"}
            placeholder="Select Service Type"
            size="md"
            withAsterisk={true}
            data={[
              { value: "NEW", label: "NEW" },
              { value: "Renewal", label: "Renewal" },
            ]}
            disabled={params.editId}
            {...form?.getInputProps("visa_status")}
          />
        </Grid.Col>

        <Grid.Col md={12}>
          <MultiSelect
            form={form}
            data={data}
            label="Offered Services"
            withAsterisk={true}
            placeholder="Select Offered Services"
            size="md"
            onSelect={(event)=>{
              console.log(event)
            }}
            disabled={params.editId}
            {...form?.getInputProps("offered_services")}
          />
        </Grid.Col>
        {form.values.offered_services &&
          form.values.offered_services.map(
            (item) => (
              (
                <React.Fragment key={item}>
                  {item == "Entry Permit" ? (
                    <Grid.Col md={6}>
                      <Select
                        form={form}
                        label={data.find((el) => el.value === item)?.label}
                        placeholder={
                          data.find((el) => el.value === item)?.label
                        }
                        size={"md"}
                        data={[
                          {
                            value: "Inside Entry Permit",
                            label: "Inside Entry Permit",
                          },
                          {
                            value: "Outside Entry Permit",
                            label: "Outside Entry Permit",
                          },
                        ]}
                        withAsterisk={true}
                        {...form?.getInputProps("entryPermit")}
                      />
                    </Grid.Col>
                  ) : (
                    <Grid.Col md={6}>
                      <TextInput
                        form={form}
                        label={data.find((el) => el.value === item)?.label}
                        placeholder={
                          data.find((el) => el.value === item)?.label
                        }
                        size="md"
                        disabled
                        {...form?.getInputProps(item)}
                      />
                    </Grid.Col>
                  )}
                  <Grid.Col md={6}>
                    <TextInput
                      form={form}
                      type="number"
                      label={"Amount"}
                      icon="Dhs"
                      placeholder={"Amount"}
                      withAsterisk={true}
                      onBlurCapture={() => {
                        if (form.values.offered_services) {
                          data.forEach((item) => {
                            if (
                              !form.values.offered_services.includes(item.value)
                            ) {
                              form?.setFieldValue(`${item.value}Amount`, "");
                            }
                          });
                        }
                        form.setFieldValue(
                          "total",
                          Object.keys(form.values)

                            .filter((key) => key.endsWith("Amount"))
                            .reduce((acc, key) => {
                              return acc + (parseInt(form.values[key]) || 0); // Parse and add the amount (default to 0 if NaN)
                            }, 0)
                        );
                      }}
                      onMouseMove={() => {
                        if (form.values.offered_services) {
                          data.forEach((item) => {
                            if (
                              !form.values.offered_services.includes(item.value)
                            ) {
                              form?.setFieldValue(`${item.value}Amount`, "");
                            }
                          });
                        }
                        form.setFieldValue(
                          "total",
                          Object.keys(form.values)

                            .filter((key) => key.endsWith("Amount"))
                            .reduce((acc, key) => {
                              return acc + (parseInt(form.values[key]) || 0); // Parse and add the amount (default to 0 if NaN)
                            }, 0)
                        );
                      }}
                      size="md"
                      {...form?.getInputProps(`${item}Amount`)}
                    />
                  </Grid.Col>
                </React.Fragment>
              )
            )
          )}

        <Grid.Col md={6}>
          <TextInput
            form={form}
            type="number"
            label={"Total Amount"}
            readOnly
            withAsterisk
            placeholder={"Please Enter Amount"}
            size="md"
            {...form?.getInputProps("total")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            form={form}
            type="number"
            label={"Service Charges"}
            placeholder="Enter Service Charges"
            icon="Dhs"
            size="md"
            withAsterisk={true}
            {...form?.getInputProps("service_charges")}
          />
        </Grid.Col>

        <Grid.Col md={12}>
          <TextInput
            form={form}
            type="number"
            label={"Grand Total(Total Amount + Service Charges)"}
            withAsterisk
            placeholder={"Please Enter Grand Total"}
            size="md"
            readOnly
            {...form?.getInputProps("grand_total_numeric")}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <TextInput
            form={form}
            withAsterisk
            label={"Grand Total(In Words)"}
            placeholder={"Please Enter Grand Total In Words"}
            readOnly
            size="md"
            {...form?.getInputProps("grand_total_in_words")}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default VisaForm;
