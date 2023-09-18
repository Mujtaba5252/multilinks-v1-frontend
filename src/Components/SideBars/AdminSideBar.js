import {
  CurrencyDollar,
  Dashboard,
  FileUnknown,
  LayoutDashboard,
  Man,
} from "tabler-icons-react";
import { routes,adminRoutes } from "../../routes";

export const AdminSidebar = [
  {
    order: 100,
    label: "Dashboard",
    Link: adminRoutes.adminDashboard,
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
        Link: adminRoutes.staffView,
        icon: Man,
      },
      {
        order: 103,
        label: "Leave Request",
        Link: adminRoutes.leaves,
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
        Link: adminRoutes.qutotations,
        icon: CurrencyDollar,
      },
      {
        order: 106,
        label: "Invoices",
        Link: adminRoutes.invoices,
        icon: CurrencyDollar,
      },
      {
        order: 107,
        label: "Receipts",
        Link: adminRoutes.receipts,
        icon: CurrencyDollar,
      },
      {
        order: 108,
        label: "Salaries & Commissions",
        Link: adminRoutes.salariesAndCommissions,
        icon: CurrencyDollar,
      },
    ],
  },
  {
    order: 109,
    label: "Licenses",
    Link: adminRoutes.licenses,
    icon: FileUnknown,
  },
];
