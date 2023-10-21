import { Button, Group, Input, SimpleGrid } from "@mantine/core";
import React, { useState } from "react";
import ImagesAndFileUpload from "../../../../../../../../Components/ImagesAndFileUpload/ImagesAndFileUpload";
import { MIME_TYPES } from "@mantine/dropzone";
import { uploadMultipleImages } from "../../../../../../../../Components/FireBase/Firebase";
import { axios_put } from "../../../../../../../../Utils/Axios";
import toast from "react-hot-toast";
import CustomLoader from "../../../../../../../../Components/CustomLoader/Customloader";
import { adminRoutes } from "../../../../../../../../routes";
import { useNavigate } from "react-router-dom";

const AttachmentModal = ({ row }) => {
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);
    const expenseAttachments = await uploadMultipleImages(
      attachments,
      "expense"
    );
    const existingAttachments = row?.attachments || [];
    try {
      axios_put({
        url: `/client-expense/${row.id}`,
        data: {
          attachments: [...existingAttachments, ...expenseAttachments],
          allow_me: true,
        },
      }).then((res) => {
        if (res) {
          toast.success("Attachments Added Successfully");
          setLoading(false);
          navigate(adminRoutes.clientExpenseReceipts);
        } else {
          toast.error("Error while adding attachments");
          setLoading(false);
        }
      });
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };
  return (
    <CustomLoader loading={loading}>
      <Input.Wrapper>
        <ImagesAndFileUpload
          allMedia={attachments}
          setAllMedia={setAttachments}
          format={[MIME_TYPES.pdf]}
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
