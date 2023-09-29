import { ChartBar, Eye, Man, Pencil, Trash } from "tabler-icons-react";
import { Amber, MainBlue,Red } from "../../../../../Utils/ThemeColors";
import ActionIcons from "../../../../../Components/ActionIcons/ActionIcons";
import { adminRoutes } from "../../../../../routes";
import ViewModal from "./Modal/ViewModal";
import DeleteModal from "./Modal/DeleteModal";

export const StaffViewHeader = ({setUpdate}) => {
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
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true,
      wrap: true,
    },
    {
      name: "CNIC",
      selector: (row) => row.CNIC_NIN,
      sortable: true,
      wrap: true,
    },

    {
      name: "VISA Status",
      selector: (row) => row.visa_status,
      sortable: true,
      wrap: true,
    },
    {
      name: "Expiry Date",
      selector: (row) => {
        return row.visa_expiry_date=row.visa_expiry_date.split('T')[0]
      },
      sortable: true,
      wrap: true,
    },
    {
      name: "Actions",
      center: true,
      cell: (row) => {
        return (
      <ActionIcons
        edit={true}
        editUrl={""}
        Delete={true}
        progress={true}
        size={'90vw'}
        ModalTitle={row.name+` (${row.staff_ID})`}
        ProgressModalTitle={"Staff Progress"}
        DeleteModalTitle={`Delete ${row.name} (${row.staff_ID})`}
        ViewModalComponent={<ViewModal Data={row} />}
        ProgressModalComponent={<div>Progress</div>}
        DeleteModalComponent={<DeleteModal Data={row} setUpdate={setUpdate}/>}
          // editUrl={}
      />
        );
      },
      sortable: true,
    },
  ];
};
