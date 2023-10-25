import {
  Button,
  Card,
  Center,
  Grid,
  Popover,
  Select,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { MonthPicker } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

import { Calendar } from "tabler-icons-react";
import { MainBlue } from "../../../../../../Utils/ThemeColors";
// import { axiosGet } from "../../../Helpers/AxiosHelper";
export default function AllTimeVehicleGraph() {

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
    <>
      
    </>
  );
}
