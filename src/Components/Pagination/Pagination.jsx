import { Button, Flex, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { axios_get } from '../../Utils/Axios'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import { MainBlue } from '../../Utils/ThemeColors'
import CustomLoader from '../CustomLoader/CustomLoader'

function Pagination({ currentUrl, pagination, setData, setPagination }) {
    const [loading,setLoading]=useState(false)
    const  movePages= async (page) => {
        setLoading(true)
        const andCheck=currentUrl.includes("?")?"&":"?"
        currentUrl = currentUrl + andCheck+"page="+page
        await axios_get({ url: currentUrl, withSNo: true  }).then((res) => {
            if (res.status === 200) {
                setData(res.data.data)
                setPagination(res.data.pagination)
                setLoading(false)
            }
        })  
    }
    return (
        <>
        {loading&&<CustomLoader loading={setLoading}/>}
        {pagination &&
        <>
            <Flex justify="center" mt={15}>
                <Button size='xs' ml={5} mr={5} p={0} w={25} h={25} style={{ borderRadius: "50%",border:"none",color:pagination.previousPage==null?'lightgray':MainBlue()}} variant='default' onClick={()=>movePages(pagination.page-1)} disabled={pagination.previousPage==null} ><ChevronLeft /></Button>
                {pagination.previousPage !=null&&
                    <Button size='xs' ml={5} mr={5} p={0} w={25} h={25} style={{ borderRadius: "50%",border:"none",color:MainBlue()}} onClick={()=>movePages(pagination.previousPage)} variant='default' >{pagination.previousPage+1}</Button>
                }
                {pagination.page !=null&&
                    <Button size='xs' ml={5} mr={5} p={0} w={25} h={25} style={{ borderRadius: "50%",border:"none"}}>{pagination.page+1}</Button>
                }
                {pagination.nextPage !=null&&
                    <Button size='xs' ml={5} mr={5} p={0} w={25} h={25} style={{ borderRadius: "50%",border:"none",color:MainBlue()}} variant='default' onClick={()=>movePages(pagination.nextPage)}>{pagination.nextPage+1}</Button>
                }
                <Button size='xs' ml={5} mr={5} p={0} w={25} h={25} style={{ borderRadius: "50%",border:"none",color:pagination.nextPage==null?'lightgray':MainBlue()}} variant='default' onClick={()=>movePages(pagination.page+1)} disabled={pagination.nextPage==null}><ChevronRight /></Button>
            </Flex>
            <Flex justify="center">
                <Text size={12} color='gray' mt={10}>Total Number of Page: {pagination.totalPages}</Text>
            </Flex>
            </>
        }
        </>
    )
}

export default Pagination