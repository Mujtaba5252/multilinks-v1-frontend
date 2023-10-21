import {
  Accordion,
  Badge,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import React from "react";
import {
  Calendar,
  ClipboardTypography,
  CurrencyDirham,
  Flag,
  Id,
  Mail,
  Man,
  Phone,
  Photo,
  StatusChange,
} from "tabler-icons-react";
import { MainBlue } from "../../../Utils/ThemeColors";
import { useMediaQuery } from "@mantine/hooks";

const QuotationViewModal = ({ row }) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Paper>
      <Flex direction={"column"} align={"left"} w={"100%"}>
        <Text fw={700} size={18} color={MainBlue()} mb={10} underline>
          Client Details
        </Text>
        <SimpleGrid cols={2}>
          {row?.client?.client_name && (
            <>
              <Group noWrap>
                {!matches && <Man />}
                <Text color="#0487FF" fw={"md"}>
                  Client ID :
                </Text>
              </Group>
              <Text>{row?.client?.UID}</Text>{" "}
            </>
          )}
          {row?.client?.client_name && (
            <>
              <Group noWrap>
                {!matches && <Man />}
                <Text color="#0487FF" fw={"md"}>
                  Client Name :
                </Text>
              </Group>
              <Text>{row?.client?.client_name}</Text>{" "}
            </>
          )}
          {row?.client?.client_email && (
            <>
              <Group noWrap>
                {!matches && <Mail />}
                <Text color="#0487FF">Client Email :</Text>
              </Group>
              <Text>{row?.client?.client_email}</Text>{" "}
            </>
          )}
          {row?.client?.client_nationality && (
            <>
              <Group noWrap>
                {!matches && <Flag />}
                <Text color="#0487FF">Client Nationality :</Text>
              </Group>
              <Text>{row?.client?.client_nationality}</Text>
            </>
          )}
          {row?.client?.client_contact_number && (
            <>
              <Group noWrap>
                {!matches && <Phone />}
                <Text color="#0487FF">Client Number :</Text>
              </Group>
              <Text>{row?.client?.client_contact_number}</Text>
            </>
          )}
        </SimpleGrid>
        <Text fw={700} underline size={18} color={MainBlue()} mb={10} mt={10}>
          Quotation Details
        </Text>
        <SimpleGrid cols={2}>
          {row?.status && (
            <>
              <Group noWrap>
                {!matches && <StatusChange />}
                <Text color="#0487FF" fw={"md"}>
                  Status :
                </Text>
              </Group>
              <Badge
                w={120}
                variant="filled"
                color={
                  row.status == "Approved"
                    ? "green"
                    : row.status == "Pending"
                    ? "yellow"
                    : row.status == "Rejected"
                    ? "red"
                    : "blue"
                }
              >
                {row?.status}
              </Badge>{" "}
            </>
          )}
          {row?.quotation_ID && (
            <>
              <Group noWrap>
                {!matches && <Id />}
                <Text color="#0487FF" fw={"md"}>
                  Quotation ID :
                </Text>
              </Group>
              <Text>{row?.quotation_ID}</Text>{" "}
            </>
          )}
          {row?.quotation_date && (
            <>
              <Group noWrap>
                {!matches && <Calendar />}
                <Text color="#0487FF" fw={"md"}>
                  Quotation Date :
                </Text>
              </Group>
              <Text>{(row?.quotation_date).split("T")[0]}</Text>{" "}
            </>
          )}

          {row?.service_type_additional_fields?.visa_status && (
            <>
              <Group noWrap>
                {!matches && <Man />}
                <Text color="#0487FF" fw={"md"}>
                  Visa Status :
                </Text>
              </Group>
              <Text>{row?.service_type_additional_fields?.visa_status}</Text>{" "}
            </>
          )}
          {row?.service_type && (
            <>
              <Group noWrap>
                {!matches && <ClipboardTypography />}
                <Text color="#0487FF" fw={"md"}>
                  Service Type :
                </Text>
              </Group>
              <Text>{row?.service_type}</Text>{" "}
            </>
          )}
          {row?.service_charges !== undefined && (
            <>
              <Group noWrap>
                {!matches && <CurrencyDirham />}
                <Text color="#0487FF" fw={"md"}>
                  Service Charges :
                </Text>
              </Group>
              <Text>{row?.service_charges}</Text>{" "}
            </>
          )}
        </SimpleGrid>
        <Accordion variant="separated" mt={10} mb={10}>
          <Accordion.Item value="offeredServices">
            <Accordion.Control
              color={"blue"}
              icon={<Photo size={25} style={{ paddingLeft: "2px" }} />}
              p={2}
              pt={0}
              pb={0}
              pr={10}
              
              style={{
                border: "0.5px solid #0487FF",
                color: "white",
                backgroundColor: "#0487FF",
                fontWeight: "bold",
              }}
            >
              Offered Services
            </Accordion.Control>
            <Accordion.Panel>
              {row?.offered_services?.map((service) => {
                return (
                  <SimpleGrid cols={!matches ? 4 : 2}>
                    <Group noWrap>
                      <Text color="#0487FF" fw={"md"}>
                        Service :
                      </Text>
                    </Group>
                    <Text>{service?.service}</Text>{" "}
                    <Group noWrap>
                      <Text color="#0487FF" fw={"md"}>
                        Amount :
                      </Text>
                    </Group>
                    <Text>{service?.amount}</Text>{" "}
                  </SimpleGrid>
                );
              })}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <SimpleGrid cols={2}>
          {row?.total !== undefined && (
            <>
              <Group noWrap>
                {!matches && <CurrencyDirham />}

                <Text color="#0487FF" fw={"md"}>
                  Total :
                </Text>
              </Group>
              <Text>{row?.total}</Text>{" "}
            </>
          )}
          {row?.discount !== undefined && (
            <>
              <Group noWrap>
                {!matches && <CurrencyDirham />}

                <Text color="#0487FF" fw={"md"}>
                  Discount :
                </Text>
              </Group>
              <Text>{row?.discount}</Text>{" "}
            </>
          )}
          {row?.grand_total_numeric !== undefined && (
            <>
              <Group noWrap>
                {!matches && <CurrencyDirham />}

                <Text color="red" fw={"md"}>
                  Grand Total :
                </Text>
              </Group>
              <Text>{row?.grand_total_numeric}</Text>{" "}
            </>
          )}
          {row?.grand_total_in_words !== undefined && (
            <>
              <Group noWrap>
                {!matches && <CurrencyDirham />}

                <Text color="red" fw={"md"}>
                  Grand Total(In Words) :
                </Text>
              </Group>
              <Text>{row?.grand_total_in_words}</Text>{" "}
            </>
          )}
        </SimpleGrid>
      </Flex>
    </Paper>
  );
};

export default QuotationViewModal;
