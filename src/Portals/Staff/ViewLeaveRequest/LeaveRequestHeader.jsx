import { Badge } from "@mantine/core";
import ActionIcons from "../../../Components/ActionIcons/ActionIcons";
import { staffRoutes } from "../../../routes";
import LeaveRequestViewModal from "./LeaveRequestViewModal";

export const LeaveRequestHeader = () => {
  return [
    {
      name: "S.No",
      selector: (row) => row.sNo,
      sortable: true,
      width: "80px",
    },
    {
      name: "ID",
      selector: (row) => row?.staff_leave_ID || "N/A",
      width: "150px",
      sortable: true,
      wrap: true,
    },
    {
      name: "Name",
      selector: (row) => row?.staff?.name || "N/A",
      width: "150px",
      sortable: true,
      wrap: true,
    },

    {
      name: "Date",
      selector: (row) => new Date(row.createdAt).toDateString() || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Leave Date",
      width: "160px",
      selector: (row) => {
        const startDate = new Date(row.leave_date[0]);
        const endDate = new Date(row.leave_date[1]);

        return `${startDate.toDateString()} - ${endDate.toDateString()}`;
      },
      sortable: true,
      wrap: true,
    },
    {
      name: "Subject",
      selector: (row) => row.subject || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => row.status || "N/A",
      center: true,
      cell: (row) => {
        return (
          <Badge
            fullWidth
            color={
              row.status === "Approved"
                ? "green"
                : row?.status === "Pending"
                ? "yellow"
                : "red"
            }
          >
            {row.status}
          </Badge>
        );
      },
      sortable: true,
      wrap: true,
    },
    {
      name: "Actions",
      center: true,
      cell: (row) => {
        return (
          <ActionIcons
            edit={false}
            blocked={false}
            ModalTitle={"Leave Request Details"}
            ViewModalComponent={<LeaveRequestViewModal row={row} />}
          />
        );
      },
      sortable: true,
    },
  ];
};
