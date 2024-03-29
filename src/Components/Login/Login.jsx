import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Input,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
  Loader,
  PasswordInput,
} from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import fileImage from "../../assets/images/file.png";
import logo from "../../assets/images/logo.png";
import { MainBlue, Black, White, DarkBlue } from "../../Utils/ThemeColors";
import logoWithText from "../../assets/images/logo_with_text_dark.png";
import { useMediaQuery } from "@mantine/hooks";
import { UserContext } from "../../Contexts/UserContext";
import { useForm } from "@mantine/form";
import { adminRoutes, routes, staffRoutes } from "../../routes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../Utils/Constants";
import { toast } from "react-hot-toast";
import { Role, Token } from "../../Utils/UserDetails";
const Login = () => {
  const isSmall = useMediaQuery("(max-width: 992px)");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setUser, setUserType, setIsAdmin, setIsStaff } =
    useContext(UserContext);
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (value ? null : "Invalid Email"),
      // password: (value) =>
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,100}$/.test(
      //     value
      //   )
      //     ? null
      //     : "Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character",
    },
  });

  const handleSubmit = async (values) => {
    setLoader(true);
    let url = backendUrl + routes.login;
    try {
      await axios
        .post(url, {
          login_email: values.email,
          login_password: values.password,
        })
        .then((response) => {
          if (response.status === 200) {
            const userType = response.data.data.isAdmin;
            setIsAdmin(userType === true);
            setIsStaff(userType === false);
            setUser(response.data.data);
            setUserType(response.data.data.isAdmin ? "admin" : "staff");
            localStorage.setItem("user", JSON.stringify(response.data.data));
            switch (userType) {
              case true:
                navigate(adminRoutes.adminDashboard, { replace: true });
                toast.success("Login Successful");
                break;
              case false:
                navigate(staffRoutes.staffDashboard, { replace: true });
                toast.success("Login Successful");
                break;
              default:
                navigate(routes.login, { replace: true });
                toast.error("Invalid Credentials");
            }
          }
          if (response.status === 400) {
            toast.error("something went wrong");
          }
          setLoader(false);
        });
    } catch (err) {
      toast.error("Invalid Credentials");
      setLoader(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(form.values);
    }
  };
  useEffect(() => {
    const token = Token();
    const role = Role();
    if (token) {
      switch (role) {
        case true:
          navigate("/admin/dashboard");
          break;
        case false:
          navigate("/staff/dashboard");
          break;
        default:
          navigate("/login");
          break;
      }
    }
  }, []);
  return (
    <>
      <Grid
        style={{
          position: "fixed",
          overflow: "hidden",
          width: isSmall?"102.5vw":"101vw",
          height: "101.1vh",
          backgroundColor: MainBlue(),
        }}
      >
        {!isSmall && (
          <Grid.Col md={6}>
            <Grid>
              <Grid.Col span={12}>
                <Image mt={20} ml={10} src={logo} style={{ width: "200px" }} />
              </Grid.Col>
              <Grid.Col span={12}>
                <Center mt={30}>
                  <Stack spacing={0}>
                    <Title color={White()} size="64px" fw={900}>
                      MULTILINKS
                    </Title>
                    <Text color={White()} size="25px" fw={300}>
                      Links to Success
                    </Text>
                  </Stack>
                </Center>
              </Grid.Col>
              <Grid.Col span={12} p={0}>
                <Container
                  p={0}
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    zIndex: "1",
                  }}
                >
                  <Image src={fileImage} style={{ width: "30rem" }} />
                </Container>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        )}
        <Grid.Col md={6}>
          <Center p={0} style={{ height: "100%" }}>
            <Box
              p={0}
              bg={White()}
              style={{
                width: isSmall ? "90%" : "70%",
                borderRadius: "20px",
                boxShadow: "1px 1px 20px 2px #696969 ",
              }}
            >
              <Container p={40} mt={!isSmall ? 20 : 0} mb={!isSmall ? 20 : 0}>
                {!isSmall ? (
                  <Title
                    order={1}
                    align="left"
                    color={MainBlue()}
                    fw={900}
                    size={isSmall ? "40px" : "64px"}
                  >
                    LOGIN
                  </Title>
                ) : (
                  <Center mb={30}>
                    <Image src={logoWithText} style={{ width: "300px" }} />
                  </Center>
                )}
                <form
                  onSubmit={form.onSubmit((values) => handleSubmit(values))}
                >
                  <TextInput
                    form={form}
                    mt={"md"}
                    mb={"md"}
                    label={"Email"}
                    size="lg"
                    placeholder="Enter Email"
                    withAsterisk={true}
                    {...form?.getInputProps("email")}
                    onKeyDown={handleKeyDown}
                  />
                  <PasswordInput
                    form={form}
                    mt={"md"}
                    mb={"md"}
                    size="lg"
                    label={"Password"}
                    withAsterisk
                    placeholder="Enter Password"
                    {...form?.getInputProps("password")}
                    onKeyDown={handleKeyDown}
                  />
                  <Center>
                    <Button
                      type="submit"
                      mt={"md"}
                      mb={"md"}
                      size="lg"
                      fullWidth
                    >
                      {loader ? <Loader color={"white"} /> : "LOGIN"}
                    </Button>
                  </Center>
                </form>
              </Container>
            </Box>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Login;
