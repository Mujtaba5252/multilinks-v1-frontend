import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../../../../../Components/PageWrapper/PageWrapper'
import { Grid, Text } from '@mantine/core'
import { axios_get } from '../../../../../../../Utils/Axios'
import  Loader  from '../../../../../../../Components/Loader/CustomLoader'
import { PaymentViewHeader } from './PaymentViewHeader'

function PaymentView({isInvoice}) {
    const [paymentData, setPaymentData] = useState({})
    const [loading, setLoading] = useState(false)
    const fetchPayment = async () => {
        setLoading(true)
        //url will be changed depending on the payment invoice or reciept using isInvoice
        let url='/invoice'
        await axios_get({url:url}).then((res)=>{
            setPaymentData(res.data.data)
            setLoading(false)
        })
    }
    useEffect(() => {
        fetchPayment();
    }, [])
  return (
    <>
    <PageWrapper title={isInvoice?"Payment Invoices":"Payment Receipts"}>
        <Grid>
          <Grid.Col span={12}>
            {isInvoice?
            <Text align='center'>Payment Invoice Filters</Text>
            :
            <Text align='center'>Payment Receipt Filters</Text>
            }
          </Grid.Col>
          <Grid.Col span={12}>
            {loading ? <Loader /> :
              paymentData.length > 0 ?
                <DataGrid coloum={PaymentViewHeader(true)} data={paymentData} pagination={true} />
                : <Text align='center'>{isInvoice?"No Payment Invoices to Display":"No Payment Receipts to Display"}</Text>
            }
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default PaymentView