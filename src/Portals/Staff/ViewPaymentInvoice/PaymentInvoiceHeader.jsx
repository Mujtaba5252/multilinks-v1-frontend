import {  Badge } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ActionIcons from "../../../Components/ActionIcons/ActionIcons";
import ViewInvoiceModal from "./Modals/ViewInvoiceModal";
import { CurrencyFormatter } from "../../../Utils/CommonFormatters";

export const PaymentInvoiceHeader = () => {
  const navigate = useNavigate();
  return [
    
    {
      name: "S.No",
      selector: (row) => row.sNo,
      sortable: true,
      width: "80px",
    },
    {
      name: "Invoice ID",
      selector: (row) => row.invoice_ID,
      width: "150px",
      sortable: true,
      wrap: true,
    },
    {
      name: "Quotation",
      selector: (row) => row.quotation.quotation_ID,
      sortable: true,
      width: "160px",
      wrap: true,
    },
    {
      name: "Client Name",
      selector: (row) => row.client.client_name || 'N/A',
      sortable: true,
      wrap: true,
    },
    {
      name: "Service Type",
      selector: (row) => row.quotation.service_type,
      sortable: true,
      wrap: true,
    },

    {
      name: "Invoice Amount",
      selector: (row) => CurrencyFormatter(row.amount_received),
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => {return<Badge   style={{cursor:'default'}} color={row.status=='Approved'?'green':(row.status=='Pending'?'yellow':(row.status=='Rejected'?'red':'blue'))}>{row.status}</Badge>},
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
              ModalTitle={"View Payment Invoice"}
              viewModalSize={1200}
             ViewModalComponent={<ViewInvoiceModal Data ={row} />}
            >
            </ActionIcons>
          </>
        );
      },
      sortable: true,
    },
  ];
};
