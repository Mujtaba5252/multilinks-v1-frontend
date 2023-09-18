import { useTheme } from "@emotion/react";
import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Group,
  Header,
  Image,
  MediaQuery,
  NavLink,
  Navbar,
  ScrollArea,
  Text,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ChevronRight, Man } from "tabler-icons-react";
import { UserContext } from "../../Contexts/UserContext";
import { Black, MainBlue, White } from "../../Utils/ThemeColors";
import logo_with_text_light from "../../assets/images/logo_with_text_light.png";
import { AdminSidebar } from "../SideBars/AdminSideBar";
import { StaffSideBar } from "../SideBars/StaffSideBar";
import "./Link.css";
import { useMediaQuery } from "@mantine/hooks";
import AppHeader from "./AppHeader";

const Appshell = () => {
  const { user, isAdmin } = useContext(UserContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeParent, setActiveParent] = useState(null);
  const [activeChildren, setActiveChildren] = useState(null);
  const [openedNav, setOpenedNav] = useState("");
  const [opened, setOpened] = useState(false);

  const handleParentClick = (item) => {
    if (openedNav === item.label) {
      setOpenedNav(null);
      navigate(item.Link);
    } else {
      navigate(item.Link);
      setOpenedNav(item.label);
    }
    setActiveParent(item.label);
    setActiveChildren(null);
  };

  const handleChildClick = (item) => {
    navigate(item.Link);
    setActiveChildren(item.label);
  };

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors === "dark" ? Black() : White(),
        },
      }}
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      header={
        <Header height={{ base: 60, md: 60 }} p="md" bg={MainBlue()}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery
              // query="max-width: 600px"
              largerThan="md"
              styles={{ display: "none" }}
            >
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={White()}
                mr="xl"
              />
            </MediaQuery>
            <AppHeader user={user} />
          </div>
        </Header>
      }
      navbar={
        <Navbar
          height={"auto"}
          p="xs"
          width={{ base: 300 }}
          hidden={!opened}
          styles={{
            root: {
              background:
                theme.colors === "dark"
                  ? theme.colors.basicBlues[0]
                  : theme.colors.basicBlues[0],
            },
          }}
        >
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
                            <NavLink //for nested children
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
                    <NavLink //for staff side bar
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
          {/* <Navbar.Section //for user profile below the side bar
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
          </Navbar.Section> */}
        </Navbar>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default Appshell;
