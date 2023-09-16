import { CurrencyDollar, LayoutDashboard, Plus } from "tabler-icons-react";
import { routes } from "../../routes";

export const StaffSideBar = [
  {
    label: "Dashboard",
    Link: routes.staffDashboard,
    icon: LayoutDashboard,
  },
  {
    label: "Add Client",
    Link: routes.staffDashboard,
    icon: Plus,
  },
  {
    label: "Qoutations",
    Link: routes.staffDashboard,
    icon: CurrencyDollar,
  },
  {
    label: "Payments Invoice",
    Link: routes.staffDashboard,
    icon: CurrencyDollar,
  },
  {
    label: "Commissions",
    Link: routes.staffDashboard,
    icon: CurrencyDollar,
  },
  {
    label: "Leave Request",
    Link: routes.staffDashboard,
    icon: CurrencyDollar,
  },
];
