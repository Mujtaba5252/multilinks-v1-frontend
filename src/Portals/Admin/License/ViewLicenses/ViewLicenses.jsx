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
import { CirclePlus } from "tabler-icons-react";

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
      <Grid>
        <Grid.Col span={12} mt={10} mb={10}>
          <Group
            position="right"
            onClick={() => navigate(adminRoutes.addLicenses)}
          >
            <Button w={200} leftIcon={<CirclePlus/>} variant="filled">ADD LICENSE</Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} mb={10}>
          <FilterBarLicense currentUrl={url} setLicenseData={setLicenseData} setPagination={setPagination} />
        </Grid.Col>
        <Grid.Col span={12}>
          <DataGrid
            columns={LicenseHeader({ setUpdate })}
            data={licenseData}
            pagination={pagination}
            currentUrl={url}
            setPagination={setPagination}
            setData={setLicenseData}
          />
        </Grid.Col>
      </Grid>
    </PageWrapper>
  );
};

export default ViewLicenses;
