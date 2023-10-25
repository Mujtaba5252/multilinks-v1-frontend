import {
  Button,
  Card,
  Center,
  Grid,
  Group,
  Popover,
  RingProgress,
  Text,
  Tooltip,
} from "@mantine/core";
import { MonthPicker } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Calendar } from "tabler-icons-react";
import { axios_get } from "../../../../../../Utils/Axios";
import { CurrencyFormatter } from "../../../../../../Utils/CommonFormatters";
import { MainBlue } from "../../../../../../Utils/ThemeColors";
const ProgressModal = ({ row }) => {
  const [data, setData] = useState([]);
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState([new Date(), new Date()]);
  const [chartData, setChartData] = useState(null);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [labels, setLabels] = useState(days);
  const [selected, setSelected] = useState("weekly");
  const matches = useMediaQuery("(max-width: 768px)");
  const [series, setSeries] = useState([
    { name: "Total", data: [0, 0, 0, 0, 0, 0, 0] },
    { name: "Remaining", data: [0, 0, 0, 0, 0, 0, 0] },
  ]);

  const options = {
    height: 400,
    type: "bar",
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      xaxis: {
        type: "category",
        categories: labels,
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: `'Roboto', sans-serif`,
        position: "bottom",
        offsetX: 20,
        labels: {
          useSeriesColors: false,
        },
        markers: {
          width: 20,
          height: 20,
          radius: 100,
        },
        itemMargin: {
          horizontal: 16,
          vertical: 8,
        },
      },
      fill: {
        type: "solid",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
      },
      colors: ["#0487FF", "#FF0000"], // Add your desired colors here
    },
    series: series,
  };
  const handleMonthChange = (e) => {
    console.log(e);
  };
  const getStats = async () => {
    let url = "/progress-model/651467fa94f2f800181f9a7a/1640995200/1698164608";
    await axios_get({ url: url })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getStats();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setChartData(options);
    }, 200);
  }, [selected, chartData, labels]);

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
            <Grid>
              <Grid.Col md={12} span={6}>
                <Text
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  Clients
                </Text>
                <Center>
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
                </Center>
              </Grid.Col>
              <Grid.Col md={12} span={6}>
                <Text
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  Deals
                </Text>
                <Center>
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
                </Center>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={matches ? 12 : 8}>
            <Grid>
              <Grid.Col span={12}>
                <Popover opened={opened} onChange={setOpened}>
                  <Popover.Target>
                    <Center>
                      <Tooltip label="Click to Filter by months">
                        <Button
                          variant="light"
                          onClick={() => setOpened((o) => !o)}
                          style={{ cursor: "pointer" }}
                          leftIcon={<Calendar color={MainBlue()} />}
                        >
                          Monthly Performance
                        </Button>
                      </Tooltip>
                    </Center>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <MonthPicker
                      type="range"
                      clearable
                      value={value}
                      onChange={(e) => {
                        handleMonthChange(e);
                      }}
                    />
                  </Popover.Dropdown>
                </Popover>
              </Grid.Col>
              <Grid.Col span={12}>
                <Card
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    // border: "1px solid gray",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                    height: "100%",
                    position: "relative",
                    marginTop: "10px",
                  }}
                >
                  {chartData ? (
                    <Chart
                      {...chartData}
                      width="100%"
                      type={chartData ? chartData?.type : "bar"}
                    />
                  ) : (
                    "Loading..."
                  )}
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default ProgressModal;
