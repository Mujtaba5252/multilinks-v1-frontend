import {
  Button,
  Grid,
  Group,
  MultiSelect,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";
import React, { useEffect } from "react";
import { numeric_to_word } from "../../../Utils/CommonFormatters";

const LicenseForm = ({ form, setTotal }) => {
  const data = [
    { value: "Intial Approval", label: "Intial Approval" },
    { value: "Ejari", label: "Ejari" },
    { value: "Self Provided", label: "Self Provided" },
    { value: "Offerd Services", label: "Offered Services" },
    { value: "Final Submission", label: "Final Submission" },
    { value: "Voucher", label: "Voucher/DED Fee" },
    { value: "Imigration Card", label: "Imigration Card" },
    { value: "ESignature Card", label: "E Signature Card" },
    { value: "LaborCard", label: "Labor Card" },
    { value: "Sponsor Fee", label: "Sponsor Fee" },
    { value: "Labor Update", label: "Labor Update" },
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
  ]);

  // useEffect(() => { this causing issues for now its now commented
  // if (form.values.offered_services) {
  //   data.forEach((item) => {
  //     if (!form.values.offered_services.includes(item.value)) {
  //       form?.setFieldValue(`${item.value}Amount`, "");
  //     }
  //   });
  // }
  //   if (form.values.offered_services) {
  //     data.forEach((item) => {
  //       if (!form.values.offered_services.includes(item.value)) {
  //         form?.setFieldValue(`${item.value}Amount`, "");
  //       }
  //     });
  //   }
  // }, [form.values.offered_services]);

  return (
    <>
      <Grid>
        <Grid.Col md={12}>
          <Select
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
            size="md"
            {...form?.getInputProps("offered_services")}
            //if the offered services are removed then clear the amount field value so that it does not get added in the total
          />
        </Grid.Col>
        {form.values.offered_services &&
          form.values.offered_services.map((item) => (
            <React.Fragment key={item}>
              <Grid.Col md={6} key={item}>
                <TextInput
                  form={form}
                  label={data.find((el) => el.value === item)?.label}
                  placeholder={data.find((el) => el.value === item)?.label}
                  //if the service is removed then clear the amount field

                  size="md"
                  disabled
                  {...form?.getInputProps(item)}
                />
              </Grid.Col>
              <Grid.Col md={6}>
                <TextInput
                  form={form}
                  type="number"
                  label={"Amount"}
                  icon="Dhs"
                  placeholder={"Amount"}
                  size="md"
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
                      // add all the amount values and store it in the total field
                      Object.keys(form.values)
                        .filter((key) => key.endsWith("Amount")) // Filter by keys ending with "Amount"
                        .reduce((acc, key) => {
                          return acc + (parseInt(form.values[key]) || 0); // Parse and add the amount (default to 0 if NaN)
                        }, 0)
                    );
                  }}
                  //clear the amount field if the service is removed

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
            readOnly
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
        {/* <Grid.Col span={12}>
          <Group position="right">
            <Button onClick={calculate}> Calculate Grand Total</Button>
          </Group>
        </Grid.Col> */}
        <Grid.Col md={12}>
          <TextInput
            form={form}
            type="number"
            label={"Grand Total"}
            placeholder={"Please Enter Grand Total"}
            size="md"
            {...form?.getInputProps("grand_total_numeric")}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <TextInput
            form={form}
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

export default LicenseForm;
