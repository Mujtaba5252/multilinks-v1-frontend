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
import { CurrencyFormatter } from "../../../Utils/CommonFormatters";

const RingStats = ({ data }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  const icons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
  };

  const received = data.total_revenue - data.total_pending_revenue;
  const totalReceived =
    (received / data.total_revenue) * data.total_revenue || 0;

  const totalPending =
    (data.total_pending_revenue / data.total_revenue) * 100 || 0;
  const totalClientExpesne =
    (data.total_client_expense / data.total_revenue) * 100 || 0;

  const totalCommssion =
    (data.total_commission_to_be_paid / data.total_revenue) * 100 || 0;

  const totalOfficeExpense =
    (data.total_office_expense / data.total_revenue) * 100 || 0;

  const profit = data.total_client_expense - data.total_revenue;
  const totalProfit = (profit / data.total_revenue) * 100 || 0;
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
                  {CurrencyFormatter(data.total_revenue || 0)}
                </Badge>
              </div>
              <RingProgress
                size={90}
                roundCaps
                color="white"
                thickness={7}
                sections={[{ value: totalReceived, color: "orange" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    {totalReceived}%
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
                  {CurrencyFormatter(data.total_revenue_to_be_generated || 0)}
                </Badge>
              </div>
              <RingProgress
                size={90}
                roundCaps
                color="white"
                thickness={7}
                sections={[{ value: totalPending, color: "green" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    {totalPending}%
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
                  {CurrencyFormatter(data.total_client_expense || 0)}
                </Badge>
              </div>
              <RingProgress
                size={90}
                roundCaps
                color="white"
                thickness={7}
                sections={[{ value: totalClientExpesne, color: "red" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    {totalClientExpesne}%
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
                  {CurrencyFormatter(data.total_commission_to_be_paid || 0)}
                </Badge>
              </div>
              <RingProgress
                size={100}
                roundCaps
                thickness={10}
                sections={[{ value: totalCommssion, color: "red" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    {totalCommssion}%
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
                  {CurrencyFormatter(data.total_office_expense || 0)}
                </Badge>
              </div>
              <RingProgress
                size={100}
                roundCaps
                thickness={10}
                sections={[{ value: totalOfficeExpense, color: "yellow" }]}
                label={
                  <Center
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    {totalOfficeExpense}%
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
                {CurrencyFormatter(profit || 0)}
              </Badge>
            </div>
            <RingProgress
              size={190}
              roundCaps
              thickness={20}
              sections={[{ value: totalProfit, color: "green" }]}
              label={
                <Center
                  style={{
                    color: "white",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                  }}
                >
                  {totalProfit}%
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
