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
import StaffView from "./Portals/Admin/HumanResource/Staff/View Staff/StaffView";
import AddClient from "./Portals/Staff/AddClient/AddClient";
import StaffDashboard from "./Portals/Staff/StaffDashboard/StaffDashboard";
import { Token } from "./Utils/UserDetails";
import ViewClients from "./Portals/Staff/ViewClients/ViewClients";
import LeavesView from "./Portals/Admin/HumanResource/Leaves/View Leaves/LeavesView";
import QuotationView from "./Portals/Admin/Accounts/Quotation/QuotationView";
import Index from "./Portals/Admin/Accounts/Invoices/Index";
import PaymentView from "./Portals/Admin/Accounts/Invoices/Types/PaymentInvoice/ViewPayments/PaymentView";
import ClientExpenseView from "./Portals/Admin/Accounts/Invoices/Types/ClientExpenseInvoice/ViewClientExpenseInvoice/ClientExpenseView";
import OfficeExpenseView from "./Portals/Admin/Accounts/Invoices/Types/OfficeExpense/ViewOfficeExpense/OfficeExpenseView";
import AdminDashboard from "./Portals/Admin/AdminDashboard/AdminDashboard";
import ViewQuotations from "./Portals/Staff/ViewQuotations/ViewQuotations";
import AddQuotations from "./Portals/Staff/AddQuotations/AddQuotations";
import AddPaymentInvoice from "./Portals/Staff/AddPaymentInvoice/AddPaymentInvoice";
import ViewPaymentInvoice from "./Portals/Staff/ViewPaymentInvoice/ViewPaymentInvoice";
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
                element={<AdminDashboard />}
              />
              <Route path={adminRoutes.humanResource}>
                <Route
                  index
                  path={adminRoutes.staffView}
                  element={<StaffView />}
                />
                <Route path={adminRoutes.leaves} element={<LeavesView />} />
              </Route>
              <Route path={adminRoutes.accounts}>
                <Route
                  path={adminRoutes.qutotations}
                  element={<QuotationView />}
                />
                <Route
                  path={adminRoutes.invoices}
                  element={<Index isInvoice={true} />}
                />
                <Route
                  path={adminRoutes.paymentsInvoice}
                  element={<PaymentView isInvoice={true} />}
                />
                <Route
                  path={adminRoutes.clientExpenseInvoice}
                  element={<ClientExpenseView isInvoice={true} />}
                />
                <Route
                  path={adminRoutes.officeExpenseInvoice}
                  element={<OfficeExpenseView isInvoice={true} />}
                />
                <Route
                  path={adminRoutes.receipts}
                  element={<Index isInvoice={false} />}
                />
                <Route
                  path={adminRoutes.paymentsReceipts}
                  element={<PaymentView isInvoice={false} />}
                />
                <Route
                  path={adminRoutes.clientExpenseReceipts}
                  element={<ClientExpenseView isInvoice={false} />}
                />
                <Route
                  path={adminRoutes.officeExpenseReceipts}
                  element={<OfficeExpenseView isInvoice={false} />}
                />
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
              <Route path={staffRoutes.editClient} element={<AddClient />} />
              <Route
                path={staffRoutes.viewQuotation}
                element={<ViewQuotations />}
              />
              <Route
                path={staffRoutes.addQuotation}
                element={<AddQuotations />}
              />
              <Route path={staffRoutes.addPaymentInvoice} element={<AddPaymentInvoice/>}/>
              <Route path={staffRoutes.viewPaymentInvoice} element={<ViewPaymentInvoice/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
