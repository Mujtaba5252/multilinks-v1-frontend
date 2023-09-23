import {
  Badge,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Flag, Mail, Man, Phone } from "tabler-icons-react";

const ClientViewModal = ({ row }) => {
  console.log(row);
  return (
    <Paper>
      <Flex direction={"column"} align="center" w={"100%"}>
        <SimpleGrid cols={2}>
          {row?.client_name && (
            <>
              <Group>
                <Man />
                <Text color="#0487FF" fw={"md"}>
                  Client Name :
                </Text>
              </Group>
              <Text>{row?.client_name}</Text>{" "}
            </>
          )}
          {row?.client_email && (
            <>
              <Group>
                <Mail />
                <Text color="#0487FF">Client Email :</Text>
              </Group>
              <Text>{row?.client_email}</Text>{" "}
            </>
          )}
          {row?.client_nationality && (
            <>
              <Group>
                <Flag />
                <Text color="#0487FF">Client Nationality :</Text>
              </Group>
              <Text>{row?.client_nationality}</Text>
            </>
          )}
          {row?.client_contact_number && (
            <>
              <Group>
                <Phone />
                <Text color="#0487FF">Client Contact Number :</Text>
              </Group>
              <Text>{row?.client_contact_number}</Text>
            </>
          )}
          {row?.client_optional_contact && (
            <>
              <Group>
                <Phone />
                <Text color="#0487FF">Optional Contact Number :</Text>
              </Group>
              <Text>{row?.client_optional_contact}</Text>
            </>
          )}
        </SimpleGrid>
      </Flex>
    </Paper>
  );
};

export default ClientViewModal;
