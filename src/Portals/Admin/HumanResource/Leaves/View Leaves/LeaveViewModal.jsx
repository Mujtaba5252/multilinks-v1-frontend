import { Badge, Flex, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { ClockHour3, File, Id, Man, StatusChange } from "tabler-icons-react";

const LeaveViewModal = ({ row }) => {
  return (
    <Paper>
      <Flex direction={"column"} align="left" w={"100%"}>
        <SimpleGrid cols={2}>
          {row?.staff?.name && (
            <>
              <Group>
                <Man />
                <Text color="#0487FF" fw={"md"}>
                  Client Name :
                </Text>
              </Group>
              <Text>{row?.staff?.name}</Text>{" "}
            </>
          )}
          {row?.status && (
            <>
              <Group>
                <StatusChange />
                <Text color="#0487FF" fw={"md"}>
                  Status :
                </Text>
              </Group>
              <Badge
                w={"50%"}
                variant="filled"
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
          {row?.staff_leave_ID && (
            <>
              <Group>
                <Id />
                <Text color="#0487FF" fw={"md"}>
                  Leave ID :
                </Text>
              </Group>
              <Text>{row?.staff_leave_ID}</Text>{" "}
            </>
          )}
          {row?.createdAt && (
            <>
              <Group>
                <ClockHour3 />
                <Text color="#0487FF" fw={"md"}>
                  Applied Date :
                </Text>
              </Group>
              <Text>{new Date(row?.createdAt).toDateString()}</Text>{" "}
            </>
          )}
          {row?.leave_date && (
            <>
              <Group>
                <ClockHour3 />
                <Text color="#0487FF" fw={"md"}>
                  Leave Date :
                </Text>
              </Group>
              <Text>{new Date(row?.leave_date).toDateString()}</Text>{" "}
            </>
          )}

          {row?.subject && (
            <>
              <Group>
                <File />
                <Text color="#0487FF" fw={"md"}>
                  Subject :
                </Text>
              </Group>
              <Text>{row?.subject}</Text>{" "}
            </>
          )}
          {row?.reason && (
            <>
              <Group>
                <File />
                <Text color="#0487FF" fw={"md"}>
                  Reason :
                </Text>
              </Group>
              <Text>{row?.reason}</Text>{" "}
            </>
          )}
        </SimpleGrid>
      </Flex>
    </Paper>
  );
};

export default LeaveViewModal;
