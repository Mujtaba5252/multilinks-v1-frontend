import React, { useEffect, useState } from 'react'
import DataGrid from '../../../../Components/DataTable/DataGrid'
import { Paper } from '@mantine/core'
import { axios_get } from '../../../../Utils/Axios'
import { HeaderForQutation } from './HeaderForQutations'

function QuotationsForPaymentInvoice() {
    const [approvedQuotation, setApprovedQuotation] = useState([])
    const fetchApprovedQuotation = async () => {
        await axios_get({ url: "/quotation?status=Approved",withSNo:true }).then((res)=>{
                setApprovedQuotation(res.data.data)
                console.log(res.data.data)
            }
        ).catch((err) => {
            console.log(err);
        }
        )
    }
    useEffect(() => {
        fetchApprovedQuotation()
    }, [])
    return (
        <>
            <Paper>
                <DataGrid
                    columns={HeaderForQutation()}
                    data={approvedQuotation}
                    pagination={true}
                />
            </Paper>
        </>
    )
}

export default QuotationsForPaymentInvoice