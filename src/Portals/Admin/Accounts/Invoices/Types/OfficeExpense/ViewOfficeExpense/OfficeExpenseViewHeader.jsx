import { CircleCheck, CircleX, Eye, Printer } from "tabler-icons-react";

export const OfficeExpenseViewHeader = ({isInvoice}) => {
    return [
        {
          name: "S.No",
          selector: (row, index) => index + 1,
          sortable: true,
          width: "80px",
        },
        {
          name: "Staff ID",
          selector: (row) => row.staff_ID,
          sortable: true,
          width: "130px",
          wrap: true,
        },
        {
          name: "Client Name",
          selector: (row) => row.client_name,
          sortable: true,
          wrap: true,
        },
        {
          name: "Qutation",
          selector: (row) => row.qutation_ID,
          sortable: true,
          wrap: true,
        },
        {
          name: "Payment To",
          selector: (row) => row.payment_to,
          sortable: true,
          wrap: true,
        },
        {
          name: "Payement For",
          selector: (row) => row.payment_for,
          sortable: true,
          wrap: true,
        },
        {
          name: "Amount",
          selector: (row) => row.amount_in_digits,
          sortable: true,
          wrap: true,
        },
        {
          name: "Actions",
          cell: (row) => {
            return (
            <>
              {isInvoice?
              <>
                <Eye />
                <CircleX />
                <CircleCheck/>
              </>
              :
              <>
                <Printer/>
                <Eye/>
              </>
              }
            </>
            );
          },
          sortable: true,
        },
      ];
}