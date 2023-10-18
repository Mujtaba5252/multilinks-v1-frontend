import { Grid } from '@mantine/core'
import DataGrid from '../../../../Components/DataTable/DataGrid'
import React, { useEffect, useState } from 'react'
import { fetchCommissions } from './CommissionFunctions'
import { CommissionViewHeader } from './CommissionViewHeader'
import PageWrapper from '../../../../Components/PageWrapper/PageWrapper'
import FilterBarCommission from './FilterBarCommission'

function CommissionView() {
  const [commissionData, setCommissionData] = useState([])
  const [pagination, setPagination] = useState([])
  let url = '/commission'
  useEffect(() => {
    fetchCommissions({ url, setCommissionData, setPagination })
  }, [])
  return (
    <>
      <PageWrapper title="Commissions">
        <Grid>
          <Grid.Col my={15} span={12}>
            <FilterBarCommission currentUrl={url} setCommissionData={setCommissionData} setPagination={setPagination} />
          </Grid.Col>
          <Grid.Col span={12}>
            <DataGrid
              data={commissionData}
              columns={CommissionViewHeader()}
              pagination={pagination}
              setPagination={setPagination}
              currentUrl={url}
              setData={setCommissionData}
            />
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default CommissionView