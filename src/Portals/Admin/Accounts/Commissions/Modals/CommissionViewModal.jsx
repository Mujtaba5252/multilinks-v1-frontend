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
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import {
  ArrowAutofitRight,
  CloudUpload,
  CurrencyDirham,
  Id,
  Man,
} from "tabler-icons-react";
import { CurrencyFormatter } from "../../../../../Utils/CommonFormatters";

const CommissionViewModal = ({ row }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Paper>
      <Flex direction={"column"} align={"left"} w={"100%"}>
        {" "}
        <SimpleGrid cols={2}>
          {row?.commission_ID && (
            <>
              <Group noWrap>
                <Id />
                <Text color="#0487FF" fw={"md"}>
                  Commission ID
                </Text>
              </Group>
              <Text>{row?.commission_ID}</Text>{" "}
            </>
          )}
          {row?.staff?.name && (
            <>
              <Group noWrap>
                <Man />
                <Text color="#0487FF" fw={"md"}>
                  Staff Name
                </Text>
              </Group>
              <Text>{row?.staff?.name}</Text>{" "}
            </>
          )}
          {row?.staff?.staff_ID && (
            <>
              <Group noWrap>
                <Man />
                <Text color="#0487FF" fw={"md"}>
                  Staff ID
                </Text>
              </Group>
              <Text>{row?.staff?.staff_ID}</Text>{" "}
            </>
          )}

          {row?.commission_amount && (
            <>
              <Group noWrap>
                <CurrencyDirham />
                <Text color="#0487FF" fw={"md"}>
                  Commission Amount
                </Text>
              </Group>
              <Text>{CurrencyFormatter(row?.commission_amount)}</Text>{" "}
            </>
          )}
          {row?.commission_percentage && (
            <>
              <Group noWrap>
                <CurrencyDirham />
                <Text color="#0487FF" fw={"md"}>
                  Commission Percentage
                </Text>
              </Group>
              <Text>{`${row?.commission_percentage} %`}</Text>{" "}
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

export default CommissionViewModal;
