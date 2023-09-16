import { useTheme } from "@emotion/react";
import {
  AppShell,
  Avatar,
  Box,
  Group,
  Image,
  NavLink,
  Navbar,
  ScrollArea,
  Text,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Man } from "tabler-icons-react";
import { UserContext } from "../../Contexts/UserContext";
import Admin from "../../Portals/Admin/Admin";
import Staff from "../../Portals/Staff/Staff";
import logo_with_text_dark from "../../assets/images/logo_with_text_dark.png";
import { AdminSidebar } from "../SideBars/AdminSideBar";
import { StaffSideBar } from "../SideBars/StaffSideBar";
import { Black, MainBlue, White } from "../../Utils/ThemeColors";

const Appshell = () => {
  const { user, isAdmin } = useContext(UserContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeParent, setActiveParent] = useState(null);
  const [activeChildren, setActiveChildren] = useState(null);
  const [openedNav, setOpenedNav] = useState("");

  const handleParentClick = (item) => {
    if (openedNav === item.label) {
      setOpenedNav(null);
    } else {
      setOpenedNav(item.label);
    }
    setActiveParent(item.label);
    setActiveChildren(null);
  };

  const handleChildClick = (item) => {
    setActiveChildren(item.label);
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors === "dark" ? Black() : White(),
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
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
                {isAdmin
                  ? AdminSidebar.map((item) => (
                      <div key={item.label}>
                        <NavLink
                          my={20}
                          onClick={() => handleParentClick(item)}
                          styles={{
                            root: {
                              ":hover": {
                                backgroundColor: "#0263BD",
                              },
                              color: "white",
                            },
                            icon: {
                              color: "white",
                            },
                          }}
                          bg={
                            activeParent === item.label ||
                            openedNav === item.label
                              ? "#0263BD"
                              : ""
                          }
                          key={item.label}
                          label={item.label}
                          icon={<item.icon color="white" />}
                          childrenOffset={item.Links ? 28 : 0}
                          variant="filled"
                        >
                          {item.Links &&
                            item.Links.map((childItem) => (
                              <NavLink
                                my={5}
                                key={childItem.label}
                                onClick={() => handleChildClick(childItem)}
                                label={childItem.label}
                                icon={<childItem.icon color="white" />}
                                styles={{
                                  root: {
                                    ":hover": {
                                      backgroundColor: "#0263BD",
                                    },
                                    color: "white",
                                  },
                                  icon: {
                                    color: "white",
                                  },
                                }}
                                bg={
                                  activeChildren === childItem.label
                                    ? "#0263BD"
                                    : ""
                                }
                                variant="filled"
                              />
                            ))}
                        </NavLink>
                      </div>
                    ))
                  : StaffSideBar.map((item) => (
                      <NavLink
                        key={item.label}
                        my={20}
                        label={item.label}
                        icon={<item.icon color="white" />}
                        onClick={() => setActiveParent(item.label)}
                        childrenOffset={28}
                        variant="filled"
                        styles={{
                          root: {
                            ":hover": {
                              backgroundColor: "#0263BD",
                            },
                            color: "white",
                          },
                          icon: {
                            color: "white",
                          },
                        }}
                        bg={activeParent === item.label ? "#0263BD" : ""}
                      />
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
      {isAdmin ? <Admin /> : <Staff />}
    </AppShell>
  );
};

export default Appshell;
