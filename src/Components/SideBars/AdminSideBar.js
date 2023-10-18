import {
  Blockquote,
  Cash,
  CurrencyDollar,
  DoorExit,
  FileInvoice,
  FileUnknown,
  LayoutDashboard,
  Man,
  Receipt,
  UserPlus,
  Users,
} from "tabler-icons-react";
import { routes, adminRoutes } from "../../routes";

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
    icon: Users,
    Links: [
      {
        order: 102,
        label: "Staff",
        Link: adminRoutes.staffView,
        icon: UserPlus,
      },
      {
        order: 103,
        label: "Leave Request",
        Link: adminRoutes.leaves,
        icon: DoorExit,
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
        icon: Blockquote,
      },
      {
        order: 106,
        label: "Invoices",
        Link: adminRoutes.invoices,
        icon: FileInvoice,
      },
      {
        order: 107,
        label: "Receipts",
        Link: adminRoutes.receipts,
        icon: Receipt,
      },
      {
        order: 108,
        label: "Commissions",
        Link: adminRoutes.commissions,
        icon: Cash,
      },
    ],
  },
  {
    order: 109,
    label: "Licenses",
    Link: adminRoutes.viewLicenses,
    icon: FileUnknown,
  },
];
