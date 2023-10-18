import React, { useEffect, useState } from 'react'
import DataGrid from '../../../../Components/DataTable/DataGrid'
import { Grid, Paper, Text, Title } from '@mantine/core'
import { HeaderForQutation } from './HeaderForQutations'
import { fetchApprovedQuotation } from './ApprovedQuotationFunction'
import { MainBlue } from '../../../../Utils/ThemeColors'
import FilterBarQuotation from '../../../Admin/Accounts/Quotation/FilterBarQuotation'

function QuotationsForPaymentInvoice() {
    const [approvedQuotation, setApprovedQuotation] = useState([])
    const [pagination, setPagination] = useState([])
    let url = "/quotation?status=Approved";

    useEffect(() => {
        fetchApprovedQuotation({ url, setApprovedQuotation, setPagination })
    }, [])
    return (
        <>
            <Paper>
                <Grid>
                    <Grid.Col mb={10} mt={0}>
                        <Title order={3} color={MainBlue()} mt={0} align={'center'}>Choose Quotation to Genrate Payment Invoice</Title>
                        <Text size={14} color='gray' align='center'>Here you will select a Quotation to Generate Payment Invoice For Client</Text>    
                    </Grid.Col>
                    <Grid.Col mb={10} span={12}>
                        <FilterBarQuotation currentUrl={url} setQuotationData={setApprovedQuotation} setPagination={setPagination} />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <DataGrid
                            columns={HeaderForQutation()}
                            data={approvedQuotation}
                            pagination={pagination}
                            setPagination={setPagination}
                            currentUrl={url}
                            setData={setApprovedQuotation}
                        />
                    </Grid.Col>
                </Grid>
            </Paper>
        </>
    )
}

export default QuotationsForPaymentInvoice