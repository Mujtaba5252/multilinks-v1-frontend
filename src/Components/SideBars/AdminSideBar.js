import {
  CurrencyDollar,
  Dashboard,
  FileUnknown,
  LayoutDashboard,
  Man,
} from "tabler-icons-react";
import { routes } from "../../routes";

export const AdminSidebar = [
  {
    order: 100,
    label: "Dashboard",
    Link: routes.adminDashboard,
    icon: LayoutDashboard,
  },
  {
    order: 101,
    label: "Human Resource",
    icon: Man,
    Links: [
      {
        order: 102,
        label: "Staff",
        Link: routes.addStaff,
        icon: Man,
      },
      {
        order: 103,
        label: "Leave Request",
        Link: routes.adminDashboard,
        icon: Man,
      },
    ],
  },
  {
    order: 104,
    label: "Accounts",
    icon: CurrencyDollar,
    Links: [
      {
        order: 105,
        label: "Quotations",
        Link: routes.adminDashboard,
        icon: CurrencyDollar,
      },
      {
        order: 106,
        label: "Invoices",
        Link: routes.adminDashboard,
        icon: CurrencyDollar,
      },
      {
        order: 107,
        label: "Receipts",
        Link: routes.adminDashboard,
        icon: CurrencyDollar,
      },
      {
        order: 108,
        label: "Salaries & Commissions",
        Link: routes.adminDashboard,
        icon: CurrencyDollar,
      },
    ],
  },
  {
    order: 109,
    label: "Licenses",
    Link: routes.adminDashboard,
    icon: FileUnknown,
  },
];
