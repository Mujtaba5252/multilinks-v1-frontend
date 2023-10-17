import { ActionIcon, Flex, Progress, Title, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChartBar,
  CircleCheck,
  CircleX,
  CloudDownload,
  Edit,
  EditCircleOff,
  Eye,
  Printer,
  Trash,
} from "tabler-icons-react";
import ModalComponent from "../ModalComponent/ModalComponent";
import { Amber, MainBlue, Red } from "../../Utils/ThemeColors";

const ActionIcons = ({
  edit,
  blocked,
  editUrl,
  ModalTitle,
  ViewModalComponent,
  viewModalSize = "lg",
  progress,
  Delete,
  Approve,
  Reject,
  Print,
  ApproveModalComponent,
  RejectModalComponent,
  ProgressModalComponent,
  ApproveModalTitle,
  RejectModalTitle,
  ProgressModalTitle,
  DeleteModalTitle,
  DeleteModalComponent,
  disableApproveReject,
  attachment,
  attachmentModalTitle,
  AttachmentModalComponent,
  openRejectModal,
  setOpenRejectModal,

  size = "lg",
}) => {
  const navigate = useNavigate();
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openProgressModal, setOpenProgressModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [attachementModal, setAttachementModal] = useState(false);

  const handleView = () => {
    setOpenViewModal(true);
  };
  const handleEdit = () => {
    navigate(editUrl);
  };
  const handleProgress = () => {
    setOpenProgressModal(true);
  };

  const handleDelete = () => {
    setOpenDeleteModal(true);
  };
  const handleApprove = () => {
    setOpenApproveModal(true);
  };
  const handleReject = () => {
    setOpenRejectModal(true);
  };
  const handleAttachment = () => {
    setAttachementModal(true);
  };

  return (
    <>
      <Flex gap={5} align="center" justify="center">
        {/*for VIEW*/}
        {progress && (
          <Tooltip label={"Progress"}>
            <ActionIcon onClick={handleProgress}>
              <ChartBar color={Amber()} />
            </ActionIcon>
          </Tooltip>
        )}
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
        {Delete && (
          <Tooltip label={"Progress"}>
            <ActionIcon onClick={handleDelete}>
              <Trash color={Red()} />
            </ActionIcon>
          </Tooltip>
        )}
        {Reject && (
          <Tooltip label={"Reject"}>
            <ActionIcon onClick={handleReject} disabled={disableApproveReject}>
              <CircleX color={disableApproveReject ? "gray" : Red()} />
            </ActionIcon>
          </Tooltip>
        )}
        {Approve && (
          <Tooltip label={"Approve"}>
            <ActionIcon onClick={handleApprove} disabled={disableApproveReject}>
              <CircleCheck color={disableApproveReject ? "gray" : "green"} />
            </ActionIcon>
          </Tooltip>
        )}
        {Print && (
          <Tooltip label={"Print"}>
            <ActionIcon disabled={!disableApproveReject}>
              <Printer color={!disableApproveReject ? "gray" : MainBlue()} />
            </ActionIcon>
          </Tooltip>
        )}
        {attachment && (
          <Tooltip label={"Print"}>
            <ActionIcon onClick={handleAttachment}>
              <CloudDownload color={MainBlue()} />
            </ActionIcon>
          </Tooltip>
        )}
      </Flex>

      <ModalComponent //for view modal component
        opened={openViewModal}
        setOpened={setOpenViewModal}
        title={ModalTitle}
        size={size}
      >
        {ViewModalComponent}
      </ModalComponent>
      <ModalComponent //for progress modal component
        opened={openProgressModal}
        setOpened={setOpenProgressModal}
        title={ProgressModalTitle}
        size={"lg"}
      >
        {ProgressModalComponent}
      </ModalComponent>
      <ModalComponent //for delete modal component
        opened={openDeleteModal}
        setOpened={setOpenDeleteModal}
        title={DeleteModalTitle}
        size={"lg"}
      >
        {DeleteModalComponent}
      </ModalComponent>
      <ModalComponent //for approve modal component
        opened={openApproveModal}
        setOpened={setOpenApproveModal}
        title={ApproveModalTitle}
        size={"lg"}
      >
        {ApproveModalComponent}
      </ModalComponent>

      <ModalComponent //for reject modal component
        opened={openRejectModal}
        setOpened={setOpenRejectModal}
        title={RejectModalTitle}
        size={"lg"}
      >
        {RejectModalComponent}
      </ModalComponent>

      <ModalComponent //attachement modal component
        opened={attachementModal}
        setOpened={setAttachementModal}
        title={attachmentModalTitle}
        size={"lg"}
      >
        {AttachmentModalComponent}
      </ModalComponent>
    </>
  );
};

export default ActionIcons;
