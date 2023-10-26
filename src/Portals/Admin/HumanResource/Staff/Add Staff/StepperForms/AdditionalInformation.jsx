import React from "react";
import { Grid, Group, TextInput, Textarea, Text, Switch } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Calendar, Percentage } from "tabler-icons-react";
import { LightGrey, MainBlue } from "../../../../../../Utils/ThemeColors";
import InputMask from "react-input-mask";

function AdditionalInformation({ form2, emirateID, setEmirateID }) {
  return (
    <Grid>
      <Grid.Col lg={4} md={6} sm={12}>
        <TextInput
          form={form2}
          component={InputMask}
          mask={"999-9999-9999999-9"}
          withAsterisk={emirateID}
          disabled={!emirateID}
          {...form2?.getInputProps("emirates_ID")}
          label={
            <Group display={"inline-flex"}>
              <Text>ID Number</Text>
              <Switch
                display={"block"}
                form={form2}
                {...form2?.getInputProps("has_emirates_ID")}
                checked={emirateID}
                onChange={() => {
                  setEmirateID(!emirateID);
                  form2?.setFieldValue("emirates_ID", "");
                  form2?.setFieldValue("emirates_ID_issuance_date", null);
                  form2?.setFieldValue("emirates_ID_expiry_date", null);
                }}
              />
            </Group>
          }
          placeholder="Enter ID Number"
        />
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={12}>
        <DatePickerInput
          form={form2}
          withAsterisk={emirateID}
          disabled={!emirateID}
          {...form2?.getInputProps("emirates_ID_issuance_date")}
          rightSection={
            <Calendar color={emirateID ? MainBlue() : LightGrey()} />
          }
          size="xs"
          label={
            <Text display={"inline"} size={"sm"}>
              ID Issueance Date
            </Text>
          }
          placeholder="Enter ID Issueance Date"
        />
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={12}>
        <DatePickerInput
          form={form2}
          withAsterisk={emirateID}
          disabled={!emirateID}
          {...form2?.getInputProps("emirates_ID_expiry_date")}
          rightSection={
            <Calendar color={emirateID ? MainBlue() : LightGrey()} />
          }
          size="xs"
          label={
            <Text display={"inline"} size={"sm"}>
              ID Expiry Date
            </Text>
          }
          placeholder="Enter ID Expiry Date"
        />
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={12}>
        <TextInput
          form={form2}
          withAsterisk
          {...form2?.getInputProps("nationality")}
          label="Nationality"
          placeholder="Enter Nationality"
        />
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={12}>
        <TextInput
          form={form2}
          withAsterisk
          {...form2?.getInputProps("passport_number")}
          label="Passport No"
          placeholder="Enter Passport No"
        />
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={12}>
        <TextInput
          form={form2}
          withAsterisk
          {...form2?.getInputProps("commission_percentage")}
          type="number"
          rightSection={<Percentage color={MainBlue()} />}
          label="Commission Percentage"
          placeholder="Commission Percentage"
        />
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={12}>
        <TextInput
          form={form2}
          withAsterisk
          {...form2?.getInputProps("emergency_contact_name")}
          label="Emergency Contact Name"
          placeholder="Enter Emergency Contact Name"
        />
      </Grid.Col>
      <Grid.Col lg={4} md={6} sm={12}>
        <TextInput
          form={form2}
          withAsterisk
          component={InputMask}
          mask={"+\\9\\71999999999"}
          {...form2?.getInputProps("emergency_contact_number")}
          label="Emergency Contact Number"
          placeholder="Emergency Contact Number"
        />
      </Grid.Col>
      <Grid.Col lg={12} md={12} sm={12}>
        <Textarea
          form={form2}
          withAsterisk
          {...form2?.getInputProps("residence_address_in_UAE")}
          label="Residence Address (UAE)"
          placeholder="Enter Residence Address (UAE)"
        />
      </Grid.Col>
    </Grid>
  );
}

export default AdditionalInformation;
