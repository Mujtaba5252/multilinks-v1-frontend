import { Button, Group, Text } from "@mantine/core";
import ActionIcons from "../../../Components/ActionIcons/ActionIcons";
import { staffRoutes } from "../../../routes";
import { CirclePlus, Plus, ToiletPaper } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import { MainBlue } from "../../../Utils/ThemeColors";

export const QuotationHeader = () => {
  const navigate = useNavigate();
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
      center: true,
      cell: (row) => {
        return (
          <ToiletPaper
            color={MainBlue()}
            style={{ cursor: "pointer" }}
            onClick={() => {
              const {
                sNo,
                UID,
                client_name,
                client_nationality,
                client_email,
                client_contact_number,
                id,
              } = row;
              navigate(staffRoutes.addQuotation, {
                state: {
                  sNo,
                  UID,
                  client_name,
                  client_nationality,
                  client_email,
                  client_contact_number,
                  id,
                },
              });
            }}
            radius={"xs"}
          />
        );
      },
      sortable: true,
    },
  ];
};
