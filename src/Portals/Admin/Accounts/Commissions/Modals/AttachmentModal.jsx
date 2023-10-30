import React, { useState } from "react";
import CustomLoader from "../../../../../Components/CustomLoader/CustomLoader";
import { Button, Group, Input } from "@mantine/core";
import ImagesAndFileUpload from "../../../../../Components/ImagesAndFileUpload/ImagesAndFileUpload";
import { MIME_TYPES } from "@mantine/dropzone";
import { useNavigate } from "react-router-dom";
import { uploadMultipleImages } from "../../../../../Components/FireBase/Firebase";
import { axios_put } from "../../../../../Utils/Axios";
import toast from "react-hot-toast";
import { adminRoutes } from "../../../../../routes";

const AttachmentModal = ({ row }) => {
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);

    const expenseAttachments = await uploadMultipleImages(
      attachments,
      "commission"
    );
    const existingAttachments = row.attachments || [];
    try {
      axios_put({
        url: `/commission/${row.id}`,
        data: {
          attachments: [...existingAttachments, ...expenseAttachments],
          allow_me: true,
        },
      }).then((res) => {
        if (res) {
          toast.success("Attachments Added Successfully");
          navigate(adminRoutes.commissions);
          setLoading(false);
        } else {
          toast.error("Error while adding attachments");
          setLoading(false);
        }
      });
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <CustomLoader loading={loading}>
      <Input.Wrapper>
        <ImagesAndFileUpload
          allMedia={attachments}
          setAllMedia={setAttachments}
          format={[MIME_TYPES.pdf, MIME_TYPES.doc, MIME_TYPES.docx]}
          type="document"
          cols={2}
          multiple={true}
          title="Attachments"
        />
      </Input.Wrapper>
      <Group position="right" mt={20}>
        <Button variant="filled" color="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </Group>
    </CustomLoader>
  );
};

export default AttachmentModal;
