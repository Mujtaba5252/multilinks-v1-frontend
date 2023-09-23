import {
  Button,
  Container,
  Group,
  Modal,
  Title,
  createStyles,
} from "@mantine/core";
import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import { X } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";

const ModalComponent = ({ opened, size, setOpened, children, title }) => {
  const matches = useMediaQuery("(max-width: 600-1000px)");
  const ismobile = useMediaQuery("(max-width: 600px)");
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      withCloseButton={true}
      radius={"lg"}
      title={title}
      size={size}
      styles={{
        header: {
          color: "red",
          textAlign: "center",
        },
        title: {
          paddingLeft: matches ? "50px" : ismobile ? "50px" : "110px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#0487FF !important",
        },

        overlay: {
          backdropFilter: "blur(3px)",
        },
      }}
    >
      <Container p="sm" size={"xl"}>
        {children}
      </Container>
    </Modal>
  );
};

export default ModalComponent;