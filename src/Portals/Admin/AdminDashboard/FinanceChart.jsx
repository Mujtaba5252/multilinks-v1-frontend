import { Card, createStyles } from "@mantine/core";
import React, { useEffect } from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

const FinanceChart = ({ stats }) => {
  const [chartData, setChartData] = React.useState(null);
  const navigate = useNavigate();
  const useStyles = createStyles((theme) => ({
    legendColor: theme?.colorScheme === "dark" ? "#FFFFFF" : "#204051",
  }));

  const { classes } = useStyles();
  let showValue = 80.0;
  const vehicleData = [
    {
      name: "New Vehicle",
      vehicles: stats?.newlyBoughtVehicles ?? showValue,
      color: "#00a86b",
      route: "/admin/viewVehiclesInTransit",
    },
    {
      name: "Received Vehicle",
      vehicles: stats?.vehiclesReceived ?? showValue,
      color: "#00a86b",
      route: "/admin/viewVehiclesReceived",
    },

    {
      name: "Sold Vehicle",
      vehicles: stats?.vehiclesSold ?? showValue,
      color: "#256fff",
      route: "/admin/viewAllPreInspectionVehicles",
    },

    {
      name: "In-Tranist Vehicle",
      vehicles: stats?.vehiclesInTransit ?? showValue,
      color: "#256fff",
      route: "/admin/serviceVehicles",
    },
    {
      name: "In Service Pre-Check",
      vehicles: stats?.vehiclesInPreInspection ?? showValue,
      color: "#256fff",
      route: "/admin/serviceVehicles",
    },
    // {
    //   name: "Pre-Check Completed",
    //   vehicles: stats?.vehiclesPreInspectionCompleted ?? showValue,
    //   color: "#F6FA70",
    //   route: "/admin/viewAllPreInspectionVehicles",
    // },
    {
      name: "In Service Post-Check",
      vehicles: stats?.vehiclesInPostInspection ?? showValue,
      color: "#256fff",
      route: "/admin/viewAllPreInspectionVehicles",
    },
    {
      name: "Service Completed Vehicles",
      vehicles: stats?.vehiclesServiceCompleted ?? showValue,
      color: "#704214",
      route: "/admin/viewAllPreInspectionVehicles",
    },
    {
      name: "Deal Confirmed Vehicles",
      vehicles: stats?.vehiclesInDealCompletedPhase ?? showValue,
      color: "#704214",
      route: "/admin/viewAllPreInspectionVehicles",
    },
  ];

  const options = {
    height: 500,
    type: "bar",
    options: {
      stacked: true,

      chart: {
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },

      plotOptions: {
        bar: {
          columnWidth: "100%",
        },
      },
      xaxis: {
        type: "category",
        categories: stats?.MonthWiseData?.map((item) => item.date),
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val;
          },
        },
      },
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: `'Roboto', sans-serif`,
        position: "bottom",
        offsetX: 20,
        labels: {
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
        enabled: true,
      },
      grid: {
        show: true,
      },
    },
    series: [
      {
        name: "Client Count",
        data: stats?.MonthWiseData?.map((item) => item.clientCount),
      },
      {
        name: "Quotation Count",
        data: stats?.MonthWiseData?.map((item) => item.quotationCount),
      },
      {
        name: "Staff Count",
        data: stats?.MonthWiseData?.map((item) => item.staffCount),
      },
      {
        name: "Invoice Count",
        data: stats?.MonthWiseData?.map((item) => item.invoiceCount),
      },
      {
        name: "Quotation Grand Total",
        data: stats?.MonthWiseData?.map((item) => item.quotation_grand_total),
      },

      {
        name: "Invoice Amount",
        data: stats?.MonthWiseData?.map((item) => item.invoice_amount_received),
      },
    ],
  };

  React.useEffect(() => {
    setTimeout(() => {
      setChartData(options);
    }, 200);
  }, [chartData]);
  return (
    <Card
      style={{
        borderRadius: "5px",
        width: "100%",
        border: "1px solid #e9e9e9",
        height: "auto",
        position: "relative",
        marginTop: "10px",
        marginBottom: "0px",
      }}
    >
      {chartData ? <Chart {...chartData} width="100%" /> : "Loading..."}
    </Card>
  );
};

export default FinanceChart;
