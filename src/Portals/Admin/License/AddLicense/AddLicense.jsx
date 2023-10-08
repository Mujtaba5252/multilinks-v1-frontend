import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../Components/PageWrapper/PageWrapper";
import CustomLoader from "../../../../Components/CustomLoader/CustomLoader";
import { useForm } from "@mantine/form";
import { Button, Grid, Group, TextInput } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { DatePickerInput } from "@mantine/dates";
import { CircleCheck, CircleX } from "tabler-icons-react";
import { axios_get, axios_post, axios_switch } from "../../../../Utils/Axios";
import { adminRoutes } from "../../../../routes";
import toast from "react-hot-toast";

const AddLicense = () => {
  const [Loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      license_activity: "",
      license_type: "",
      trade_name: "",
      issue_date: null,
      expiry_date: null,
      name_of_local_sponsor: "",
    },
    validate: {
      license_activity: (value) =>
        value ? null : "Please Enter License Acitivity",
      license_type: (value) => (value ? null : "Please Enter License Type"),
      trade_name: (value) => (value ? null : "Please Enter Trade Name"),
      issue_date: (value) => (value ? null : "Please Enter Issue Date"),
      expiry_date: (value) => (value ? null : "Please Enter Expiry Date"),
      name_of_local_sponsor: (value) =>
        value ? null : "Please Enter Local Person Name",
    },
  });
  const getLicenseData = async () => {
    setLoading(true);
    axios_get({ url: `/license/${params.editId}` })
      .then((res) => {
        let data = res.data.data;
        form.setValues({
          license_activity: data?.license_activity,
          license_type: data?.license_type,
          trade_name: data?.trade_name,
          issue_date: new Date(data?.issue_date),
          expiry_date: new Date(data?.expiry_date),
          name_of_local_sponsor: data?.name_of_local_sponsor,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (params.editId) {
      getLicenseData();
    }
  }, []);

  const handleSubmit = async (formValues) => {
    setLoading(true);
    const values = { ...formValues };
    try {
      let url;
      if (params.editId) {
        url = `/license/${params.editId}`;
      } else {
        url = "/license";
      }
      let response = await axios_switch(params.editId ? "put" : "post", {
        url: url,
        data: values,
      });
      if (response.data?.data) {
        if (params.editId) {
          toast.success("License Updated Successfully");
        } else {
          toast.success("License Added Successfully");
        }
        navigate(adminRoutes.viewLicenses);
      } else {
        setLoading(false);
        if (params.editId) {
          toast.error("Error Updating License");
        } else {
          toast.error("Error Adding License");
        }
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  return (
    <PageWrapper title={params.editId ? "UPDATE LICENSE" : "ADD LICENSE"}>
      <CustomLoader loading={Loading}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          {" "}
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                label={"License Acitivity"}
                placeholder="Enter License Acitivity"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("license_activity")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                label={"License Type"}
                placeholder="Enter License Type"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("license_type")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                label={"Trade Name"}
                placeholder="Enter Trade Name"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("trade_name")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <DatePickerInput
                form={form}
                mt={"md"}
                mb={"md"}
                size={"sm"}
                label="Issue Date"
                withAsterisk
                placeholder="Select Issue Date"
                {...form?.getInputProps("issue_date")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <DatePickerInput
                form={form}
                mt={"md"}
                mb={"md"}
                size={"sm"}
                label="Expiry  Date"
                withAsterisk
                placeholder="Select Expiry Date"
                {...form?.getInputProps("expiry_date")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                label={"Local Person Name"}
                placeholder="Enter Local Person Name"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("name_of_local_sponsor")}
              />
            </Grid.Col>
          </Grid>
          <Group position="right">
            <Button
              mt={"md"}
              mb={"md"}
              variant="outline"
              onClick={() => {
                navigate(-1);
              }}
              leftIcon={<CircleX color="red" />}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              mt={"md"}
              mb={"md"}
              leftIcon={<CircleCheck color="white" />}
            >
              {params.edit ? "Update" : "Submit"}
            </Button>
          </Group>
        </form>
      </CustomLoader>
    </PageWrapper>
  );
};

export default AddLicense;
