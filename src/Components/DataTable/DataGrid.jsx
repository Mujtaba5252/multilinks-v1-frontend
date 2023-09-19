import React from "react";
import DataTable from "react-data-table-component";

const DataGrid = ({ columns, data, pagination, ...props }) => {
  const customStyles = {
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#000000",
        backgroundColor: "#F5F5F5",
        border: "1px solid #E0E0E0",
        padding: "10px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        color: "#000000",
        border: "1px solid #E0E0E0",

        padding: "10px",
      },
    },
    pagination: {
      style: {
        fontSize: "14px",
        color: "#000000",
        border: "1px solid #E0E0E0",
        padding: "10px",
      },
    },
  };

  return (
    <DataTable
      columns={columns}
      data={data || []}
      pagination
      customStyles={customStyles}
      {...props}
    />
  );
};

export default DataGrid;
