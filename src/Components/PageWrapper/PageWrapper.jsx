import { Container, Paper, Text, useMantineTheme } from "@mantine/core";
import React from "react";

const PageWrapper = ({ children, title }) => {
  const theme = useMantineTheme();
  return (
    <Container fluid mx={0} p={0}>
      <Paper
        style={{
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[0],

          height: "100%",
          width: "100%",
        }}
        py="xs"
        // radius={radius}
        shadow="sm"
      >
        <Text size={25} weight={"bold"} mb={0} ml="sm" align={"center"}>
          {title}
        </Text>

        <Paper p="xs" m="xs" radius="md" withBorder>
          {children}
        </Paper>
      </Paper>
    </Container>
  );
};

export default PageWrapper;
