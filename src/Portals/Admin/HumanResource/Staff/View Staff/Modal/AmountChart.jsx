import { Card, Select, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import Chart from "react-apexcharts";
// import { axiosGet } from "../../../Helpers/AxiosHelper";
export default function AllTimeVehicleGraph() {
  const matches = useMediaQuery("(max-width: 768px)");
  const [chartData, setChartData] = React.useState(null);
  const theme = useMantineTheme();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [labels, setLabels] = React.useState(days);

  const [selected, setSelected] = React.useState("weekly");
  const [series, setSeries] = React.useState([
    { name: "Total", data: [0, 0, 0, 0, 0, 0, 0] },
    { name: "Remaining", data: [0, 0, 0, 0, 0, 0, 0] },
  ]);
  //   const stats = async () => {
  //     await axiosGet({
  //       url: `/graphicalStats?type=${selected}&fields=Vehicles Purchased,Vehicles Sold,Vehicles Added To System`,
  //     })
  //       .then((response) => {
  //         let data = response.data.data[0].data;
  //         if (selected === "weekly") {
  //           setLabels(data.map((a) => days[new Date(a._id).getDay()]));
  //         } else {
  //           setLabels(data.map((a) => a._id));
  //         }

  //         setSeries(
  //           response.data.data.map((a) => ({
  //             name: a.collection,
  //             data: a.data.map((b) => b.count),
  //           }))
  //         );
  //       })

  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   React.useEffect(() => {
  //     stats();
  //   }, [selected]);

  React.useEffect(() => {
    setTimeout(() => {
      setChartData(options);
    }, 200);
  }, [selected, chartData, labels]);

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

  //   if (status === "loading" || isFetching) {
  //     return (
  //       <Box
  //         style={{
  //           height: "500px",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Loader />
  //       </Box>
  //     );
  //   }

  return (
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
      <Select
        size={matches ? "xs" : "sm"}
        placeholder="Pick one"
        defaultValue={"yearly"}
        value={selected}
        onChange={setSelected}
        data={[
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
          { value: "yearly", label: "Yearly" },
        ]}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          zIndex: 1,
          border: "1px solid gray",
          borderRadius: "5px",
        }}
        styles={{
          input: {
            border: "none",
            //change color on focus
          },
          item: {
            "&:hover": {
              backgroundColor: "#228be6",
              color: "white",
            },
            //change color of selected item
            "&[data-selected='true']": {
              backgroundColor: "#0487FF",
            },
            //change color of selected item on hover
            "&[data-selected='true']:hover": {
              backgroundColor: "#228be6",
            },
          },
        }}
      />
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
  );
}
