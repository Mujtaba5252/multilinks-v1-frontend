import React, { useState, useEffect } from "react";
import PageWrapper from "../../../../Components/PageWrapper/PageWrapper";
import { Grid } from "@mantine/core";
import DataGrid from "../../../../Components/DataTable/DataGrid";
import { axios_get } from "../../../../Utils/Axios";
import { QuotationViewHeader } from "./QuotationHeader";
import FilterBarQuoatation from "./FilterBarQuotation";
import { fetchQuotation } from "./QuotationFunctions";

function QuotationView({pending}) {
  const [quotationData, setQuotationData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [update, setUpdate] = useState(false);
  let url = "/quotation?status="+pending;
  useEffect(() => { 
    fetchQuotation({ url, setQuotationData, setPagination});
    setUpdate(false);
  }, [update,url]);

  return (
    <>
      <PageWrapper title="Quotations">
        <Grid>
          <Grid.Col my={15} span={12}>
            <FilterBarQuoatation currentUrl={url} setPagination={setPagination} setQuotationData={setQuotationData}/>
          </Grid.Col>
          <Grid.Col span={12}>
              <DataGrid
                columns={QuotationViewHeader({ setUpdate,pending })}
                data={quotationData}
                pagination={pagination}
                setPagination={setPagination}
                currentUrl={url}
                setData={setQuotationData}
              />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default QuotationView;
