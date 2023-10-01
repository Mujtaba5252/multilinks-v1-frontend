import QuotationViewModal from "./QuotationViewModal";
import ActionIcons from "../../../Components/ActionIcons/ActionIcons";
import { Badge } from "@mantine/core";
import { staffRoutes } from "../../../routes";

export const QuotationHeader = () => {
  return [
    {
      name: "S.No",
      selector: (row) => row.sNo,
      sortable: true,
      width: "80px",
    },
    {
      name: "Quotation ID",
      selector: (row) => row.quotation_ID || "N/A",
      sortable: true,
      width: "140px",
      wrap: true,
    },
    {
      name: "Client ID",
      selector: (row) => row.client.UID || "N/A",
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Client Name",
      selector: (row) => row.client?.client_name || "N/A",
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
      selector: (row) => row.grand_total_numeric || "N/A",
      sortable: true,
      wrap: true,
    },

    {
      name: "Contact Number",
      selector: (row) => row.client?.client_contact_number || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Status",
      center: true,
      selector: (row) => {
        return (
          <Badge
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
        return (
          <ActionIcons
            edit={row.status=='Pending'?true:false}
            blocked={false}
            editUrl={`${staffRoutes.addQuotation}/${row.id}`}
            ModalTitle={"Quotation Details"}
            ViewModalComponent={<QuotationViewModal row={row} />}
          />
        );
      },
      sortable: true,
    },
  ];
};
