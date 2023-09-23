import { Badge } from "@mantine/core";
import { Man } from "tabler-icons-react";

export const LeavesViewHeader = () => {
  return [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Leave ID",
      selector: (row) => row.staff_leave_ID,
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Name",
      selector: (row) => row.staff.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Staff ID",
      selector: (row) => row.staff.staff_ID,
      sortable: true,
      wrap: true,
    },
    {
      name: "Date",
      selector: (row) => row.leave_date,
      sortable: true,
      wrap: true,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
      wrap: true,
    },

    {
      name: "Reason",
      selector: (row) => row.reason,
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => {
        return <Badge checked variant="light" size='xs' color="yellow" style={{cursor:'default'}}>{row.status}</Badge>
      },
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
