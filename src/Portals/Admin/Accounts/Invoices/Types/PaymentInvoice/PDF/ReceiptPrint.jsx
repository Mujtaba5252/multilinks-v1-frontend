import React from "react";
import { useReactToPrint } from "react-to-print";

import { useRef } from "react";
import { Download, FileDownload, Printer } from "tabler-icons-react";
import {
  ActionIcon,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import logo from "../../../../../../../assets/images/logo.png";
import { MainBlue } from "../../../../../../../Utils/ThemeColors";
import { CurrencyFormatter } from "../../../../../../../Utils/CommonFormatters";
import ForwardRefWrapper from "../../../../../../../Components/ForwardRefWrapper/ForwardRefWrapper";

const ReceiptPrint = ({ rowData }) => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    // documentTitle: "Print",
    content: () => componentRef.current,
    // copyStyles: true,
    pageStyle: { margin: "10px" },
  });
  return (
    <>
      <Tooltip label={"Print"}>
        <ActionIcon>
          <Printer
            color={MainBlue()}
            onClick={() => {
              handlePrint();
            }}
          />
        </ActionIcon>
      </Tooltip>
      <div style={{ display: "none" }}>
        <ForwardRefWrapper ref={componentRef}>
          <Group position="apart">
            <Image src={logo} width={"auto"} height={50} />
            <Stack spacing={0}>
              <Text size={30} weight={"bold"} color={MainBlue()}>
                MULTILINKS
              </Text>
              <Text
                size={14}
                mt={-10}
                color={"gray"}
                align="center"
                fs={"italic"}
              >
                Links To Success
              </Text>
            </Stack>
            <Text>Date :- {new Date().toLocaleDateString()}</Text>
          </Group>
          <Divider my="sm" />
          <Divider my="sm" variant="dashed" />
          <Stack spacing={0}>
            <Text size={30} align="center" fw={"bold"}>
              PAYMENT
            </Text>
            <Text size={14} align="center">
              {rowData?.quotation_ID}
            </Text>
          </Stack>
          <Text size={14} align="right">
            <strong> Payment Date: -</strong>{" "}
            {new Date(rowData?.createdAt).toDateString()}
          </Text>
          <Divider my="sm" variant="dashed" />
          <Divider my="sm" variant="dashed" />

          <SimpleGrid cols={2} spacing={10}>
            {rowData?.client.UID && (
              <Group spacing={10}>
                <Text size={14} fw={"bold"}>
                  Client ID
                </Text>
                <Text size={14}>{rowData.client.UID}</Text>
              </Group>
            )}
            {rowData?.client.client_name && (
              <Group spacing={10}>
                <Text size={14} fw={"bold"}>
                  Client Name
                </Text>
                <Text size={14}>{rowData.client.client_name}</Text>
              </Group>
            )}
            {rowData?.client?.client_email && (
              <Group spacing={10}>
                <Text size={14} fw={"bold"}>
                  Client Email
                </Text>
                <Text size={14}>{rowData.client?.client_email}</Text>
              </Group>
            )}
            {rowData?.client.client_contact_number && (
              <Group spacing={10}>
                <Text size={14} fw={"bold"}>
                  Client Contact
                </Text>
                <Text size={14}>{rowData.client?.client_contact_number}</Text>
              </Group>
            )}
          </SimpleGrid>
          <Divider my="sm" variant="dashed" />

          <Grid mt={20}>
            <Grid.Col span={6}>
              <Text size={18} fw={"bold"}>
                Amount Received
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text size={18}>
                {CurrencyFormatter(rowData?.amount_received)}
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text size={18} fw={"bold"}>
                AMount Received (In Words)
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text size={18}>{rowData?.amount_received_in_words}</Text>
            </Grid.Col>
          </Grid>
          <Divider my="sm" size={2} color="gray" />

          <Flex direction={"column"} align={"flex-end"} mt={440}>
            <Divider my="sm" w={250} />
            <Text size={18} fw={"bold"}>
              Signature
            </Text>
          </Flex>
        </ForwardRefWrapper>
      </div>
    </>
  );
};
export default ReceiptPrint;
