import { CircleCheck, CircleX, Eye, Printer } from "tabler-icons-react";
import { CurrencyFormatter } from "../../../../../../../Utils/CommonFormatters";
import ActionIcons from "../../../../../../../Components/ActionIcons/ActionIcons";
import OfficeExpenseViewModal from "./Modal/OfficeExpenseViewModal";
import AttachmentModal from "./Modal/AttachmentModal";
import { Badge } from "@mantine/core";
import ApproveOfficeExpense from "./Modal/ApproveOfficeExpense";
import RejectOfficeExpense from "./Modal/RejectOfficeExpense";

export const OfficeExpenseViewHeader = ({ isInvoice, setUpdate }) => {
  return [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },

    {
      name: "Office Expense ID",
      selector: (row) => row.office_expense_ID,
      sortable: true,
      wrap: true,
    },
    {
      name: "Payment To",
      selector: (row) => row.payment_to,
      sortable: true,
      wrap: true,
    },
    {
      name: "Payement For",
      selector: (row) => row.payment_for,
      sortable: true,
      wrap: true,
    },
    {
      name: "Expense Amount",
      selector: (row) => CurrencyFormatter(row.expense_amount),
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <Badge
            style={{ cursor: "default" }}
            color={
              row.status == "Approved"
                ? "green"
                : row.status == "Pending"
                  ? "yellow"
                  : row.status == "Rejected"
                    ? "red"
                    : "blue"
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
      cell: (row) => {
        return <ActionIcons
          Approve={isInvoice ? true : false}
          Reject={isInvoice ? true : false}
          ApproveModalTitle={"Approve Office Expense"}
          RejectModalTitle={"Reject Office Expense"}
          ApproveModalComponent={<ApproveOfficeExpense Data={row} setUpdate={setUpdate} />}
          RejectModalComponent={<RejectOfficeExpense Data={row} setUpdate={setUpdate} />}
          ModalTitle={"View Office Expense"}
          ViewModalComponent={<OfficeExpenseViewModal row={row} />}
          attachment={true}
          attachmentModalTitle={"Uploaded Attachments"}
          AttachmentModalComponent={<AttachmentModal row={row} />}
        />;
      },
      sortable: true,
    },
  ];
};
