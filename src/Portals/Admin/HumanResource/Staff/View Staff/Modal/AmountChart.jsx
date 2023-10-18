import { Card, createStyles } from "@mantine/core";
import React, { useEffect } from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

const AmountChart = ({ stats }) => {
  const [chartData, setChartData] = useState(null);
  const useStyles = createStyles((theme) => ({
    legendColor: theme?.colorScheme === "dark" ? "#FFFFFF" : "#204051",
  }));

  const { classes } = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setChartData(options);
    }, 200);
  }, [chartData]);
  let showValue = 10;
  const vehicleData = [
    {
      name: "Credit Application",
      vehicles: stats?.inCredApplication_2 ?? showValue,
      color: "#3498DB",
    },
    {
      name: "Bank Approval",
      vehicles: stats?.inBankApproval_3 ?? showValue,
      color: "#E74C3C",
    },
    {
      name: "Down Payment Collection",
      vehicles: stats?.inDownPayment_4 ?? showValue,
      color: "#27AE60",
    },
    {
      name: "Buyer Order",
      vehicles: stats?.inBuyerOrder_5 ?? showValue,
      color: "#F4D03F",
    },
    {
      name: "STIPs",
      vehicles: stats?.inStips_6 ?? showValue,
      color: "#797D7F",
    },
    {
      name: "E-Contract",
      vehicles: stats?.inEContract_7 ?? showValue,
      color: "#BA4A00",
    },
    {
      name: "You/We Owe",
      vehicles: stats?.inEContract_7 ?? showValue,
      color: "#258fff",
    },
    {
      name: "Temp Tag and Title",
      vehicles: stats?.inTagAndTitle_8 ?? showValue,
      color: "#071c33",
    },
  ];

  const options = {
    height: 400,
    type: "bar",
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: vehicleData?.map((item) => item?.color),

      plotOptions: {
        bar: {
          columnWidth: "35%",
          distributed: true,
        },
      },
      xaxis: {
        type: "category",
        categories: vehicleData?.map((item) => item?.name),
      },
      yaxis: {
        title: {
          text: "Months",
          style: {
            fontSize: "14px",
            fontWeight: 600,
            color: "#7F7F7F",
          },
        },

        axisBorder: {
          show: true,
          color: "#78909C",
          offsetX: 0,
          offsetY: 0,
        },
      },
      legend: {
        show: false,
        fontSize: "14px",
        fontFamily: `'Roboto', sans-serif`,
        position: "bottom",
        offsetX: 20,
        labels: {
          // useSeriesColors: false,
          colors: classes.legendColor,
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5,
        },
        itemMargin: {
          horizontal: 15,
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
    },
    series: [
      {
        name: "Vehicles",
        data: vehicleData?.map((item) => item?.vehicles),
      },
    ],
  };
  return (
    <Card
      style={{
        borderRadius: "5px",
        width: "100%",
        border: "1px solid #e9e9e9",
        // boxShadow: "0px 0px 10px rgb(2, 33, 255, 0.5)",
        height: "auto",
        position: "relative",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      {chartData ? <Chart {...chartData} width="100%" /> : "Loading..."}
    </Card>
  );
};

export default AmountChart;
