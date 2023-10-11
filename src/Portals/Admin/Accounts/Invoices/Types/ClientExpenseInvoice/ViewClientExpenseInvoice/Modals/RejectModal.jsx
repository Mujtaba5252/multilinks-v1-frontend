import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { axios_put } from '../../../../../../../../Utils/Axios'
import { CurrencyFormatter } from '../../../../../../../../Utils/CommonFormatters'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function RejectModal({Data,setUpdate}) {
  const navigate=useNavigate();
  const handleReject = async(id) => {
    let url='/client-expense/'+id
    await axios_put({url:url, data:{status:'Rejected'}}).then((res)=>{
        console.log(res)
        if(res.status === 200 || res.status==201){
            toast.success('Client Expense Invoice Approved Successfully')
            setUpdate(true)
            navigate(adminRoutes.clientExpenseInvoice)
        }
        else if(res.status === 400){
            toast.error(res.data.message)
        }
        else{
            toast.apply(res.data.message)
        }
    })
}
  return (
    <>
    <Text fw={300} style={{ fontSize: "14px" }} align="center">
      Reject Client Expense Invoice of "{Data.client.client_name} ({Data.client.UID})" of Service "{Data.payment_for}" for amount "{CurrencyFormatter(Data.expense_amount)}" ?
      </Text>
      <Flex justify={"center"} mt={15}>
        <Button w={"50%"} color={"red"} variant="light" ml={5} mr={5}>
          Cancel
        </Button>
        <Button
          w={"50%"}
          ml={5}
          mr={5}
          color={"red"}
          onClick={() => handleReject(Data.id)}
        >
          Reject
        </Button>
      </Flex>
    </>
  )
}

export default RejectModal