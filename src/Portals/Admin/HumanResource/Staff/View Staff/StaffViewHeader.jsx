import { Man } from "tabler-icons-react";

export const StaffViewHeader = () => {
  return [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Staff ID",
      selector: (row) => row.staff_ID,
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true,
      wrap: true,
    },
    {
      name: "CNIC",
      selector: (row) => row.CNIC_NIN,
      sortable: true,
      wrap: true,
    },

    {
      name: "VISA Status",
      selector: (row) => row.visa_status,
      sortable: true,
      wrap: true,
    },
    {
      name: "Expiry Date",
      selector: (row) => row.visa_expiry_date,
      sortable: true,
      wrap: true,
    },
    {
      name: "Address",
      selector: (row) => row.residence_address_in_UAE,
      sortable: true,
      wrap: true,
    },
    {
      name: "Actions",
      cell: (row) => {
        return <Man />;
      },
      sortable: true,
    },
  ];
};
