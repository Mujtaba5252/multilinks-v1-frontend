import React, { useEffect, useState } from "react";
import PageWrapper from "../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import { staffRoutes } from "../../../routes";
import DataGrid from "../../../Components/DataTable/DataGrid";
import { QuotationHeader } from "./QuotationHeader";
import { useNavigate } from "react-router-dom";
import { axios_get } from "../../../Utils/Axios";

const ViewQuotations = () => {
  const navigate = useNavigate();
  const [QuotationData, setQuotationData] = useState([]);

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
      <Group
        position="right"
        my={20}
        onClick={() => navigate(staffRoutes.addQuotation)}
      >
        <Button variant="filled">ADD Quotations</Button>
      </Group>
      <DataGrid
        columns={QuotationHeader()}
        data={QuotationData}
        pagination={true}
        noDataComponent={false}
      />
    </PageWrapper>
  );
};

export default ViewQuotations;
