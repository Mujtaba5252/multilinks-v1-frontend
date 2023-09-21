import React from "react";
import DataTable from "react-data-table-component";
import { MainBlue } from "../../Utils/ThemeColors";
import { Loader, Stack, Text } from "@mantine/core";
const DataGrid = ({ columns, data, pagination, noDataComponent, ...props }) => {
  const customStyles = {
    headCells: {
      style: {
        color: "#0487FF",
        fontSize: "12px",
        fontWeight: 600,
        backgroundColor: "#fff",
        borderTop: `3px solid ${MainBlue()}`,
      },
    },
    headRow: {
      style: {
        backgroundColor: "#fff",
      },
    },
    rows: {
      style: {
        color: "#000",
        fontSize: "12px",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#fff",
      },
    },
    pagination: {
      style: {
        color: "#000",
        backgroundColor: "#fff",
      },
      pageButtonsStyle: {
        fill: "#000",
      },
      noDataComponent: {
        style: {
          color: "#000",
          backgroundColor: "#fff",
        },
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data || []}
      pagination={pagination || true}
      customStyles={customStyles}
      subHeaderWrap
      // progressComponent={<Loader />}
      noDataComponent={
        <Stack>
          <Loader color="#0487FF" style={{ margin: "auto" }} />
          <Text align="center">Please wait for data to load</Text>
        </Stack>
      }
      {...props}
    />
  );
};

export default DataGrid;
