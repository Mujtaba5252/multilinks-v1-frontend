import React, { useEffect, useState } from "react";
import PageWrapper from "../../../../../Components/PageWrapper/PageWrapper";
import {
  Button,
  Grid,
  Group,
  Stepper,
  TextInput,
  Text,
  Select,
  Textarea,
  Switch,
  Flex,
  Container,
  Stack,
  Title,
  Image,
} from "@mantine/core";

import { Calendar, Cloud, Percentage, UserCircle } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { MainBlue } from "../../../../../Utils/ThemeColors";
import { useForm } from "@mantine/form";
import { toast } from "react-hot-toast";
import added from "../../../../../assets/images/added.gif";
import { emailRegex } from "../../../../../Components/Regex/Regex";
import {
  axios_get,
  axios_post,
  axios_switch,
} from "../../../../../Utils/Axios";
import { adminRoutes } from "../../../../../routes";
import { useNavigate } from "react-router";
import BasicInformation from "./StepperForms/BasicInformation";
import AdditionalInformation from "./StepperForms/AdditionalInformation";
import CreateLogin from "./StepperForms/CreateLogin";
import {
  uploadMultipleImages,
  uploadSingleFile,
} from "../../../../../Components/FireBase/Firebase";
import { useParams } from "react-router-dom";
import CustomLoader from "../../../../../Components/CustomLoader/CustomLoader";

