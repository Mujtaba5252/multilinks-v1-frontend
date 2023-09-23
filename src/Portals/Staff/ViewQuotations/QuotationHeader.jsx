import QuotationViewModal from "./QuotationViewModal";

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
      selector: (row) => row.quotationID || "N/A",
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Client ID",
      selector: (row) => row.UID || "N/A",
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
      selector: (row) => row.serviceType || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount || "N/A",
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
