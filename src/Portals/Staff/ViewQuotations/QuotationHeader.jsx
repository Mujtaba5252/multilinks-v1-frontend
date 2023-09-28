import QuotationViewModal from "./QuotationViewModal";
import ActionIcons from "../../../Components/ActionIcons/ActionIcons";
import { Badge } from "@mantine/core";

export const QuotationHeader = () => {
  return [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Quotation ID",
      selector: (row) => row.quotation_ID || "N/A",
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Client ID",
      selector: (row) => row.client.id || "N/A",
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Client Name",
      selector: (row) => row.client_name || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Service Type",
      selector: (row) => row.service_type || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Amount",
      selector: (row) => row.client_balance || "N/A",
      sortable: true,
      wrap: true,
    },

    {
      name: "Contact Number",
      selector: (row) => row.client_contact_number || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      selector: (row) => {return<Badge color={row.status=='Approved'?'green':(row.status=='Pending'?'yellow':(row.status=='Rejected'?'red':'blue'))}>{row.status}</Badge>},
      sortable: true,
      wrap: true,
    },
    {
      name: "Actions",
      cell: (row) => {
        return (
          <ActionIcons
            edit={true}
            blocked={false}
            // editUrl={`/staff/edit-client/${row.UID}`}
            ModalTitle={"Quotation Details"}
            ViewModalComponent={<QuotationViewModal />}
          />
        );
      },
      sortable: true,
    },
  ];
};
