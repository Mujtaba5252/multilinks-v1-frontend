import {
  CurrencyDollar,
  LayoutDashboard,
  Plus,
  Man,
  File,
  FileInvoice,
  CurrencyDirham,
  Cash,
  DoorExit,
  Blockquote,
  UserPlus,
} from "tabler-icons-react";
import { routes, staffRoutes } from "../../routes";

export const StaffSideBar = [
  {
    label: "Dashboard",
    Link: staffRoutes.staffDashboard,
    icon: LayoutDashboard,
  },
  {
    label: "My Client",
    Link: staffRoutes.viewClient,
    icon: UserPlus,
  },
  {
    label: "Quotations",
    Link: staffRoutes.viewQuotation,
    icon: Blockquote,
  },
  {
    label: "Payments Invoice",
    Link: staffRoutes.viewPaymentInvoice,
    icon: FileInvoice,
  },
  {
    label: "Commissions",
    Link: staffRoutes.commissions,
    icon: Cash,
  },
  {
    label: "Leave Request",
    Link: staffRoutes.viewLeaveRequest,
    icon: DoorExit,
  },
];
