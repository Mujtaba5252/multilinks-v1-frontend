import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { MainBlue } from '../../../../../../../../Utils/ThemeColors'
import { useNavigate } from 'react-router-dom';
import { axios_put } from '../../../../../../../../Utils/Axios';
import toast from 'react-hot-toast';
import { adminRoutes } from '../../../../../../../../routes';

function ApproveModalPayment({Data,setUpdate}) {
    const navigate = useNavigate();
    const handleApprove = async(id) => {
        let url='/invoice/'+id
        try{
            await axios_put({url:url, data:{status:'Approved'}}).then((res)=>{
                if(res.status === 200 || res.status==201){
                    toast.success('Payment Invoice Approved Successfully')
                    setUpdate(true)
                    navigate(adminRoutes.paymentsInvoice)
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
            <Text fw={300} style={{ fontSize: "14px" }} align='center'>Approve Payment Invoice for "{Data.client.client_name} ({Data.client.UID})" with Quotation ID "({Data.quotation.quotation_ID})" ?</Text>
            <Flex justify={'center'} mt={15}>
                {/* <Button w={'50%'} color={MainBlue()} variant='light' ml={5} mr={5}>Cancel</Button> */}
                <Button w={'100%'} ml={5} mr={5} color={MainBlue()} onClick={()=>handleApprove(Data.id)}>Approve</Button>
            </Flex>
        </>
  )
}

export default ApproveModalPayment