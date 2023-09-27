import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import { staffRoutes } from "../../../routes";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { QuotationHeader } from "./QuotationHeader";
import { useNavigate } from "react-router-dom";
import { axios_get } from "../../../Utils/Axios";
import ModalComponent from "../../../Components/ModalComponent/ModalComponent";
import AddQuotationModal from "../AddQuotations/AddQuotationModal";

const ViewQuotations = () => {
  const navigate = useNavigate();
  const [QuotationData, setQuotationData] = useState([]);
  const [openViewModal, setOpenViewModal] = useState(false);

  const getQuotationData = async () => {
    axios_get({ url: "/quotation" }).then((res) => {
      console.log(res.data.data);
      setQuotationData(res.data.data);
    });
  };
  useEffect(() => {
    getQuotationData();
  }, []);

  return (
    <PageWrapper title={"View Quotations"}>
      <ModalComponent //for view modal component
        opened={openViewModal}
        setOpened={setOpenViewModal}
        radius
        // title={"Add Quotation"}
        size={1200}
      >
        <AddQuotationModal />
      </ModalComponent>
      <Group position="right" my={20} onClick={() => setOpenViewModal(true)}>
        <Button variant="filled">ADD Quotations</Button>
      </Group>
      <DataGrid
        columns={QuotationHeader()}
        data={QuotationData}
        pagination={true}
      />
    </PageWrapper>
  );
};

export default ViewQuotations;
