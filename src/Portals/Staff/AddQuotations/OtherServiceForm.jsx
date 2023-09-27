import { Grid, MultiSelect, Select, TextInput } from "@mantine/core";
import React from "react";

const OtherServiceForm = ({ form }) => {
  const data = [
    { value: "jobOfferLetteer", label: "Job Offer Letter" },
    { value: "insurance", label: "Insurance" },
    { value: "laborCardFee", label: "labor Card Fee" },
    { value: "entryPermit", label: "Entry Permit" },
    { value: "statusChange", label: "Status Change" },
    { value: "medical", label: "Medical" },
    { value: "emiratesId", label: "Emirates ID" },
    { value: "stamping", label: "Stamping" },
    { value: "towjeeh", label: "Towjeeh" },
    { value: "intialApproval", label: "Intial Approval" },
    { value: "ejari", label: "Ejari" },
    { value: "selfProvided", label: "Self Provided" },
    { value: "offerdServices", label: "Offered Services" },
    { value: "finalSubmission", label: "Final Submission" },
    { value: "voucher", label: "Voucher/DED Fee" },
    { value: "imigrationCard", label: "Imigration Card" },
    { value: "eSignatureCard", label: "E Signature Card" },
    { value: "laborCard", label: "Labor Card" },
    { value: "sponsorFee", label: "Sponsor Fee" },
    { value: "laborUpdate", label: "Labor Update" },
  ];

  return (
    <>
      <Grid>
        <Grid.Col md={6}>
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
            {...form?.getInputProps("license_type")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            form={form}
            mt={"md"}
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
          <MultiSelect
            form={form}
            data={data}
            label="Offered Services"
            placeholder="Select Offered Services"
            size="md"
            {...form?.getInputProps("offered_services")}
          />
        </Grid.Col>
        {form.values.offered_services &&
          form.values.offered_services.map((item) => (
            <React.Fragment key={item}>
              {item == "entryPermit" ? (
                <Grid.Col md={6}>
                  <Select
                    form={form}
                    label={data.find((el) => el.value === item)?.label}
                    placeholder={data.find((el) => el.value === item)?.label}
                    size={"md"}
                    data={[
                      {
                        value: "insideEntryPermit",
                        label: "Inside Entry Permit",
                      },
                      {
                        value: "outsideEntryPermit",
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
                  withAsterisk={true}
                  {...form?.getInputProps(`${item}Amount`)}
                />
              </Grid.Col>
            </React.Fragment>
          ))}
        <Grid.Col>
          <TextInput
            form={form}
            type="number"
            label={"Total Amount"}
            placeholder={"Please Enter Amount"}
            size="md"
            {...form?.getInputProps("total")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            form={form}
            type="number"
            label={"Total Amount"}
            placeholder={"Please Enter Amount"}
            size="md"
            {...form?.getInputProps("total")}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <TextInput
            form={form}
            type="number"
            label={"Discount(If Any)"}
            placeholder={"Please Enter Discount"}
            size="md"
            {...form?.getInputProps("discount")}
          />
        </Grid.Col>
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
            size="md"
            {...form?.getInputProps("grand_total_in_words")}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default OtherServiceForm;
