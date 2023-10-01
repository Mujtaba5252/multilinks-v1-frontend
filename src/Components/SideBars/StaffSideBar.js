import { CurrencyDollar, LayoutDashboard, Plus, Man } from "tabler-icons-react";
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
    icon: Man,
  },
  {
    label: "Quotations",
    Link: staffRoutes.viewQuotation,
    icon: CurrencyDollar,
  },
  {
    label: "Payments Invoice",
    Link: staffRoutes.viewPaymentInvoice,
    icon: CurrencyDollar,
  },
  {
    label: "Commissions",
    Link: staffRoutes.staffDashboard,
    icon: CurrencyDollar,
  },
  {
    label: "Leave Request",
    Link: staffRoutes.staffDashboard,
    icon: CurrencyDollar,
  },
];
