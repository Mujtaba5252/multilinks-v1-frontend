export const routes = {
  home: "/",
  login: "/login",
  admin: "/admin",
  staff: "/staff",
};
export const adminRoutes = {
  adminDashboard: "/admin/dashboard",
  humanResource: "/admin/humanResource",
  staffView: "/admin/humanResource/staff",
  leaves: "/admin/humanResource/leaves",
  accounts: "/admin/accounts",
  qutotations: "/admin/accounts/qutotations",
  invoices: "/admin/accounts/invoices",
  paymentsInvoice: "/admin/accounts/invoices/payments",
  clientExpenseInvoice: "/admin/accounts/invoices/clientExpenses",
  officeExpenseInvoice: "/admin/accounts/invoices/officeExpenses",
  receipts: "/admin/accounts/receipts",
  paymentsReceipts: "/admin/accounts/receipts/payments",
  clientExpenseReceipts: "/admin/accounts/receipts/clientExpenses",
  officeExpenseReceipts: "/admin/accounts/receipts/officeExpenses",
  salariesAndCommissions: "/admin/accounts/salariesAndCommissions",
  licenses: "/admin/licenses",
};
export const staffRoutes = {
  staffDashboard: "/staff/dashboard",
  viewClient: "/staff/viewClient",
  addClient: "/staff/addClient",
  editClient: "/staff/addClient/:editId",
  addQuotation: "/staff/addQuotation",
  viewQuotation: "/staff/viewQuotations",
  addPaymentInvoice: "/staff/addPaymentInvoice",
  viewPaymentInvoice: "/staff/viewPaymentInvoice",
};
