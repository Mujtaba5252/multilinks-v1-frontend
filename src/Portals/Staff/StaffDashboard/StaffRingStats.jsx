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
import { ArrowDownRight, ArrowUpRight, DoorExit } from "tabler-icons-react";

const StaffRingStats = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  const icons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
  };

  return (
    <Grid>
      <Grid.Col span={!matches ? 6 : 12}>
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
                  Total Quotations
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
                  Approved Quotations
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
                  Total Commission
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
      <Grid.Col span={!matches ? 6 : 12}>
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
                  size={30}
                  tt="uppercase"
                  fw={700}
                  align="center"
                >
                  Leaves Requested
                </Text>
                <Group position="center">
                  <DoorExit size={30} color="white" />
                  <Text
                    c="white"
                    size={30}
                    tt="uppercase"
                    fw={700}
                    align="center"
                  >
                    10
                  </Text>
                </Group>
              </div>
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
                  size={30}
                  tt="uppercase"
                  fw={700}
                  align="center"
                >
                  Leaves Approved
                </Text>
                <Group position="center">
                  <DoorExit size={30} color="white" />
                  <Text
                    c="white"
                    size={30}
                    tt="uppercase"
                    fw={700}
                    align="center"
                  >
                    10
                  </Text>
                </Group>
              </div>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid.Col>
    </Grid>
  );
};

export default StaffRingStats;