function AddStaff() {
  const isSmall = useMediaQuery("(max-width: 574px)");
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [emirateID, setEmirateID] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(null);
  const params = useParams();
  const form1 = useForm({
    initialValues: {
      name: "",
      father_name: "",
      personal_email: "",
      designation: "",
      joining_date: null,
      visa_status: "",
      visa_expiry_date: null,
      visa_issuance_date: null,
      salary: null,
      bank_name: "",
      IBAN: "",
      CNIC_NIN: "",
      residence_address: "",
    },
    validate: {
      name: (value) =>
        value.length > 3 ? null : "Name must be 4 characters long",
      father_name: (value) =>
        value.length > 3 ? null : "Father Name must be 4 characters long",
      personal_email: (value) =>
        emailRegex.test(value) ? null : "Invalid Email",
      designation: (value) =>
        value.length > 3 ? null : "Designation must be 4 characters long",
      joining_date: (value) => (value ? null : "Please Select Joining Date"),
      visa_status: (value) => (value ? null : "Please Select VISA Status"),
      visa_expiry_date: (value) =>
        value ? null : "Please Select VISA Expiry Date",
      visa_issuance_date: (value) =>
        value ? null : "Please Select VISA Issuance Date",
      salary: (value) => (value ? null : "Please Enter Salary"),
      bank_name: (value) =>
        value.length > 3 ? null : "Bank Name must be 4 characters long",
      IBAN: (value) =>
        value.length > 3 ? null : "IBAN must be 4 characters long",
      CNIC_NIN: (value) =>
        value.length > 3 ? null : "CNIC must be 4 characters long",
      residence_address: (value) =>
        value.length > 3 ? null : "Residence Address must be 4 characters long",
    },
  });
  const form2 = useForm({
    initialValues: {
      nationality: "",
      passport_number: "",
      has_emirates_ID: null,
      emirates_ID: "",
      emirates_ID_expiry_date: undefined,
      emirates_ID_issuance_date: undefined,
      emergency_contact_name: "",
      emergency_contact_number: "",
      residence_address_in_UAE: "",
      commission_percentage: null,
    },
    validate: {
      nationality: (value) => (value ? null : "Please Enter Nationality"),
      passport_number: (value) =>
        value ? null : "Please Enter Passport Number",
      emirates_ID: (value) =>
        emirateID ? (value ? null : "Please Enter Emirates ID") : null,
      emirates_ID_expiry_date: (value) =>
        emirateID
          ? value
            ? null
            : "Please Select Emirates ID Expiry Date"
          : null,
      emirates_ID_issuance_date: (value) =>
        emirateID
          ? value
            ? null
            : "Please Select Emirates ID Issuance Date"
          : null,
      emergency_contact_name: (value) =>
        value ? null : "Please Enter Emergency Contact Name",
      commission_percentage: (value) =>
        value ? null : "Please Enter Commission Percentage",
      emergency_contact_number: (value) =>
        value ? null : "Please Enter Emergency Contact Number",
      residence_address_in_UAE: (value) =>
        value ? null : "Please Enter Residence Address in UAE",
    },
  });
  const form3 = useForm({
    initialValues: {
      login_email: "",
      login_password: "",
      attachments: [],
    },
    validate: {
      login_email: (value) => (emailRegex.test(value) ? null : "Invalid Email"),
      login_password: (value) =>
        value.length > 7 ? null : "Password must be 8 characters long",
    },
  });

  // const imageUpload = async () => {
  //   console.log(profile);
  //   const profileImage = await uploadSingleFile({
  //     file: profile,
  //     folderName: "staff",
  //   });
  //   console.log(profileImage);
  // };
  const getStaffData = async () => {
    setLoading(true);
    axios_get({ url: `/user/${params.editId}` })
      .then((res) => {
        let data = res.data.data;
        form1.setValues({
          name: data?.name,
          father_name: data?.father_name,
          personal_email: data?.personal_email,
          designation: data?.designation,
          joining_date: new Date(data?.joining_date),
          visa_status: data?.visa_status,
          visa_expiry_date: new Date(data?.visa_expiry_date),
          visa_issuance_date: new Date(data?.visa_issuance_date),
          salary: data?.salary,
          bank_name: data?.bank_name,
          IBAN: data?.IBAN,
          CNIC_NIN: data?.CNIC_NIN,
          residence_address: data?.residence_address,
        });
        form2.setValues({
          nationality: data?.nationality,
          passport_number: data?.passport_number,
          has_emirates_ID: data?.has_emirates_ID,
          emirates_ID: data?.emirates_ID,
          emirates_ID_expiry_date: new Date(data?.emirates_ID_expiry_date),
          emirates_ID_issuance_date: new Date(data?.emirates_ID_issuance_date),
          emergency_contact_name: data?.emergency_contact_name,
          emergency_contact_number: data?.emergency_contact_number,
          residence_address_in_UAE: data?.residence_address_in_UAE,
          commission_percentage: data?.commission_percentage,
        });
        form3.setValues({
          login_email: data?.login_email,
          login_password: data?.login_password,
        });
        setAttachments(data?.attachments || []);
        setShow(data?.profile_picture?.path || {});
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (params.editId) {
      getStaffData();
    }
  }, [params.editId]);

  const addNewStaff = async () => {
    setLoading(true);
    const profileImage = await uploadSingleFile({
      file: profile,
      folderName: "staff",
    });
    const attachments1 = await uploadMultipleImages(attachments, "staff");

    if (form3.validate() && confirmPassword) {
      const value = {
        ...form1.values,
        ...form2.values,
        ...form3.values,
        profile_picture: profileImage,
        attachments: attachments1,
      };
      console.log(value);
      let url;
      if (params.editId) {
        url = `/user/${params.editId}`;
      } else {
        url = "/user";
      }
      await axios_switch(params.editId ? "put" : "post", {
        url: url,
        data: value,
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          nextStep();
          toast.success("Staff Added Successfully");

          setTimeout(() => {
            navigate(adminRoutes.staffView);
          }, 3000);
          setLoading(false);
        } else if (res.status == 400) {
          console.log(res.data);
          toast.error(res.data.message);
          setLoading(false);
        } else {
          toast.error("Something went wrong");
          setLoading(false);
        }
      });
    } else {
      form3.validate();
      confirmPassword
        ? toast.error("Please fill all the fields")
        : toast.error("Password Not Matched");
      setLoading(false);
    }
  };
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const ConfirmPassword = (confirmPassword) => {
    if (confirmPassword == form3.values.login_password) {
      setConfirmPassword(true);
    } else {
      setConfirmPassword(false);
    }
  };
  const checkNull = (activeform) => {
    if (activeform == 0) {
      if (!form1.isValid()) {
        form1.validate();
        toast.error("Please fill all the fields");
      } else {
        nextStep();
      }
    } else if (activeform == 1) {
      if (!form2.isValid()) {
        console.log(form2.validate("nationality"));
        form2.validate();
        toast.error("Please fill all the fields");
      } else {
        console.log(form2.values);
        emirateID
          ? (form2.values.has_emirates_ID = true)
          : (form2.values.has_emirates_ID = false);
        nextStep();
      }
    }
  };
  return (
    <CustomLoader loading={loading}>
      <PageWrapper title="Add Staff">
        <Stepper active={active} onStepClick={setActive} breakpoint>
          <Stepper.Step
            label={isSmall ? "" : <Text size={"sm"}>Basic Information</Text>}
            description={
              isSmall ? "" : <Text size={"xs"}>Staff Basic Information</Text>
            }
          >
            <form>
              <BasicInformation form1={form1} />
            </form>
          </Stepper.Step>
          <Stepper.Step
            label={
              isSmall ? "" : <Text size={"sm"}>Additional Information</Text>
            }
            description={
              isSmall ? (
                ""
              ) : (
                <Text size={"xs"}>Staff Additional Information</Text>
              )
            }
          >
            <form>
              <AdditionalInformation
                form2={form2}
                emirateID={emirateID}
                setEmirateID={setEmirateID}
              />
            </form>
          </Stepper.Step>
          <Stepper.Step
            label={isSmall ? "" : <Text size={"sm"}>Create Login</Text>}
            description={isSmall ? "" : <Text size={"xs"}>Staff Login</Text>}
          >
            <form>
              <CreateLogin
                form3={form3}
                confirmPassword={confirmPassword}
                ConfirmPassword={ConfirmPassword}
                attachments={attachments}
                setAttachments={setAttachments}
                profile={profile}
                setProfile={setProfile}
                show={show}
                setShow={setShow}
              />
            </form>
          </Stepper.Step>
          <Stepper.Completed>
            <Flex justify={"center"}>
              <Image src={added} width={200} height={200} />
            </Flex>
            <Flex justify={"center"}>
              <Text size={"lg"}>
                Staff Added Successfully, Navigating to View Staff
              </Text>
            </Flex>
          </Stepper.Completed>
        </Stepper>

        <Group position="right" mt="xl">
          {/* <Button w={140} variant="default" onClick={imageUpload}>
            IMAGE
          </Button> */}
          {active == 0 ? null : active > 2 ? null : (
            <Button w={140} variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active > 1 ? (
            active == 2 ? (
              <Button w={140} onClick={() => addNewStaff()}>
                Create
              </Button>
            ) : null
          ) : (
            <Button w={140} onClick={() => checkNull(active)}>
              Next step
            </Button>
          )}
        </Group>
      </PageWrapper>
    </CustomLoader>
  );
}

export default AddStaff;
