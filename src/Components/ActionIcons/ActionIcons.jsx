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
  viewModalSize="lg",
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
            <Eye color="#0487FF" />
          </ActionIcon>
        </Tooltip>
        {/*for EIDT*/}
        {edit && (
          <Tooltip label={blocked ? "Edit Not Allowed" : "Edit"}>
            <ActionIcon onClick={handleEdit} disabled={blocked}>
              {blocked ? (
                <EditCircleOff color="#0487FF" />
              ) : (
                <Edit color="#0487FF" />
              )}
            </ActionIcon>
          </Tooltip>
        )}
      </Flex>
      
      <ModalComponent //for view modal component
        opened={openViewModal}
        setOpened={setOpenViewModal}
        title={ModalTitle}
        size={viewModalSize}
      >
        {ViewModalComponent}
      </ModalComponent>
    </>
  );
};

export default ActionIcons;
