import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Grid, Group } from "@mantine/core";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { QuotationHeader } from "./QuotationHeader";
import ModalComponent from "../../../Components/ModalComponent/ModalComponent";
import AddQuotationModal from "../AddQuotations/AddQuotationModal";
import { getQuotationData } from "./QuotationFunctions";
import FilterBarQuotation from "../../Admin/Accounts/Quotation/FilterBarQuotation";
const ViewQuotations = () => {
  const [QuotationData, setQuotationData] = useState([]);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [pagination, setPagination] = useState([]);
  let url = "/quotation";
  useEffect(() => {
    getQuotationData({ url, setQuotationData, setPagination });
  }, []);

  return (
    <PageWrapper title={"VIEW QUOTATIONS"}>
      <ModalComponent //for view modal component
        opened={openViewModal}
        setOpened={setOpenViewModal}
        radius
        size={1200}
      >
        <AddQuotationModal/>
      </ModalComponent>
      <Grid my={15}>
        <Grid.Col span={12} mb={10}>
          <Group position="right" onClick={() => setOpenViewModal(true)}>
            <Button variant="filled">ADD Quotations</Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <FilterBarQuotation currentUrl={url} setQuotationData={setQuotationData} setPagination={setPagination}/>
        </Grid.Col>
      </Grid>

      <DataGrid
        columns={QuotationHeader()}
        data={QuotationData}
        pagination={pagination}
        currentUrl={url}
        setPagination={setPagination}
        setData={setQuotationData}
      />
    </PageWrapper>
  );
};

export default ViewQuotations;
