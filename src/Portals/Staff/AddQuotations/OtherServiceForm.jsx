import {
  Button,
  Grid,
  MultiSelect,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";
import React, { useEffect } from "react";
import { numeric_to_word } from "../../../Utils/CommonFormatters";

const OtherServiceForm = ({ form, setTotal }) => {
  const data = [
    { value: "Job Offer Letteer", label: "Job Offer Letter" },
    { value: "Insurance", label: "Insurance" },
    { value: "Labor Card Fee", label: "labor Card Fee" },
    { value: "Entry Permit", label: "Entry Permit" },
    { value: "Status Change", label: "Status Change" },
    { value: "Medical", label: "Medical" },
    { value: "Emirates Id", label: "Emirates ID" },
    { value: "Stamping", label: "Stamping" },
    { value: "Towjeeh", label: "Towjeeh" },
    { value: "Intial Approval", label: "Intial Approval" },
    { value: "Ejari", label: "Ejari" },
    { value: "Self Provided", label: "Self Provided" },
    { value: "Offerd Services", label: "Offered Services" },
    { value: "Final Submission", label: "Final Submission" },
    { value: "Voucher", label: "Voucher/DED Fee" },
    { value: "Imigration Card", label: "Imigration Card" },
    { value: "E-Signature Card", label: "E Signature Card" },
    { value: "LaborCard", label: "Labor Card" },
    { value: "SponsorFee", label: "Sponsor Fee" },
    { value: "Labor Update", label: "Labor Update" },
  ];
  let collector = 0;
  useEffect(() => {
    collector = 0;
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
            data={[
              { value: "NEW", label: "NEW" },
              { value: "Renewal", label: "Renewal" },
            ]}
            {...form?.getInputProps("visa_status")}
          />
        </Grid.Col>

        <Grid.Col md={12}>
          <MultiSelect
            form={form}
            data={data}
            label="Offered Services"
            placeholder="Select Offered Services"
            onChange={(value) => {
              data.forEach((element) => {
                if (!value.includes(element.value)) {
                  form.setFieldValue(`${element.value}Amount`, "");
                }
              });
            }}
            size="md"
            {...form?.getInputProps("offered_services")}
          />
        </Grid.Col>
        {form.values.offered_services &&
          form.values.offered_services.map((item) => (
            <React.Fragment key={item}>
              {item == "Entry Permit" ? (
                <Grid.Col md={6}>
                  <Select
                    form={form}
                    label={data.find((el) => el.value === item)?.label}
                    placeholder={data.find((el) => el.value === item)?.label}
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
                    placeholder={data.find((el) => el.value === item)?.label}
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
                  size="md"
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
                  onMouseLeave={() => {
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
                  withAsterisk={true}
                  {...form?.getInputProps(`${item}Amount`)}
                />
              </Grid.Col>
            </React.Fragment>
          ))}

        <Grid.Col md={6}>
          <TextInput
            form={form}
            type="number"
            label={"Total Amount"}
            placeholder={"Please Enter Amount"}
            size="md"
            onMouseMove={() => {
              if (form.values.offered_services) {
                data.forEach((item) => {
                  if (!form.values.offered_services.includes(item.value)) {
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
            onMouseMove={() => {
              if (form.values.offered_services) {
                data.forEach((item) => {
                  if (!form.values.offered_services.includes(item.value)) {
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
            {...form?.getInputProps("service_charges")}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <TextInput
            form={form}
            type="number"
            label={"Grand Total"}
            placeholder={"Please Enter Grand Total"}
            size="md"
            readOnly
            onMouseMove={() => {
              if (form.values.offered_services) {
                data.forEach((item) => {
                  if (!form.values.offered_services.includes(item.value)) {
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
            {...form?.getInputProps("grand_total_numeric")}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <TextInput
            form={form}
            label={"Grand Total(In Words)"}
            placeholder={"Please Enter Grand Total In Words"}
            size="md"
            onMouseMove={() => {
              if (form.values.offered_services) {
                data.forEach((item) => {
                  if (!form.values.offered_services.includes(item.value)) {
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
            {...form?.getInputProps("grand_total_in_words")}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default OtherServiceForm;
