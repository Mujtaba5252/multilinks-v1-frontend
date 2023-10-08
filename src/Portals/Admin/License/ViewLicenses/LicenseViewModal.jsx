import { Flex, Group, Paper, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import {
  Activity,
  Calendar,
  CircuitChangeover,
  Id,
  Man,
} from "tabler-icons-react";

const LicenseViewModal = ({ row }) => {
  return (
    <Paper>
      <Flex direction={"column"} align="center" w={"100%"}>
        <SimpleGrid cols={2}>
          {row?.license_ID && (
            <>
              <Group>
                <Id />
                <Text color="#0487FF" fw={"md"}>
                  License ID :
                </Text>
              </Group>
              <Text>{row?.license_ID}</Text>{" "}
            </>
          )}
          {row?.license_activity && (
            <>
              <Group>
                <Activity />
                <Text color="#0487FF">License Activity :</Text>
              </Group>
              <Text>{row?.license_activity}</Text>{" "}
            </>
          )}
          {row?.license_type && (
            <>
              <Group>
                <CircuitChangeover />
                <Text color="#0487FF">License Type :</Text>
              </Group>
              <Text>{row?.license_type}</Text>
            </>
          )}
          {row?.issue_date && (
            <>
              <Group>
                <Calendar />
                <Text color="#0487FF">Issue Date :</Text>
              </Group>
              <Text>{new Date(row?.issue_date).toDateString()}</Text>
            </>
          )}
          {row?.expiry_date && (
            <>
              <Group>
                <Calendar />
                <Text color="#0487FF">Expiry Date :</Text>
              </Group>
              <Text>{new Date(row?.expiry_date).toDateString()}</Text>
            </>
          )}
          {row?.name_of_local_sponsor && (
            <>
              <Group>
                <Man />
                <Text color="#0487FF">Local Person :</Text>
              </Group>
              <Text>{row?.name_of_local_sponsor}</Text>
            </>
          )}
        </SimpleGrid>
      </Flex>
    </Paper>
  );
};

export default LicenseViewModal;
