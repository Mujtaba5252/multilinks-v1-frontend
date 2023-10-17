import { Badge } from "@mantine/core";
import { Man } from "tabler-icons-react";
import ActionIcons from "../../../../../Components/ActionIcons/ActionIcons";
import LeaveApproveModal from "./LeaveApproveModal";
import LeaveRejectModal from "./LeaveRejectModal";
import ModalComponent from "../../../../../Components/ModalComponent/ModalComponent";
import LeaveViewModal from "./LeaveViewModal";

export const LeavesViewHeader = ({ setUpdate }) => {
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
      width: "130px",
      selector: (row) => row.staff.staff_ID,
      sortable: true,
      wrap: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.createdAt).toDateString(),
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
      center: true,
      selector: (row) => {
        return (
          <Badge
            checked
            variant="light"
            size="xs"
            fullWidth
            color={
              row.status == "Approved"
                ? "green"
                : row.status == "Pending"
                ? "yellow"
                : row.status == "Rejected"
                ? "red"
                : "blue"
            }
            style={{ cursor: "default" }}
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
            ModalTitle={"Leave Details"}
            ViewModalComponent={<LeaveViewModal row={row} />}
            Approve={row.status === "Pending" ? true : false}
            ApproveModalTitle={"Approve Leave"}
            ApproveModalComponent={
              <LeaveApproveModal Data={row} setUpdate={setUpdate} />
            }
            Reject={row.status === "Pending" ? true : false}
            RejectModalTitle={"Reject Leave"}
            RejectModalComponent={
              <LeaveRejectModal Data={row} setUpdate={setUpdate} />
            }
          />
        );
      },
      sortable: true,
    },
  ];
};
