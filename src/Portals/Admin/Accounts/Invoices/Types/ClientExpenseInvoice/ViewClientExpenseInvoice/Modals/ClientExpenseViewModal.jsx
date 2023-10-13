import { Badge, Flex, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import {
  ArrowForwardUp,
  ClipboardTypography,
  CurrencyDirham,
  Id,
  Man,
  Servicemark,
  StatusChange,
} from "tabler-icons-react";
import { CurrencyFormatter } from "../../../../../../../../Utils/CommonFormatters";

const ClientExpenseViewModal = ({ row }) => {
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
    </Paper>
  );
};

export default ClientExpenseViewModal;
