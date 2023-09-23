import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../../../../../Components/PageWrapper/PageWrapper'
import { Button, Flex, Grid, Text } from '@mantine/core'
import { OfficeExpenseViewHeader } from './OfficeExpenseViewHeader'
import Loader from '../../../../../../../Components/Loader/CustomLoader'
import DataGrid from '../../../../../../../Components/DataTable/DataGrid'
import { CirclePlus } from 'tabler-icons-react'
function OfficeExpenseView({isInvoice}) {
    const [officeExpenseData, setOfficeExpenseData] = useState({})
    const [loading, setLoading] = useState(false)
    const fetchOfficeExpense = async () => {
        //api is not ready yet
        setLoading(true)
        //url will be changed depending on the invoice or reciept using isInvoice
        setLoading(false)
    }

    useEffect(() => {
        fetchOfficeExpense();
    }, [])
  return (
    <>
    <PageWrapper title={isInvoice?"Office Expense Invoices":"Office Expense Receipts"}>
        <Grid>
          <Grid.Col span={12}>
            {isInvoice?
            <Flex justify='end'>
                <Button leftIcon={<CirclePlus/>} variant="filled">Add Expense</Button>
            </Flex>
            :
            <Text align='center'>Office Expense Receipt Filters</Text>
            }
          </Grid.Col>
          <Grid.Col span={12}>
            {loading ? <Loader /> :
              officeExpenseData.length > 0 ?
                <DataGrid coloum={OfficeExpenseViewHeader(true)} data={officeExpenseData} pagination={true} />
                : <Text align='center'>{isInvoice?"No Office Expense Invoices to Display":"No Office Expense to Receipts Display"}</Text>
            }
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default OfficeExpenseView