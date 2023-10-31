import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Grid, Group } from "@mantine/core";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { QuotationHeader } from "./QuotationHeader";
import ModalComponent from "../../../Components/ModalComponent/ModalComponent";
import AddQuotationModal from "../AddQuotations/AddQuotationModal";
import { getQuotationData } from "./QuotationFunctions";
import FilterBarQuotation from "../../Admin/Accounts/Quotation/FilterBarQuotation";
import { CirclePlus } from "tabler-icons-react";
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
      <Grid>
        <ModalComponent //for view modal component
          opened={openViewModal}
          setOpened={setOpenViewModal}
          radius
          size={1200}
        >
          <AddQuotationModal />
        </ModalComponent>
        <Grid.Col mt={10} span={12} mb={10}>
          <Group position="right" onClick={() => setOpenViewModal(true)}>
            <Button w={200} leftIcon={<CirclePlus />} variant="filled">
              ADD Quotations
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col mb={10} span={12}>
          <FilterBarQuotation
            currentUrl={url}
            setQuotationData={setQuotationData}
            setPagination={setPagination}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <DataGrid
            columns={QuotationHeader()}
            data={QuotationData}
            pagination={pagination}
            currentUrl={url}
            setPagination={setPagination}
            setData={setQuotationData}
          />
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
};

export default ViewQuotations;
