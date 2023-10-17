import { Group, Image, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import persons from "../../../assets/svgs/persons.svg";

const StaffCardStats = () => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <SimpleGrid
      cols={3}
      style={{
        gap: matches ? "2px" : "10px",
      }}
      mb={20}
      breakpoints={[
        { maxWidth: 768, cols: 1 },
        { maxWidth: 1200, cols: 3 },
        { maxWidth: 1500, cols: 3 },
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
              10
            </Text>
          </div>
        </Group>
      </Paper>
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
              10
            </Text>
          </div>
        </Group>
      </Paper>
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
              10
            </Text>
          </div>
        </Group>
      </Paper>
      {/* <Stack spacing={0}>
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
              <Text fw={700} size={30} color="white">
                10
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
              <Text fw={700} size={30} color="white">
                10
              </Text>
            </div>
          </Group>
        </Paper>
      </Stack> */}
    </SimpleGrid>
  );
};

export default StaffCardStats;