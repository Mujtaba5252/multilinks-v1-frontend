import {
  Anchor,
  Badge,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import {
  ArrowForwardUp,
  ClipboardTypography,
  CloudUpload,
  CurrencyDirham,
  Id,
  Man,
  Servicemark,
  StatusChange,
} from "tabler-icons-react";
import { CurrencyFormatter } from "../../../../../../../../Utils/CommonFormatters";
import { useMediaQuery } from "@mantine/hooks";

const ClientExpenseViewModal = ({ row }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Paper>
      <Flex direction={"column"} align={"left"} w={"100%"}>
        {" "}
        <SimpleGrid cols={2}>
          {row?.client_expense_ID && (
            <>
              <Group noWrap>
                <Id />
                <Text color="#0487FF" fw={"md"}>
                  Expense ID
                </Text>
              </Group>
              <Text>{row?.client_expense_ID}</Text>{" "}
            </>
          )}
          {row?.quotation?.service_type && (
            <>
              <Group noWrap>
                <ClipboardTypography />
                <Text color="#0487FF" fw={"md"}>
                  Service Type
                </Text>
              </Group>
              <Text>{row?.quotation?.service_type}</Text>{" "}
            </>
          )}
          {row?.payment_to && (
            <>
              <Group noWrap>
                <Man />
                <Text color="#0487FF" fw={"md"}>
                  Payment To
                </Text>
              </Group>
              <Text>{row?.payment_to}</Text>{" "}
            </>
          )}
          {row?.payment_for && (
            <>
              <Group noWrap>
                <ArrowForwardUp />
                <Text color="#0487FF" fw={"md"}>
                  Payment For
                </Text>
              </Group>
              <Text>{row?.payment_for}</Text>{" "}
            </>
          )}
          {row?.expense_amount && (
            <>
              <Group noWrap>
                <CurrencyDirham />
                <Text color="#0487FF" fw={"md"}>
                  Expense Amount
                </Text>
              </Group>
              <Text>{CurrencyFormatter(row?.expense_amount)}</Text>{" "}
            </>
          )}
          {row?.status && (
            <>
              <Group noWrap>
                <StatusChange />
                <Text color="#0487FF" fw={"md"}>
                  Status:
                </Text>
              </Group>
              <Badge
                variant="filled"
                w={"50%"}
                color={
                  row?.status === "Approved"
                    ? "green"
                    : row?.status === "Pending"
                    ? "yellow"
                    : "red"
                }
              >
                {row?.status}
              </Badge>
            </>
          )}
        </SimpleGrid>
      </Flex>
      <Grid>
        <Grid.Col>
          <Divider my={"xs"} />
          {row?.attachments?.map((item, index) => {
            return (
              <Anchor href={item?.path} target="_blank">
                <Group
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {matches && <CloudUpload color="red" />}
                  <Text size={"lg"} weight="bold" color="red">
                    Client Expense Attachments ({index + 1})
                  </Text>
                </Group>
              </Anchor>
            );
          })}
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default ClientExpenseViewModal;
