import React, { useEffect, useState } from 'react'
import DataGrid from '../../../../../../../../Components/DataTable/DataGrid'
import { ApprovedQuotationHeader } from './HeaderForApprovedQutations'
import { Grid, Text, Title } from '@mantine/core'
import { fetchApprovedQutation } from './ApprovedQuotationFunction'
import { MainBlue } from '../../../../../../../../Utils/ThemeColors'
import FilterBarQuotation from '../../../../../Quotation/FilterBarQuotation'

function ApprovedQutationForExpense() {
  const [approvedQutation, setApprovedQutation] = useState([])
  const [pagination, setPagination] = useState([])
  let url = "/quotation?status=Approved"
  useEffect(() => {
    fetchApprovedQutation({ url, setApprovedQutation,setPagination})
    console.log("approvedQutation", approvedQutation)
  }, [])

  return (
    <>
      <Grid>
        <Grid.Col mb={10} mt={0}>
          <Title order={3} color={MainBlue()} mt={0} align={'center'}>Choose Quotation to Genrate Client Expense Invoice</Title>
          <Text size={14} color='gray' align='center'>Here you will select a Quotation to Generate Client Expense Invoice For Client</Text>
        </Grid.Col>
        <Grid.Col mb={10} span={12}>
            <FilterBarQuotation currentUrl={url} setQuotationData={setApprovedQutation} setPagination={setPagination}/>
        </Grid.Col>
        <Grid.Col span={12}>
          <DataGrid
            columns={ApprovedQuotationHeader()}
            data={approvedQutation}
            pagination={pagination}
            setPagination={setPagination}
            currentUrl={url}
          />
        </Grid.Col>
      </Grid>
    </>
  )
}

export default ApprovedQutationForExpense