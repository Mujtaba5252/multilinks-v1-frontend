import { Center, Grid, Group, RingProgress, Stack, Text } from "@mantine/core";
import React from "react";
import { MainBlue } from "../../../../../../Utils/ThemeColors";
import { CurrencyFormatter } from "../../../../../../Utils/CommonFormatters";
import { matches } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import FinanceChart from "../../../../AdminDashboard/FinanceChart";
import AmountChart from "./AmountChart";

const ProgressModal = ({ row }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Grid>
      <Grid.Col span={12}>
        <Group
          position="apart"
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 4px 5px #ccc",
          }}
          px={20}
          py={10}
        >
          <Group>
            <Text color={MainBlue()}>Staff ID:</Text>
            <Text>{row.staff_ID}</Text>
          </Group>
          <Group>
            <Text color={MainBlue()}>Salary:</Text>
            <Text>{CurrencyFormatter(row.salary)}</Text>
          </Group>
        </Group>
      </Grid.Col>
      <Grid.Col span={12}>
        <Grid mt={30}>
          <Grid.Col span={matches ? 12 : 4}>
            <Stack align={"center"} spacing={0}>
              {" "}
              <Text style={{ fontSize: "1.4rem", fontWeight: 800 }}>
                Clients
              </Text>
              <RingProgress
                size={matches ? 160 : 200}
                roundCaps
                color="white"
                thickness={matches ? 12 : 14}
                sections={[{ value: 100, color: "orange" }]}
                label={
                  <Center
                    style={{
                      color: "black",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                    }}
                  >
                    100%
                  </Center>
                }
              />
              <Text style={{ fontSize: "1.4rem", fontWeight: 800 }}>Deals</Text>
              <RingProgress
                size={matches ? 160 : 200}
                roundCaps
                color="white"
                thickness={matches ? 12 : 14}
                sections={[{ value: 100, color: "orange" }]}
                label={
                  <Center
                    style={{
                      color: "black",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                    }}
                  >
                    100%
                  </Center>
                }
              />
            </Stack>
          </Grid.Col>
          <Grid.Col span={matches ? 12 : 8}>
            <AmountChart />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default ProgressModal;
