import ActionIcons from "../../../../Components/ActionIcons/ActionIcons";

export const CommissionViewHeader = () => {
    return [
        {
            name: "S.No",
            selector: (row, index) => index + 1,
            sortable: true,
            width: "80px",
        },
        {
            name: "Staff ID",
            selector: (row) => row.staff.staff_ID,
            sortable: true,
            width: "130px",
            wrap: true,
        },
        {
            name: "Staff Name",
            selector: (row) => row.staff.name,
            sortable: true,
            wrap: true,
        },
        {
            name: "Commission ID",
            selector: (row) => row.commission_ID,
            sortable: true,
            wrap: true,
        },

        {
            name: "Commission Amount",
            selector: (row) => row.staff.name,
            sortable: true,
            wrap: true,
        },
        {
            name: "Commission Percentage",
            selector: (row) => row.commission_percentage+"%",
            sortable: true,
            wrap: true,
        },
        {
            name: "Actions",
            cell: (row) => {
                return(
                    <ActionIcons/>
                )
            },
            sortable: true,
        },
    ];
};
