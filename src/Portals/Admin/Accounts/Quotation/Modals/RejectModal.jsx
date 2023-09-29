import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { MainBlue, Red } from '../../../../../Utils/ThemeColors'
import { axios_put } from '../../../../../Utils/Axios'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { adminRoutes } from '../../../../../routes'

function RejectModal({Data,setUpdate}) {
    const navigate = useNavigate();
    const handleReject = (id) => {
        let url='/quotation/'+id
        try{
            console.log(url)
            axios_put({url:url, data:{status:'Rejected'}}).then((res)=>{
                if(res.status === 200){
                    toast.success('Quotation Approved Successfully')
                    setUpdate(true)
                    navigate(adminRoutes.quotationView)
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
        <Text fw={300} style={{fontSize:"14px"}} align='center'>Reject Quotation for "{Data.client.client_name} ({Data.client.UID})"? By Rejecting this Quotation Your will be unable to edit this Qutation and Quotation will be Discarded.</Text>
        <Flex justify={'center'} mt={15}>
            <Button w={'50%'} color={'red'} variant='light' ml={5} mr={5}>Cancel</Button>
            <Button w={'50%'} ml={5} mr={5} color={'red'} onClick={()=>handleReject(Data.id)}>Reject</Button>
        </Flex>
    </>
  )
}

export default RejectModal