import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { MainBlue } from '../../../../../../../../Utils/ThemeColors'
import { useNavigate } from 'react-router-dom';
import { axios_put } from '../../../../../../../../Utils/Axios';
import toast from 'react-hot-toast';
import { adminRoutes } from '../../../../../../../../routes';


function RejectModalPayment({Data,setUpdate}) {
  const navigate = useNavigate();
  const handleReject = (id) => {
      let url='/invoice/'+id
      try{
          axios_put({url:url, data:{ status:'Rejected',}}).then((res)=>{
              if(res.status === 200){
                  toast.success('Payment Invoice Rejected')
                  setUpdate(true)
                  navigate(adminRoutes.paymentsInvoice)
              }
              else if(res.status === 400){
                  toast.error(res.data.message)
              }
              else{
                  toast.error('Something went wrong')
              }
          })
      }
      catch(err){
          console.log(err)
      }
  }
  return (
    <>
      <Text fw={300} style={{ fontSize: "14px" }} align='center'>Reject Payment for "{Data.client.client_name} ({Data.client.UID})" with Quoatation ID "({Data.quotation.quotation_ID})"? By Rejecting this, Payment Invoice will be Discarded.</Text>
      <Flex justify={'center'} mt={15}>
        {/* <Button w={'50%'} color={'red'} variant='light' ml={5} mr={5}>Cancel</Button> */}
        <Button w={'100%'} ml={5} mr={5} color={'red'} onClick={() => handleReject(Data.id)}>Reject</Button>
      </Flex>
    </>
  )
}

export default RejectModalPayment