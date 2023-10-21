import { Badge, Button, Menu, Radio } from "@mantine/core";
import ActionIcons from "../../../../Components/ActionIcons/ActionIcons";
import { adminRoutes } from "../../../../routes";
import LicenseViewModal from "./LicenseViewModal";
import { useState } from "react";
import CatModal from "./CatModal";
import ModalComponent from "../../../../Components/ModalComponent/ModalComponent";

export const LicenseHeader = ({ setUpdate }) => {
  const [openCatModal, setOpenCatModal] = useState(false);

  return [
    {
      name: "S.No",
      selector: (row) => row.sNo,
      sortable: true,
      width: "80px",
    },

    {
      name: "License Acitivity",
      selector: (row) => row.license_activity || "N/A",
      width: "150px",
      sortable: true,
      wrap: true,
    },
    {
      name: "License Type",
      selector: (row) => row.license_type || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Trade Name",
      selector: (row) => row.trade_name || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Issue Date",
      selector: (row) => new Date(row.issue_date).toDateString() || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Expiry Date",
      selector: (row) => new Date(row.expiry_date).toDateString() || "N/A",
      sortable: true,
      wrap: true,
    },
    {
      name: "Cat",
      center: true,
      selector: (row) => row.misc || "N/A",
      cell: (row) => {
        return !row?.misc ? (
          <>
            <ModalComponent
              opened={openCatModal}
              setOpened={setOpenCatModal}
              title={"Update Cat Details"}
            >
              <CatModal
                row={row}
                setOpenCatModal={setOpenCatModal}
                setUpdate={setUpdate}
              />
            </ModalComponent>
            <Button
              fullWidth
              size="xs"
              variant="filled"
              color="blue"
              onClick={() => {
                setOpenCatModal(true);
              }}
            >
              Add
            </Button>
          </>
        ) : (
          row?.misc
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
            edit={true}
            blocked={false}
            editUrl={`${adminRoutes.addLicenses}/${row.id}`}
            ModalTitle={"License Details"}
            ViewModalComponent={<LicenseViewModal row={row} />}
          />
        );
      },
      sortable: true,
    },
  ];
};
