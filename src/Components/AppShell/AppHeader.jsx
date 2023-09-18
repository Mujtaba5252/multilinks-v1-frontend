import {
  Avatar,
  Flex,
  Group,
  Image,
  MediaQuery,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import React from "react";
import logo_with_text_light from "../../assets/images/logo_with_text_light.png";
import { useMediaQuery } from "@mantine/hooks";
import { Man, Power } from "tabler-icons-react";
import { routes } from "../../routes";
import { useNavigate } from "react-router-dom";

const AppHeader = ({ user }) => {
  const matches = useMediaQuery("(min-width: 770px)");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate(routes.login);
  };

  return (
    <Flex
      align={"center"}
      justify="space-between"
      h={"100%"}
      px={"1rem"}
      w="100%"
    >
      <Image
        src={logo_with_text_light}
        fit="contain"
        width={"14rem"}
        mx={!matches && "auto"}
        // onClick={() => navigate(routes.home)}
        style={{
          cursor: "pointer",
        }}
      />
      <>
        <Menu
          width={matches && "target"}
          shadow="xl"
          position="bottom-start"
          transition="pop-top-left"
          offset={20}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
        >
          <Menu.Target>
            <UnstyledButton>
              <Group spacing={7} noWrap>
                <MediaQuery
                  query="(max-width: 650px)"
                  styles={{
                    display: "none",
                  }}
                >
                  <Flex direction={"column"} gap="4px" mr={"md"}>
                    <Text
                      weight={400}
                      size="lg"
                      sx={{
                        lineHeight: 1,
                        color: "white",
                      }}
                      mr={3}
                    >
                      {user?.name}
                    </Text>
                    <Text size="xs" color={"rgb(255, 255, 255,0.5)"}>
                      {user?.login_email}
                    </Text>
                  </Flex>
                </MediaQuery>
                <Avatar
                  src={user?.profile_picture ? user?.profile_picture : <Man />}
                  radius="xl"
                  size={40}
                />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {/* <Menu.Item onClick={() => navigate(routes.settings)}></Menu.Item> */}
            <Menu.Item
              color="red"
              onClick={() => {
                logout();
              }}
            >
              <Flex gap={"md"} align="center">
                <Power />
                Logout
              </Flex>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </>
    </Flex>
  );
};

export default AppHeader;
