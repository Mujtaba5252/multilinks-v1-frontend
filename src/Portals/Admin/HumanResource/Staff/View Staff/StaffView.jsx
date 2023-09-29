import React, { useEffect,useState } from 'react'
import PageWrapper from '../../../../../Components/PageWrapper/PageWrapper'
import { axios_get } from '../../../../../Utils/Axios'
import { Button, Flex, Grid, Text } from '@mantine/core'
import DataGrid from '../../../../../Components/DataTable/DataGrid'
import { StaffViewHeader } from './StaffViewHeader'
import { CirclePlus } from 'tabler-icons-react'
import { useNavigate } from 'react-router'
import { adminRoutes } from '../../../../../routes'

function StaffView() {

  const [staffData, setStaffData] = useState([])
  const [update, setUpdate] = useState(false)
  const navigate=useNavigate();
  const fetchStaff = async () => {
    let url='/user?isAdmin=false'
    await axios_get({url:url}).then((res)=>{
      console.log(res.data.data)
      setStaffData(res.data.data)
    })
  }
  useEffect(() => {
    fetchStaff();
    setUpdate(false)
  }, [update]);
  return (
    <>
      <PageWrapper title="Staff Members">
        <Grid>
          <Grid.Col span={12}>
            <Flex justify="flex-end">
              <Button leftIcon={<CirclePlus/>} onClick={()=>navigate(adminRoutes.addStaff)}>Add Staff</Button>
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid columns={StaffViewHeader({setUpdate})} data={staffData} pagination={true} />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default StaffView;
