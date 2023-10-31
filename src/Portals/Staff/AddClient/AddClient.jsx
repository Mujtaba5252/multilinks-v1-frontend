import { Button, Grid, Group, Input, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { CircleCheck, CircleX } from "tabler-icons-react";
import CustomLoader from "../../../Components/CustomLoader/CustomLoader";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import {
  emailRegex,
  nameRegex,
  phoneRegex,
} from "../../../Components/Regex/Regex";
import { UserContext } from "../../../Contexts/UserContext";
import { axios_get, axios_switch } from "../../../Utils/Axios";
import { staffRoutes } from "../../../routes";
import { MIME_TYPES } from "@mantine/dropzone";
import ImagesAndFileUpload from "../../../Components/ImagesAndFileUpload/ImagesAndFileUpload";
import { uploadMultipleImages } from "../../../Components/FireBase/Firebase";
import InputMask  from "react-input-mask";

// import  InputMask from "@react-input/mask";

const AddClient = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);
  const [attachments, setAttachments] = useState([]);

  //form initial values and validation
  const form = useForm({
    initialValues: {
      client_name: "",
      client_nationality: "",
      client_email: "",
      client_contact_number: "",
      client_optional_contact: "",
    },
    validate: {
      client_name: (value) =>
        nameRegex.test(value) && value.length > 3
          ? null
          : "Please Enter Valid Name",
      client_nationality: (value) =>
        nameRegex.test(value) && value.length > 2
          ? null
          : "Please Enter Valid Nationality",
      client_email: (value) =>
        emailRegex.test(value) ? null : "Please Enter Valid Email Address",
      client_contact_number: (value) =>
        phoneRegex.test(value) ? null : "Please Enter Valid Phone Number",
    },
  });

  //for edit data
  const getClientData = async () => {
    setLoader(true);
    axios_get({ url: `/client/${params.editId}` })
      .then((res) => {
        let data = res.data.data;
        form.setValues({
          client_name: data?.client_name,
          client_nationality: data?.client_nationality,
          client_email: data?.client_email,
          client_contact_number: data?.client_contact_number,
          client_optional_contact: data?.client_optional_contact,
        });
        setAttachments(data?.attachments || []);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  useEffect(() => {
    if (params.editId) {
      getClientData();
    }
  }, [params.editId]);

  //handle submit
  const handleSubmit = async (formValues) => {
    setLoader(true);
    const attachments1 = await uploadMultipleImages(attachments, "client");
    const values = {
      ...formValues,

      attachments: attachments1,
    };
    try {
      let url;
      if (params.editId) {
        url = `/client/${params.editId}`;
      } else {
        url = "/client";
      }
      let response = await axios_switch(params.editId ? "put" : "post", {
        url: url,
        data: values,
      });
      if (response.data?.data) {
        if (params.editId) {
          toast.success("Client Updated Successfully");
        } else {
          toast.success("Client Added Successfully");
        }
        navigate(staffRoutes.viewClient);
      } else {
        setLoader(false);
        if (params.editId) {
          toast.error("Error Updating Client");
        } else {
          toast.error("Error Adding Client");
        }
      }
    } catch (error) {
      console.log(error.message);
      setLoader(false);
    }
  };
  return (
    <PageWrapper title={params.editId ? "Update Client" : "ADD CLIENT"}>
      <CustomLoader loading={loader}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Grid>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                label={"Client Name"}
                placeholder="Enter Client Name"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("client_name")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                label={"Client Nationality"}
                placeholder="Enter Client Nationality"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("client_nationality")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                label={"Client Email"}
                placeholder="Enter Client Email"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("client_email")}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                component={InputMask}
                mask={"+\\9\\71999999999"}
                label={"Client Contact Number"}
                placeholder="Enter Client Contact Number"
                size="md"
                withAsterisk={true}
                {...form?.getInputProps("client_contact_number")}
              />
            </Grid.Col>
            <Grid.Col md={12}>
              <TextInput
                form={form}
                mt={"md"}
                mb={"md"}
                component={InputMask}
                mask={"+\\9\\71999999999"}
                label={"Client Optional Contact Number"}
                placeholder="Enter Client Contact No."
                size="md"
                {...form?.getInputProps("client_optional_contact")}
              />
            </Grid.Col>
          </Grid>
          <Input.Wrapper>
            <ImagesAndFileUpload
              allMedia={attachments}
              setAllMedia={setAttachments}
              format={[MIME_TYPES.pdf]}
              type="document"
              cols={4}
              multiple={true}
              title="Attachments"
            />
          </Input.Wrapper>
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

export default AddClient;
