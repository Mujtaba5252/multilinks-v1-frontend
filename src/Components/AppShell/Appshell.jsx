import { useTheme } from "@emotion/react";
import {
  AppShell,
  Avatar,
  Box,
  Group,
  Image,
  Navbar,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import { ChevronRight, Man } from "tabler-icons-react";
import { UserContext } from "../../Contexts/UserContext";
import Admin from "../../Portals/Admin/Admin";
import Staff from "../../Portals/Staff/Staff";
import logo_with_text_dark from "../../assets/images/logo_with_text_dark.png";
import { AdminSidebar } from "../SideBars/AdminSideBar";
import { StaffSideBar } from "../SideBars/StaffSideBar";
import { useNavigate } from "react-router-dom";
import "./Link.css";

const Appshell = () => {
  const { user, userType, isAdmin, isStaff } = useContext(UserContext);
  console.log("user", user);
  const theme = useTheme();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colors === "dark"
              ? theme.colors.basicBlues[0]
              : theme.colors.basicBlues[1],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar //Navbar
          height={"100%"}
          p="xs"
          width={{ base: 300 }}
          styles={{
            root: {
              background:
                theme.colors === "dark"
                  ? theme.colors.basicBlues[0]
                  : theme.colors.basicBlues[0],
            },
          }}
        >
          <Navbar.Section mt="xs">
            <Image
              src={logo_with_text_dark}
              width={"100%"}
              height={"auto"}
              p={10}
            />
          </Navbar.Section>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt={10}>
            <Box py="xs">
              <Text size="xl" weight={700}>
                {isAdmin?AdminSidebar.map((item) => (
                  <UnstyledButton //this is for the links in the sidebar
                    className="isActive"
                    style={{
                      display: "block",
                      width: "100%",
                      borderRadius: "1px",
                      padding: "0.5rem",
                      marginBottom: "10px",
                    }}
                    onClick={() => {
                      
                    }}
                  >
                    <Group>
                      <ThemeIcon size={"lg"}>{item.icon}</ThemeIcon>

                      <Text size="md" fw={100} color="white">
                        {item.label}
                      </Text>
                    </Group>
                  </UnstyledButton>
                )):StaffSideBar.map((item) => (
                  <UnstyledButton //this is for the links in the sidebar
                    className="isActive"
                    style={{
                      display: "block",
                      width: "100%",
                      borderRadius: "1px",
                      padding: "0.5rem",
                      marginBottom: "10px",
                    }}
                    onClick={() => {
                      setIsActive(!isActive);
                      setOpened(!opened);
                      navigate(item.path);
                    }}
                  >
                    <Group>
                      <ThemeIcon size={"lg"}>{item.icon}</ThemeIcon>

                      <Text size="md" fw={100} color="white">
                        {item.label}
                      </Text>
                    </Group>
                  </UnstyledButton>
                ))}
              </Text>
            </Box>
          </Navbar.Section>
          <Navbar.Section
            style={{
              borderTop: "1px solid #fff",
            }}
          >
            <Group position="apart">
              <Avatar mt={10} size="lg" radius="xl" src={<Man />} />
              <Box
                style={{
                  flex: 1,
                }}
              >
                <Text size={"sm"} color="white" weight={"bold"}>
                  {user?.name}
                </Text>
                <Text size={"xs"} color="white">
                  {user?.login_email}
                </Text>
              </Box>
              <ChevronRight color="white" />
            </Group>
          </Navbar.Section>
        </Navbar>
      }
    >
      {/* <Navbar.Section>Logo</Navbar.Section> */}
      {isAdmin ? <Admin /> : <Staff />}
    </AppShell>
  );
};

export default Appshell;
