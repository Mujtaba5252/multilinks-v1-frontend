import { Button } from "@mantine/core";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../src/Components/Layout";
import { routes } from "../src/routes";
import Login from "./Components/Login/Login";
import Admin from "./Portals/Admin/Admin";
// import Staff from "./Portals/Staff/Staff";
import LandingPage from "./Components/LandingPage/LandingPage";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import { Token, Role } from "./Utils/UserDetails";
import { useContext, useEffect } from "react";
import { UserContext } from "./Contexts/UserContext";
import Appshell from "./Components/AppShell/Appshell";
import StaffDashboard from "./Portals/Staff/StaffDashboard/StaffDashboard";
import AdminDashboard from "./Portals/Admin/AdminDashboard/AdminDashboard";
import AddStaff from "./Portals/Admin/AddStaff/AddStaff";
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
        <Route path={routes.home} element={<LandingPage />} />
        <Route path={routes.login} element={<Login />} />
        <Route path="/*" element={<RequireAuth allowedRole={[]} />} />
        <Route element={<RequireAuth allowedRole={["admin"]} />}>
          <Route path={routes.adminDashboard} element={<Appshell />} />
          <Route path={routes.adminDashboard} element={<AdminDashboard />} />
          <Route path={routes.addStaff} element={<AddStaff />} />
        </Route>
        <Route element={<RequireAuth allowedRole={["staff"]} />}>
          <Route path={routes.staffDashboard} element={<Appshell />} />
          <Route path={routes.staffDashboard} element={<StaffDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
