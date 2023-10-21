import React from "react";
import { Group, Image, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { Man } from "tabler-icons-react";
import persons from "../../../assets/svgs/persons.svg";
import { useMediaQuery } from "@mantine/hooks";
import CardStats from "./CardStats";
import FinanceChart from "./FinanceChart";
import RingStats from "./RingStats";

const AdminDashboard = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <div>
      <CardStats />
      <FinanceChart />
      <RingStats />
    </div>
  );
};

export default AdminDashboard;
