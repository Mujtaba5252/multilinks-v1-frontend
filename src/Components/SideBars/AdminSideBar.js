import { routes } from "../../routes";

export const AdminSidebar = [
  {
    order:100,
    label: "Dashboard",
    Link: routes.adminDashboard,
    icon: "",
  },
  {
    order:101,
    label: "Human Resource",
    icon: "",
    Links: [
      {
        order:102,
        label: "Staff",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        order:103,
        label: "Leave Request",
        Link: routes.adminDashboard,
        icon: "",
      },
    ],
  },
  {
    order:104,
    label: "Accounts",
    Links: [
      {
        order:105,
        label: "Quotations",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        order:106,
        label: "Invoices",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        order:107,
        label: "Receipts",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        order:108,
        label: "Salaries & Commissions",
        Link: routes.adminDashboard,
        icon: "",
      },
    ],
    icon: "",
  },
  {
    order:109,
    label: "Licenses",
    Link: routes.adminDashboard,
    icon: "",
  },
];
