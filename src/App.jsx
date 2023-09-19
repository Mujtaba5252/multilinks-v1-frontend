import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../src/Components/Layout";
import { adminRoutes, routes, staffRoutes } from "../src/routes";
import "./App.css";
import Appshell from "./Components/AppShell/Appshell";
import Login from "./Components/Login/Login";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import { UserContext } from "./Contexts/UserContext";
import Admin from "./Portals/Admin/Admin";
import StaffView from "./Portals/Admin/HumanResource/Staff/StaffView";
import AddClient from "./Portals/Staff/AddClient/AddClient";
import StaffDashboard from "./Portals/Staff/StaffDashboard/StaffDashboard";
import { Token } from "./Utils/UserDetails";
import ViewClients from "./Portals/Staff/ViewClients/ViewClients";
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
    <>
      <Toaster />
      <Routes>
        <Route path={routes.home} element={<Layout />}>
          <Route path={routes.home} element={<Login />} />
          <Route index path={routes.login} element={<Login />} />
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
                element={<StaffDashboard />}
              />
              <Route path={staffRoutes.viewClient} element={<ViewClients />} />
              <Route path={staffRoutes.addClient} element={<AddClient />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
