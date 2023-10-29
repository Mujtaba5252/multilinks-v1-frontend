import { Group, Image, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import persons from "../../../assets/svgs/persons.svg";
import { CurrencyDirham, CurrencyDollar, FileDollar } from "tabler-icons-react";
import { CurrencyFormatter } from "../../../Utils/CommonFormatters";

const StaffCardStats = ({ data }) => {
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
      <Paper withBorder radius="md" bg={"#0487FF"} h={"100%"}>
        <Group position="apart" ml={10} mr={10}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={persons}
              style={{
                width: matches ? 50 : 100,
                height: matches ? 50 : 100,
              }}
              color="yellow"
            />
            <Stack spacing={0} direction="column" align="center" ml={20}>
              <Text
                fw={700}
                size={matches ? "md" : "xl"}
                color="yellow"
                align="left"
              >
                Total Clients
              </Text>
              <Text color="yellow" size="xs" tt="uppercase" fw={700}>
                No Of clients Person
              </Text>
            </Stack>
          </div>
          <Group position="right">
            <Text fw={700} size={matches ? 30 : 50} color="yellow">
              {data.total_clients || 0}
            </Text>
          </Group>
        </Group>
      </Paper>
      <Paper withBorder radius="md" pb="xs" bg={"#0487FF"} h={"100%"}>
        <Group noWrap position="apart" mt={10}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <FileDollar size={matches ? 50 : 80} color="white" />

            <Stack spacing={0}>
              <Text fw={700} size={matches ? "md" : "xl"} color="white">
                Payment Received
              </Text>
              <Text color="white" size="xs" tt="uppercase" fw={700}>
                No Of Payment Received
              </Text>
            </Stack>
          </div>
          <div>
            <Text fw={700} size={matches ? 12 : 25} color="white">
              {CurrencyFormatter(data.total_payments_received || 0)}
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
