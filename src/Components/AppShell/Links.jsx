import { useTheme } from "@emotion/react";
import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import React from "react";
import {
  ChevronRight,
  CurrencyDollar,
  Dashboard,
  FileInvoice,
  Man,
} from "tabler-icons-react";
import "./Link.css";
const Links = ({ icon, label, color }) => {
  console.log("icon", icon);
  const theme = useTheme();
  const data = [
    {
      label: "Dashboard",
      icon: (
        <Dashboard
          style={{
            color: "white",
            border: "0px solid white",
            backgroundColor: "transparent",
          }}
        />
      ),
    },
    {
      label: "Add Client",
      icon: <Man />,
    },
    {
      label: "Quotations",
      icon: <CurrencyDollar />,
    },
    {
      label: "Payment Invoice",
      icon: <FileInvoice />,
    },
    {
      label: "Commissions",
      icon: <CurrencyDollar />,
    },
    {
      label: "Leave Request",
      icon: <FileInvoice />,
    },
  ];
  return data.map((item) => (
    <UnstyledButton
      className="isActive"
      style={{
        display: "block",
        width: "100%",
        borderRadius: "1px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <Group>
        <ThemeIcon size={"lg"}>{item.icon}</ThemeIcon>

        <Text size="md" fw={100} color="white">
          {item.label}
        </Text>
      </Group>
    </UnstyledButton>
  ));
};

export default Links;
