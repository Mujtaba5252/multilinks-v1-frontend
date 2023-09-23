import { CircleCheck, CircleX, Eye, Printer } from "tabler-icons-react";

export const PaymentViewHeader = (isInvoice) => {
    return [
        {
          name: "S.No",
          selector: (row, index) => index + 1,
          sortable: true,
          width: "80px",
        },
        {
          name: "Client ID",
          selector: (row) => row.client_ID,
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
          name: "Service Type",
          selector: (row) => row.service_type,
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
          name: "Generated By",
          selector: (row) => row.staff_name,
          sortable: true,
          wrap: true,
        },
        {
          name: "Amount",
          selector: (row) => row.amount,
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