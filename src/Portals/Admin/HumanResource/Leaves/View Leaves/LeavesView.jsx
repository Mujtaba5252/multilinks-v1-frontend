import React,{useState,useEffect} from 'react'
import PageWrapper from '../../../../../Components/PageWrapper/PageWrapper'
import { Grid, Text } from '@mantine/core'
import Loader from '../../../../../Components/Loader/Loader'
import { axios_get } from '../../../../../Utils/Axios'
import DataGrid from '../../../../../Components/DataTable/DataGrid'
import { LeavesViewHeader } from './LeavesViewHeader'

function LeavesView() {
  const [leavesData, setLeavesData] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchLeaves = async () => {
    setLoading(true)
    let url='/leave-request'
    await axios_get({url:url}).then((res)=>{
      setLeavesData(res.data.data)
      setLoading(false)
      console.log(url)
      console.log(res.data.data)
    })
  }

  useEffect(() => {
    fetchLeaves();
  },[])
  return (
    <>
      <PageWrapper title="Leave Requests">
        <Grid>
          <Grid.Col span={12}>
              <Text align='center'>Leave filters</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            {loading ? <Loader /> :
              leavesData.length > 0 ?
                <DataGrid columns={LeavesViewHeader()} data={leavesData} pagination={true} />
                : <Text align='center'>No Leave Requests to Display</Text>
            }
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default LeavesView