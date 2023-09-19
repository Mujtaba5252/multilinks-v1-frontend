import { CurrencyDollar, LayoutDashboard, Plus } from "tabler-icons-react";
import { routes, staffRoutes } from "../../routes";

export const StaffSideBar = [
  {
    label: "Dashboard",
    Link: staffRoutes.staffDashboard,
    icon: LayoutDashboard,
  },
  {
    label: "My Client",
    Link: staffRoutes.addClient,
    icon: Plus,
  },
  {
    label: "Qoutations",
    Link: staffRoutes.staffDashboard,
    icon: CurrencyDollar,
  },
  {
    label: "Payments Invoice",
    Link: staffRoutes.staffDashboard,
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
