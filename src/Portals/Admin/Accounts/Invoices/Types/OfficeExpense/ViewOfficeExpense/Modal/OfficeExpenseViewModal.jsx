import {
  Anchor,
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
  ArrowAutofitRight,
  CloudUpload,
  CurrencyDirham,
  Id,
  Man,
} from "tabler-icons-react";
import { CurrencyFormatter } from "../../../../../../../../Utils/CommonFormatters";
import { useMediaQuery } from "@mantine/hooks";

const OfficeExpenseViewModal = ({ row }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Paper>
      <Flex direction={"column"} align={"left"} w={"100%"}>
        {" "}
        <SimpleGrid cols={2}>
          {row?.office_expense_ID && (
            <>
              <Group noWrap>
                <Id />
                <Text color="#0487FF" fw={"md"}>
                  Office Expense ID
                </Text>
              </Group>
              <Text>{row?.office_expense_ID}</Text>{" "}
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
                <ArrowAutofitRight />
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
                    Office Expense Attachments ({index + 1})
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

export default OfficeExpenseViewModal;
