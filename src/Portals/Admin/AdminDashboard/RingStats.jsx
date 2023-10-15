import {
  Badge,
  Center,
  Grid,
  Group,
  Paper,
  RingProgress,
  SimpleGrid,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { ArrowDownRight, ArrowUpRight } from "tabler-icons-react";

const RingStats = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const icons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
  };

  return (
    <Grid>
      <Grid.Col span={!matches ? 5 : 12}>
        <Grid.Col h={"33.33%"} p={0}>
          <Paper withBorder radius="md" p="xs" bg={"#0487FF"}>
            <Group position="apart">
              <div>
                <Text
                  color="white"
                  size="md"
                  tt="uppercase"
                  fw={900}
                  align="center"
                >
                  Total Received
                </Text>
                <Badge
                  fw={700}
                  size="xl"
                  variant="filled"
                  color="orange"
                  align="center"
                >
                  AED 1009999
                </Badge>
              </div>
              <RingProgress
                size={90}
                roundCaps
                color="white"
                thickness={7}
                sections={[{ value: 100, color: "orange" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    100%
                  </Center>
                }
              />
            </Group>
          </Paper>
        </Grid.Col>
        <Grid.Col h={"33.33%"} p={0}>
          <Paper withBorder radius="md" p="xs" bg={"#0487FF"}>
            <Group position="apart">
              <div>
                <Text
                  color="white"
                  size="md"
                  tt="uppercase"
                  fw={900}
                  align="center"
                >
                  Total Pending
                </Text>
                <Badge
                  fw={700}
                  size="xl"
                  color="green"
                  align="center"
                  variant="filled"
                >
                  AED 1009999
                </Badge>
              </div>
              <RingProgress
                size={90}
                roundCaps
                color="white"
                thickness={7}
                sections={[{ value: 100, color: "green" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    100%
                  </Center>
                }
              />
            </Group>
          </Paper>
        </Grid.Col>
        <Grid.Col h={"33.33%"} p={0}>
          <Paper withBorder radius="md" p="xs" bg={"#0487FF"}>
            <Group position="apart">
              <div>
                <Text
                  color="white"
                  size="md"
                  tt="uppercase"
                  fw={900}
                  align="center"
                >
                  Total Client Expense
                </Text>
                <Badge fw={700} size="xl" color="white" align="center">
                  AED 1009999
                </Badge>
              </div>
              <RingProgress
                size={90}
                roundCaps
                color="white"
                thickness={7}
                sections={[{ value: 100, color: "white" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    100%
                  </Center>
                }
              />
            </Group>
          </Paper>
        </Grid.Col>
      </Grid.Col>
      <Grid.Col span={!matches ? 3 : 6}>
        <Grid.Col h={"50%"} p={0}>
          <Paper
            withBorder
            radius="md"
            p="xs"
            py={5}
            style={{
              width: "100%",
              height: "100%",
            }}
            bg={"#0487FF"}
          >
            <Stack align="center" spacing={0}>
              <div>
                <Text
                  c="white"
                  size="md"
                  tt="uppercase"
                  fw={700}
                  align="center"
                >
                  Total Commission
                </Text>
                <Badge
                  fw={700}
                  size="md"
                  variant="filled"
                  color="red"
                  align="center"
                  fullWidth
                >
                  AED 100
                </Badge>
              </div>
              <RingProgress
                size={100}
                roundCaps
                thickness={10}
                sections={[{ value: 100, color: "red" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    91%
                  </Center>
                }
              />
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col h={"50%"} p={0}>
          <Paper
            withBorder
            radius="md"
            p="xs"
            style={{
              width: "100%",
              height: "100%",
            }}
            bg={"#0487FF"}
          >
            <Stack align="center" spacing={0}>
              <div>
                <Text
                  c="white"
                  size="md"
                  tt="uppercase"
                  fw={700}
                  align="center"
                >
                  Total Office Expense
                </Text>
                <Badge
                  fw={700}
                  size="md"
                  variant="filled"
                  color="yellow"
                  align="center"
                  fullWidth
                >
                  AED 100
                </Badge>
              </div>
              <RingProgress
                size={100}
                roundCaps
                thickness={10}
                sections={[{ value: 100, color: "yellow" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    91%
                  </Center>
                }
              />
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid.Col>
      <Grid.Col span={!matches ? 4 : 6}>
        {" "}
        <Paper
          withBorder
          radius="md"
          p="xs"
          style={{
            width: "100%",
            height: "100%",
          }}
          bg={"#0487FF"}
        >
          <Stack align="center" spacing={0}>
            <div>
              <Text c="white" size={30} tt="uppercase" fw={700} align="center">
                Total Profit
              </Text>
              <Badge
                fw={700}
                size="lg"
                variant="filled"
                color="green"
                align="center"
                fullWidth
              >
                AED 100
              </Badge>
            </div>
            <RingProgress
              size={190}
              roundCaps
              thickness={20}
              sections={[{ value: 100, color: "green" }]}
              label={
                <Center
                  style={{
                    color: "white",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                  }}
                >
                  91%
                </Center>
              }
            />
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default RingStats;
