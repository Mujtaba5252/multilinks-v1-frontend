import { Button, Flex, Grid, Input, Select } from '@mantine/core'
import React, { useState } from 'react'
import { Search } from 'tabler-icons-react'
import { MainBlue } from '../../../../../../../Utils/ThemeColors'
import { fetchPayment } from './PaymentFunctions'
import { fetchApprovedQuotation } from '../../../../../../Staff/ViewPaymentInvoice/Modals/ApprovedQuotationFunction'

function FilterBarPaymentView({ currentUrl, setPaymentData, setPagination }) {

    const [search, setSearch] = useState("");
    let url = currentUrl;
    const service_type = [
        {
            value: "visa",
            label: "Visa Service"
        }
        , {
            value: "license",
            label: "License Service"
        }
        , {
            value: "other",
            label: "Other Services"
        }
    ]
    const searchFilter = () => {
        const includes = url.includes("?")
        const toSearch=includes?"&search="+search:"?search="+search;
        url = url + toSearch;
        fetchPayment({ url, setPaymentData, setPagination });
    }
    const serviceFilter = (value) => {
        const includes = url.includes("?")
        const toSearch=includes?"&service_type="+value:"?service_type="+value;
        url = url + toSearch;
        fetchPayment({ url, setPaymentData, setPagination });

    }
    return (
        <>
            <Grid>
                <Grid.Col sm={4} span={12}>
                    <Flex>
                        <Input w={"100%"} placeholder="Search" onChange={(e) => 
                            {
                                setSearch(e.target.value);
                                if(e.target.value === "")
                                {
                                    url = currentUrl;
                                    fetchPayment({ url, setPaymentData, setPagination });
                                }
                            }} />
                        <Button color={MainBlue} onClick={searchFilter} p={8} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -2 }}><Search size={20} /></Button>
                    </Flex>
                </Grid.Col>
                <Grid.Col m={0} sm={8} span={12}>
                    <Flex justify="end">
                        <Select w={200} clearable placeholder='Service Type' data={service_type} onChange={(e)=>{
                            serviceFilter(e)
                            if(e === "" || e === null)
                                {
                                    url = currentUrl;
                                    fetchPayment({ url, setPaymentData, setPagination });
                                }
                            }}/>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default FilterBarPaymentView
