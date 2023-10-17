import { CircleCheck, CircleX, Eye, Printer } from "tabler-icons-react";
import { CurrencyFormatter } from "../../../../../../../Utils/CommonFormatters";
import ActionIcons from "../../../../../../../Components/ActionIcons/ActionIcons";
import OfficeExpenseViewModal from "./Modal/OfficeExpenseViewModal";
import AttachmentModal from "./Modal/AttachmentModal";

export const OfficeExpenseViewHeader = ({ isInvoice }) => {
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
      name: "Actions",
      cell: (row) => {
        return (
          <ActionIcons
            ModalTitle={"View Office Expense"}
            ViewModalComponent={<OfficeExpenseViewModal row={row} />}
            attachment={true}
            attachmentModalTitle={"Uploaded Attachments"}
            AttachmentModalComponent={<AttachmentModal row={row} />}
          />
        );
      },
      sortable: true,
    },
  ];
};
