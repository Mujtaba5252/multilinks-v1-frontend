import ActionIcons from "../../../Components/ActionIcons/ActionIcons";
import { routes, staffRoutes } from "../../../routes";
import ClientViewModal from "./ClientViewModal";

export const ClientHeader = () => {
  return [
    {
      name: "S.No",
      selector: (row) => row.sNo,
      sortable: true,
      width: "80px",
    },
    {
      name: "Client ID",
      selector: (row) => row.UID,
      sortable: true,
      width: "160px",
      wrap: true,
    },
    {
      name: "Client Name",
      selector: (row) => row.client_name,
      width: "150px",
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
            editUrl={`${staffRoutes.addClient}/${row.id}`}
            ModalTitle={"Client Details"}
            ViewModalComponent={<ClientViewModal row={row} />}
          />
        );
      },
      sortable: true,
    },
  ];
};
