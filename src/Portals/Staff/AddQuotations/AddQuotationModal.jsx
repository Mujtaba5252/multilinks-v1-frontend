import React, { useEffect, useState } from "react";
import ModalComponent from "../../../Components/ModalComponent/ModalComponent";
import { Paper } from "@mantine/core";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { QuotationHeader } from "./ModalHeader";
import { axios_get } from "../../../Utils/Axios";

const AddQuotationModal = () => {
  const [ClientData, setClientData] = useState([]);

  const getCleintData = async () => {
    axios_get({ url: "/client", withSNo: true })
      .then((res) => {
        console.log(res.data.data);
        setClientData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getCleintData();
  }, []);
  return (
    <Paper>
      <DataGrid
        columns={QuotationHeader()}
        data={ClientData}
        pagination={true}
      />
    </Paper>
  );
};

export default AddQuotationModal;
