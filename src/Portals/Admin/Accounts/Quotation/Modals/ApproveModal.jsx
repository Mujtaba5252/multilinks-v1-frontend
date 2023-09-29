import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { MainBlue } from '../../../../../Utils/ThemeColors'
import { axios_put } from '../../../../../Utils/Axios'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { adminRoutes } from '../../../../../routes'

function ApproveModal({Data,setUpdate}) {
    const navigate = useNavigate();
    const handleApprove = async(id) => {
        let url='/quotation/'+id
        try{
            console.log(url)
            await axios_put({url:url, data:{status:'Approved'}}).then((res)=>{
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
        <Text fw={300} style={{fontSize:"14px"}} align='center'>Approve Quotation for "{Data.client.client_name} ({Data.client.UID})"? By Approving this Quotation Your will be unable to edit this Qutation.</Text>
        <Flex justify={'center'} mt={15}>
            <Button w={'50%'} color={MainBlue()} variant='light' ml={5} mr={5}>Cancel</Button>
            <Button w={'50%'} ml={5} mr={5} color={MainBlue()} onClick={()=>handleApprove(Data.id)}>Approve</Button>
        </Flex>
    </>
  )
}

export default ApproveModal