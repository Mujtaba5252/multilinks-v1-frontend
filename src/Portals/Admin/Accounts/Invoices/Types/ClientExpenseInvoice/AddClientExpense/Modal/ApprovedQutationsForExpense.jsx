import React, { useEffect, useState } from 'react'
import { axios_get } from '../../../../../../../../Utils/Axios'
import toast from 'react-hot-toast'
import DataGrid from '../../../../../../../../Components/DataTable/DataGrid'
import { ApprovedQuotationHeader } from './HeaderForApprovedQutations'

function ApprovedQutationForExpense() {
  const [approvedQutation, setApprovedQutation] = useState([])
  const fetchApprovedQutation = async () => {
    let url="/quotation?status=Approved"
    await axios_get({ url:url }).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setApprovedQutation(res.data.data)
      }
      else if (res.status === 401) {
        toast.error(res.data.message)
      }
      else {
        toast.error(res.data.message)
      }
    })
    .catch((err) => {
      toast.error(err.message)
    })
  }
  useEffect(() => {
    fetchApprovedQutation()
    console.log("approvedQutation",approvedQutation)
  }, [])

  return (
    <>
      <DataGrid
        columns={ApprovedQuotationHeader()}
        data={approvedQutation}
        pagination={true}
      />
    </>
  )
}

export default ApprovedQutationForExpense