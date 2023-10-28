import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../../../Components/PageWrapper/PageWrapper'
import { axios_get } from '../../../../../Utils/Axios'
import { Button, Flex, Grid, Text } from '@mantine/core'
import DataGrid from '../../../../../Components/DataTable/DataGrid'
import { StaffViewHeader } from './StaffViewHeader'
import { CirclePlus } from 'tabler-icons-react'
import { useNavigate } from 'react-router'
import { adminRoutes } from '../../../../../routes'
import FilterBarStaff from './FilterBarStaff'
import { fetchStaff } from './StaffFunction'

function StaffView() {

  const [staffData, setStaffData] = useState([])
  const [update, setUpdate] = useState(false)
  const [pagination, setPagination] = useState([])
  const navigate = useNavigate();
  let url = '/user?isAdmin=false';
  useEffect(() => {
    fetchStaff({ url, setStaffData, setPagination});
    setUpdate(false)
  }, [update]);
  return (
    <>
      <PageWrapper title="Staff Members">
        <Grid >
          <Grid.Col span={12} mt={10}  mb={10}>
            <Flex justify="flex-end" >
              <Button w={200} leftIcon={<CirclePlus />} onClick={() => navigate(adminRoutes.addStaff)}>Add Staff</Button>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12} mb={10}>
            <FilterBarStaff currentUrl={url} setStaffData={setStaffData} setPagination={setPagination} />
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid
              columns={StaffViewHeader({ setUpdate })}
              data={staffData}
              pagination={pagination}
              setPagination={setPagination}
              currentUrl={url}
              setData={setStaffData}
            />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default StaffView;
