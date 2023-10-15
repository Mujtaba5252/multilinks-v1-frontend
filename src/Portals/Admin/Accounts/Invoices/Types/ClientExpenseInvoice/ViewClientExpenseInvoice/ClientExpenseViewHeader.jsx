import { CircleCheck, CircleX, Eye, Printer } from "tabler-icons-react";
import { CurrencyFormatter } from "../../../../../../../Utils/CommonFormatters";
import ActionIcons from "../../../../../../../Components/ActionIcons/ActionIcons";
import { Badge, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import ApproveModal from "./Modals/ApproveModal";
import { MainBlue } from "../../../../../../../Utils/ThemeColors";
import RejectModal from "./Modals/RejectModal";
import ClientExpenseReceiptPrint from "./ClientExpenseReceiptPrint";
import ClientExpenseViewModal from "./Modals/ClientExpenseViewModal";
import AttachmentModal from "./Modals/AttachmentModal";

export const ClientExpenseViewHeader = ({ isInvoice, setUpdate }) => {
  // const [openViewModal, setOpenViewModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [attachementModal, setAttachementModal] = useState(false);
  return [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Client Expense ID",
      selector: (row) => row.client_expense_ID,
      sortable: true,
      width: "170px",
      wrap: true,
    },
    {
      name: "Client",
      selector: (row) => row.client.client_name,
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Service Type",
      width: "130px",
      selector: (row) => row.quotation.service_type,
      sortable: true,
      wrap: true,
    },
    {
      name: "Payment To",
      width: "140px",
      selector: (row) => row.payment_to,
      sortable: true,
      wrap: true,
    },
    {
      name: "Payement For",
      selector: (row) => row.payment_for,
      width: "140px",
      sortable: true,
      wrap: true,
    },
    {
      name: "Amount",
      selector: (row) => CurrencyFormatter(row.expense_amount),
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      center: true,
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
      center: true,
      cell: (row) => {
        return (
          <>
            <ActionIcons
              Approve={isInvoice ? true : false}
              Reject={isInvoice ? true : false}
              ModalTitle={"Client Expense Details"}
              ViewModalComponent={<ClientExpenseViewModal row={row} />}
              ApproveModalTitle={
                <Title order={3} style={{ fontSize: "20px" }}>
                  Remaining Client Balance:{" "}
                  <span style={{ color: "black" }}>
                    {CurrencyFormatter(
                      row.quotation.client_balance -
                        row.quotation.client_expense
                    )}
                  </span>
                </Title>
              }
              ApproveModalComponent={
                <ApproveModal Data={row} setUpdate={setUpdate} />
              }
              RejectModalTitle={"Reject Client Expense"}
              RejectModalComponent={
                <RejectModal
                  Data={row}
                  setUpdate={setUpdate}
                  setOpenRejectModal={setOpenRejectModal}
                />
              }
              setOpenRejectModal={setOpenRejectModal}
              openRejectModal={openRejectModal}
              attachementModal={attachementModal}
              setAttachementModal={setAttachementModal}
              attachment={true}
              attachmentModalTitle={"Uploaded Attachments"}
              AttachmentModalComponent={
                <AttachmentModal
                  row={row}
                  setAttachmentModal={setAttachementModal}
                />
              }
            />
            <ClientExpenseReceiptPrint rowData={row} />
          </>
        );
      },
      sortable: true,
    },
  ];
};
