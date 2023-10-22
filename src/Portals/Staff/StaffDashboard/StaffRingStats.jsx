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
import { CurrencyFormatter } from "../../../Utils/CommonFormatters";

const StaffRingStats = ({ data }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  const icons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
  };

  return (
    <Grid>
      <Grid.Col span={!matches ? 6 : 12}>
        <Grid.Col h={"33.33%"} p={0}>
          <Paper withBorder radius="md" p="xs" bg={"#0487FF"} h={100}>
            <Group position="apart" mt={14}>
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
              </div>
              <Text fw={700} size={30} color="white">
                {data.total_quotations || 0}
              </Text>
            </Group>
          </Paper>
        </Grid.Col>
        <Grid.Col h={"33.33%"} p={0}>
          <Paper withBorder radius="md" p="xs" bg={"#0487FF"} h={100}>
            <Group position="apart" mt={14}>
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
              </div>
              <Text fw={700} size={30} color="white">
                {data.total_approved_quotations || 0}
              </Text>
            </Group>
          </Paper>
        </Grid.Col>
        <Grid.Col h={"33.33%"} p={0}>
          <Paper withBorder radius="md" p="xs" bg={"#0487FF"} h={100}>
            <Group position="apart" mt={14}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  alignContent: "center",
                }}
              >
                <Text
                  color="white"
                  size="md"
                  tt="uppercase"
                  fw={900}
                  align="center"
                >
                  Total Commission
                </Text>
              </div>
              <Text fw={700} size={30} color="white">
                {data.total_commission || 0}
              </Text>
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
                    {data.total_approved_leave_requests || 0}
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
                    {data.total_leave_requests || 0}
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
