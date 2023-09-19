import React from "react";
import DataTable from "react-data-table-component";
import Loader from "../Loader/Loader";
import { MainBlue } from "../../Utils/ThemeColors";
const DataGrid = ({ columns, data, pagination, ...props }) => {
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
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data || []}
      pagination={pagination || true}
      customStyles={customStyles}
      subHeaderWrap
      progressComponent={<Loader />}
      {...props}
    />
  );
};

export default DataGrid;
