import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import { MainBlue } from '../../../../../../Utils/ThemeColors'
import { axios_delete } from '../../../../../../Utils/Axios'
import { adminRoutes } from '../../../../../../routes'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function DeleteModal({Data, setUpdate}) {
    const navigate = useNavigate();
    const handleDelete = (id) => {
        let url = '/user/'+id
        axios_delete({url:url}).then((res)=>{
            if(res.status === 200){
                toast.success('Staff Deleted Successfully')
                setUpdate(true)
                navigate(adminRoutes.staffView)
            }
            else if(res.status === 400){
                toast.error(res.data.message)
            }
            else{
                toast.error('Something went wrong')
            }
        })
    }
  return (
    <>
        <Text fw={300} style={{fontSize:"14px"}} align='center'>Are you sure you want to delete {Data.name} ({Data.staff_ID})?</Text>
        <Flex justify={'center'} mt={15}>
            <Button w={'50%'} color={'red'} variant='light' ml={5} mr={5}>Cancel</Button>
            <Button w={'50%'} ml={5} mr={5} color='red' onClick={()=>handleDelete(Data.id)}>Delete</Button>
        </Flex>
    </>
  )
}

export default DeleteModal