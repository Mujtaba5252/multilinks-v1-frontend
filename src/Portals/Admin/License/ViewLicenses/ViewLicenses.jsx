import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { axios_get } from "../../../../Utils/Axios";
import PageWrapper from "../../../../Components/PageWrapper/PageWrapper";
import { Button, Group } from "@mantine/core";
import DataGrid from "../../../../Components/DataTable/DataGrid";
import { LicenseHeader } from "./LicenseHeader";
import { adminRoutes } from "../../../../routes";

const ViewLicenses = () => {
  const navigate = useNavigate();
  const [licenseData, setLicenseData] = useState([]);
  const [update, setUpdate] = useState(false);
  let url = "/license";
  const getLicenseData = async () => {
    axios_get({ url: url, withSNo: true })
      .then((res) => {
        setLicenseData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getLicenseData();
  }, [update, url]);

  return (
    <PageWrapper title="VIEW LICENSES">
      <Group
        position="right"
        my={20}
        onClick={() => navigate(adminRoutes.addLicenses)}
      >
        <Button variant="filled">ADD LICENSE</Button>
      </Group>
      <DataGrid
        columns={LicenseHeader({ setUpdate })}
        data={licenseData}
        pagination={true}
      />
    </PageWrapper>
  );
};

export default ViewLicenses;
