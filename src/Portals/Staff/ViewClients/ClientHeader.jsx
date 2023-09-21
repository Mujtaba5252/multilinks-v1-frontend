import ActionIcons from "../../../Components/ActionIcons/ActionIcons";
import ClientViewModal from "./ClientViewModal";

export const ClientHeader = () => {
  return [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Client ID",
      selector: (row) => row.UID,
      sortable: true,
      width: "130px",
      wrap: true,
    },
    {
      name: "Client Name",
      selector: (row) => row.client_name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Nationality",
      selector: (row) => row.client_nationality,
      sortable: true,
      wrap: true,
    },
    {
      name: "Client Email",
      selector: (row) => row.client_email,
      sortable: true,
      wrap: true,
    },

    {
      name: "Client Phone",
      selector: (row) => row.client_contact_number,
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
            ModalTitle={"Client Details"}
            ViewModalComponent={<ClientViewModal />}
          />
        );
      },
      sortable: true,
    },
  ];
};
