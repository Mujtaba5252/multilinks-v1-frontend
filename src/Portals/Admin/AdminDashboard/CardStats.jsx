import {
  Badge,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import persons from "../../../assets/svgs/persons.svg";

const CardStats = ({ data }) => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <SimpleGrid
      cols={2}
      style={{
        gap: matches ? "2px" : "10px",
      }}
      mb={20}
      breakpoints={[
        { maxWidth: 768, cols: 1 },
        { maxWidth: 1200, cols: 2 },
        { maxWidth: 1500, cols: 2 },
      ]}
    >
      <Paper withBorder radius="md" pb="xs" bg={"#0487FF"} h={"100%"}>
        <Group ml={30} mt={10} noWrap>
          <Image
            src={persons}
            style={{
              width: matches ? 50 : 100,
              height: matches ? 50 : 100,
            }}
            color="white"
          />
          <div>
            <Text fw={700} size={matches ? "md" : "xl"} color="white">
              Total Staff
            </Text>
            <Text color="white" size="xs" tt="uppercase" fw={700}>
              No Of staff Person
            </Text>
          </div>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text fw={700} size={matches ? 30 : 50} color="white">
              {data?.total_staff || 0}
            </Text>
          </div>
        </Group>
      </Paper>
      <Stack spacing={0}>
        <Paper withBorder radius="md" p="xs" bg={"#0487FF"} mb={2} h={"50%"}>
          <Group ml={30}>
            <Image
              src={persons}
              style={{
                width: 50,
                height: 50,
              }}
              color="white"
            />
            <div>
              <Text fw={700} size={"md"} color="white">
                CLIENTS
              </Text>
              <Badge
                color="yellow"
                size="xs"
                variant="filled"
                tt="uppercase"
                fw={700}
              >
                Active Clients
              </Badge>
            </div>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text fw={700} size={30} color="white">
                {data.active_clients || 0}
              </Text>
            </div>
          </Group>
        </Paper>
        <Paper withBorder radius="md" p="xs" bg={"#0487FF"} h={"50%"}>
          <Group ml={30}>
            <Image
              src={persons}
              style={{
                width: 50,
                height: 50,
              }}
              color="white"
            />
            <div>
              <Text fw={700} size={"md"} color="white">
                CLIENTS
              </Text>
              <Badge
                color="green"
                variant="filled"
                size="xs"
                tt="uppercase"
                fw={700}
              >
                Completed Clients
              </Badge>
            </div>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text fw={700} size={30} color="white">
                {data.completed_clients || 0}
              </Text>
            </div>
          </Group>
        </Paper>
      </Stack>
    </SimpleGrid>
  );
};

export default CardStats;
