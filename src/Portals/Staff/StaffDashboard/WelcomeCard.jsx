import { Avatar, Group, Image, Paper, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import { User } from "../../../Utils/UserDetails";
import logo_with_text_light from "../../../assets/images/logo_with_text_light.png";

const WelcomeCard = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const user = User();
  return (
    <Paper withBorder radius="md" pb="xs" bg={"#0487FF"} h={"200px"} mb={10} >
      <Group ml={30} mr={30} mt={10} noWrap position="apart">
        <div
        // style={{
        //   alignItems: "center",
        //   justifyContent: "center",
        //   display: "flex",
        //   flexDirection: "column",
        // }}
        >
          <Text fw={700} size={50} color="white" tt="uppercase">
            Welcome {user.name}
          </Text>
          <Image
            src={logo_with_text_light}
            style={{
              width: 300,
              height: "auto",
            }}
          />
        </div>
        <Avatar src={user.profile_picture.path} size={150} radius="xl" />
      </Group>
    </Paper>
  );
};

export default WelcomeCard;
