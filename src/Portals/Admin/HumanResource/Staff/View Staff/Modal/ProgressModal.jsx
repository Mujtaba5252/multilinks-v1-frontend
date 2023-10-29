import {
  Button,
  Card,
  Center,
  Flex,
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
import { Calendar, ChevronDownLeft, ChevronLeft, ChevronRight } from "tabler-icons-react";
import { axios_get } from "../../../../../../Utils/Axios";
import { CurrencyFormatter } from "../../../../../../Utils/CommonFormatters";
import { MainBlue } from "../../../../../../Utils/ThemeColors";
import { addOneMonthFromTimestamp, roundOff, subtractOneMonthFromTimestamp } from "../StaffFunction";
import toast from "react-hot-toast";
const ProgressModal = ({ row }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [swap, setSwap] = useState(false);
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

  const callGraph = async (url,start_date, end_date) => {
    console.log(start_date, end_date);
    if (start_date!=null || end_date!=null) {
      await axios_get({ url: url })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      toast.error("Please select a date range");
    }
  }
  const nextMonth = () => {
    const staffID = row.id;
    const start_date = currentDate.getTime();
    const end_date = addOneMonthFromTimestamp(currentDate);
    const url="/progress-model/" + staffID + "/" + start_date + "/" + end_date;
    if (currentDate.getMonth() != new Date().getMonth()) {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
      callGraph(url,start_date, end_date);
    }
    else {
      toast.error("Cannot go beyond current month");
    }
  }
  const previousMonth = () => {

    const staffID = row.id;
    const start_date = currentDate.getTime();
    const end_date = subtractOneMonthFromTimestamp(currentDate);
    const url="/progress-model/" + staffID + "/" + end_date + "/" + start_date;
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    callGraph(url,start_date, end_date);
  }
  useEffect(() => {
    console.log("swap changed:", swap);
  }, [swap]);
  useEffect(() => {
    // getStats();
    callGraph(currentDate.getTime(), subtractOneMonthFromTimestamp(currentDate.getTime()));
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
                    sections={[{ value: data.clientPercentage, color: "orange" }]}
                    label={
                      <Center
                        style={{
                          color: "black",
                          fontSize: "1.8rem",
                          fontWeight: 800,
                        }}
                      >
                        {roundOff(data.clientPercentage)}%
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
                    sections={[{ value: data.quotationPercentage, color: "orange" }]}
                    label={
                      <Center
                        style={{
                          color: "black",
                          fontSize: "1.8rem",
                          fontWeight: 800,
                        }}
                      >
                        {roundOff(data.quotationPercentage)}%
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
                <Flex justify={"center"}>
                  <Button onClick={()=>{setSwap(prevSwap => false);previousMonth();}}  p={0} variant="light" w={35} style={{borderRadius:"50%"}}>  
                    <ChevronLeft style={{cursor:"pointer"}} color={MainBlue()} />
                  </Button>
                  <Text  ml={30} mr={30}>
                    {currentDate.toLocaleDateString("en-US", { month: 'long', year: 'numeric' })}
                  </Text>
                  <Button onClick={()=>{setSwap(prevSwap => true);nextMonth();}}  p={0} variant="light" w={35} style={{borderRadius:"50%"}}>  
                    <ChevronRight style={{cursor:"pointer"}} color={MainBlue()} />
                  </Button>
                </Flex>
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
