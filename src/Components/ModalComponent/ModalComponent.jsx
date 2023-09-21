import { Button, Container, Group, Modal, createStyles } from "@mantine/core";
import React from "react";

const ModalComponent = ({ opened, size, setOpened, children, title }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      withCloseButton={false}
      title={title}
      centered
      radius={"lg"}
      size={size}
      styles={{
        overlay: {
          backdropFilter: "blur(3px)",
        },
      }}
    >
      <Container p="sm" size={"xl"}>
        {children}
        <Group pt={"sm"} ml={"auto"} position="right">
          <Button
            color="red"
            variant={"outline"}
            size="xs"
            onClick={() => setOpened(false)}
          >
            Close
          </Button>
        </Group>
      </Container>
    </Modal>
  );
};

export default ModalComponent;
