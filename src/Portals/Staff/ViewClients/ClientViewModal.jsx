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
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import {
  Cloud,
  CloudUpload,
  Download,
  Flag,
  Mail,
  Man,
  Phone,
} from "tabler-icons-react";

const ClientViewModal = ({ row }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <Paper>
      <Flex direction={"column"} align="left" w={"100%"}>
        <SimpleGrid cols={2}>
          {row?.client_name && (
            <>
              <Group>
                {matches && <Man />}
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
                {matches && <Mail />}
                <Text color="#0487FF">Client Email :</Text>
              </Group>
              <Text>{row?.client_email}</Text>{" "}
            </>
          )}
          {row?.client_nationality && (
            <>
              <Group>
                {matches && <Flag />}
                <Text color="#0487FF">Client Nationality :</Text>
              </Group>
              <Text>{row?.client_nationality}</Text>
            </>
          )}
          {row?.client_contact_number && (
            <>
              <Group>
                {matches && <Phone />}
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
      <Grid>
        <Grid.Col>
          <Divider my={"xs"} />
          {row?.attachments.map((item, index) => {
            return (
              <Anchor href={item?.path} target="_blank">
                <Group
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {matches && <CloudUpload color="red" />}
                  <Text size={"lg"} weight="bold" color="red">
                    Client Attachments ({index + 1})
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

export default ClientViewModal;
