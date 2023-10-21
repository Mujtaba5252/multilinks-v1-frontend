import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { axios_put } from '../../../../../../../../Utils/Axios';
import { adminRoutes } from '../../../../../../../../routes';
import toast from 'react-hot-toast';

function RejectOfficeExpense({ Data, setUpdate}) {
  const navigate = useNavigate();
  const handleReject = async(id) => {
      let url='/office-expense/'+id
      try{
          await axios_put({url:url, data:{status:'Rejected'}}).then((res)=>{
              if(res.status === 200 || res.status==201){
                  toast.success('Payment Invoice Approved Successfully')
                  setUpdate(true)
                  navigate(adminRoutes.officeExpenseInvoice)
              }
              else if(res.status === 400){
                  toast.error(res.data.message)
              }
              else{
                  toast.error(res.data.message)
              }
          })
      }
      catch(err){
          console.log(err)
      }
  }
  return (
    <>
      <Text fw={300} style={{ fontSize: "14px" }} align='center'>Approve Office Expense Invoice for "{Data.payment_for} ({Data.office_expense_ID})" to "({Data.payment_to})" ?</Text>
      <Flex justify={'center'} mt={15}>
        <Button w={'50%'} color={'red'} variant='light' ml={5} mr={5}>Cancel</Button>
        <Button w={'50%'} ml={5} mr={5} color={'red'} onClick={() => handleReject(Data.id)}>Reject</Button>
      </Flex>
    </>
  )
}

export default RejectOfficeExpense