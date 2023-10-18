import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { axios_get } from "../../../../Utils/Axios";
import PageWrapper from "../../../../Components/PageWrapper/PageWrapper";
import { Button, Grid, Group } from "@mantine/core";
import DataGrid from "../../../../Components/DataTable/DataGrid";
import { LicenseHeader } from "./LicenseHeader";
import { adminRoutes } from "../../../../routes";
import { getLicenseData } from "./LicenseFunctions";
import FilterBarLicense from "./FilterBarLicense";

const ViewLicenses = () => {
  const navigate = useNavigate();
  const [licenseData, setLicenseData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [update, setUpdate] = useState(false);
  let url = "/license";

  useEffect(() => {
    console.log(url);
    getLicenseData({ url, setLicenseData, setPagination });
  }, [update, url]);

  return (
    <PageWrapper title="VIEW LICENSES">
      <Group
        position="right"
        onClick={() => navigate(adminRoutes.addLicenses)}
      >
        <Button variant="filled">ADD LICENSE</Button>
      </Group>
      <Grid>
        <Grid.Col span={12} my={20}>
          <FilterBarLicense currentUrl={url} setLicenseData={setLicenseData} setPagination={setPagination}/>
        </Grid.Col>
      </Grid>
      <DataGrid
        columns={LicenseHeader({ setUpdate })}
        data={licenseData}
        pagination={pagination}
        currentUrl={url}
        setPagination={setPagination}
        setData={setLicenseData}
      />
    </PageWrapper>
  );
};

export default ViewLicenses;
