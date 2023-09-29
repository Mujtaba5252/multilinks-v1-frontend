import React,{useState,useEffect} from 'react'
import PageWrapper from '../../../../../Components/PageWrapper/PageWrapper'
import { Grid, Text } from '@mantine/core'
import { axios_get } from '../../../../../Utils/Axios'
import DataGrid from '../../../../../Components/DataTable/DataGrid'
import { LeavesViewHeader } from './LeavesViewHeader'

function LeavesView() {
  const [leavesData, setLeavesData] = useState([])

  const fetchLeaves = async () => {
    let url='/leave-request'
    await axios_get({url:url}).then((res)=>{
      setLeavesData(res.data.data)
    })
  }
  useEffect(() => {
    fetchLeaves();
  }, []);
  return (
    <>
      <PageWrapper title="Leave Requests">
        <Grid>
          <Grid.Col span={12}>
            <Text align="center">Leave filters</Text>
          </Grid.Col>
          <Grid.Col span={12}>
              <DataGrid columns={LeavesViewHeader()} data={leavesData} pagination={true}/>
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default LeavesView;
