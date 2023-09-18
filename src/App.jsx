import { Button } from "@mantine/core";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../src/Components/Layout";
import { routes, adminRoutes, staffRoutes } from "../src/routes";
import Login from "./Components/Login/Login";
import Admin from "./Portals/Admin/Admin";
import Staff from "./Portals/Staff/Staff";
import LandingPage from "./Components/LandingPage/LandingPage";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import { Token, Role } from "./Utils/UserDetails";
import { useContext, useEffect } from "react";
import { UserContext } from "./Contexts/UserContext";
import Appshell from "./Components/AppShell/Appshell";
import StaffView from "./Portals/Admin/HumanResource/Staff/StaffView";
const isValidToken = () => {
  const token = Token();
  return !!token;
};
function App() {
  const { user, userType, isAdmin, isStaff } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const tokenExists = isValidToken();
    if (tokenExists) {
      isAdmin ? navigate(routes.dashboard) : navigate(routes.staffDashboard);
    }
  }, []);
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index path={routes.login} element={<Login/>} />
        <Route path="/*" element={<RequireAuth allowedRole={[]} />} />
        <Route element={<RequireAuth allowedRole={["admin"]} />}>
          <Route path={routes.admin} element={<Appshell />}>
            <Route
              index
              path={adminRoutes.adminDashboard}
              element={<Admin />}
            />
            <Route path={adminRoutes.humanResource}>
              <Route
                index
                path={adminRoutes.staffView}
                element={<StaffView />}
              />
              <Route path={adminRoutes.leaves} />
            </Route>
            <Route path={adminRoutes.accounts}>
              <Route path={adminRoutes.qutotations} />
              <Route path={adminRoutes.invoices} />
              <Route path={adminRoutes.receipts} />
              <Route path={adminRoutes.salariesAndCommissions} />
            </Route>
            <Route path={adminRoutes.licenses} />
          </Route>
        </Route>
        <Route element={<RequireAuth allowedRole={["staff"]} />}>
          <Route path={routes.staff} element={<Appshell />}>
            <Route
              index
              path={staffRoutes.staffDashboard}
              element={<Staff />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
