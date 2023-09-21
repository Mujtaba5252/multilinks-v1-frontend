import { ActionIcon, Flex, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, EditCircleOff, Eye } from "tabler-icons-react";
import ModalComponent from "../ModalComponent/ModalComponent";

const ActionIcons = ({
  edit,
  blocked,
  editUrl,
  ModalTitle,
  ViewModalComponent,
}) => {
  const navigate = useNavigate();
  const [openViewModal, setOpenViewModal] = useState(false);
  const handleView = () => {
    setOpenViewModal(true);
  };
  const handleEdit = () => {
    navigate(editUrl);
  };
  return (
    <>
      <Flex gap={5} align="center" justify="center">
        {/*for VIEW*/}
        <Tooltip label="View">
          <ActionIcon onClick={handleView}>
            <Eye />
          </ActionIcon>
        </Tooltip>
        {/*for EIDT*/}
        {edit && (
          <Tooltip label={blocked ? "Edit Not Allowed" : "Edit"}>
            <ActionIcon onClick={handleEdit} disabled={blocked}>
              {blocked ? <EditCircleOff /> : <Edit color={"grey"} />}
            </ActionIcon>
          </Tooltip>
        )}
      </Flex>
      <ModalComponent
        opened={openViewModal}
        setOpened={setOpenViewModal}
        title={ModalTitle}
        size={"lg"}
      >
        {ViewModalComponent}
      </ModalComponent>
    </>
  );
};

export default ActionIcons;
