import { routes } from "../../routes";

export const AdminSidebar = [
  {
    label: "Dashboard",
    Link: routes.adminDashboard,
    icon: "",
  },
  {
    label: "Human Resource",
    icon: "",
    Links: [
      {
        label: "Staff",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        label: "Leave Request",
        Link: routes.adminDashboard,
        icon: "",
      },
    ],
  },
  {
    label: "Accounts",
    Links: [
      {
        label: "Quotations",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        label: "Invoices",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        label: "Receipts",
        Link: routes.adminDashboard,
        icon: "",
      },
      {
        label: "Salaries & Commissions",
        Link: routes.adminDashboard,
        icon: "",
      },
    ],
    icon: "",
  },
  {
    label: "Licenses",
    Link: routes.adminDashboard,
    icon: "",
  },
];
