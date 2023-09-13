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
import { Black, DarkBlue, MainBlue, White } from "../../Utils/ThemeColors";
import logo_with_text_dark from "../../assets/images/logo_with_text_dark.png";
import { AdminSidebar } from "../SideBars/AdminSideBar";
import { StaffSideBar } from "../SideBars/StaffSideBar";

const Appshell = () => {
  const { user, userType, isAdmin, isStaff } = useContext(UserContext);
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeParent, setActiveParent] = useState(null);
  const [activeChildren, setActiveChildren] = useState(null);

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
            <Image // for logo section in navbar
              src={logo_with_text_dark}
              width={"100%"}
              height={"auto"}
              p={10}
            />
          </Navbar.Section>
          {/*For side bar items*/}
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt={10}>
            <Box py="xs">
              <Text size="xl" weight={700}>
                {isAdmin
                  ? AdminSidebar.map((item) => (
                      <div key={item.order}>
                        <NavLink //for single link
                          my={20}
                          key={item.label}
                          active={item.order === activeParent}
                          label={item.label}
                          icon={item.icon}
                          onClick={() => setActiveParent(item.order)}
                          childrenOffset={item.Links ? 28 : 0}
                          variant="filled"
                        >
                          {item.Links != undefined
                            ? item.Links.map((item) => (
                                <NavLink //for nested links
                                  my={5}
                                  key={item.label}
                                  active={item.order === activeChildren}
                                  label={item.label}
                                  icon={item.icon}
                                  onClick={() => setActiveChildren(item.order)}
                                  variant="filled"
                                ></NavLink>
                              ))
                            : null}
                        </NavLink>
                      </div>
                    ))
                  : StaffSideBar.map((item) => (
                      <NavLink //incase of staff there is no nested links thats why no nested links code is applicabale here
                        key={item.label}
                        active={index === active}
                        label={item.label}
                        icon={item.icon}
                        onClick={() => setActive(index)}
                        childrenOffset={28}
                        color={MainBlue()}
                        variant="filled"
                      ></NavLink>
                    ))}
              </Text>
            </Box>
          </Navbar.Section>
          {/*FOr profile section below*/}

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
