import { Button, Flex, Grid, Group, Input, Select } from '@mantine/core'
import React, { useState } from 'react'
import { Search } from 'tabler-icons-react'
import { MainBlue } from '../../../../Utils/ThemeColors'
import { fetchQuotation } from './QuotationFunctions'

function FilterBarQuoatation({currentUrl, setQuotationData, setPagination}) {
    const [search, setSearch] = useState("")
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
        url=url+toSearch;
        fetchQuotation({ url, setQuotationData, setPagination });
    }
    const serviceFilter = (value) => {
        const includes = url.includes("?")
        const toSearch=includes?"&service_type="+value:"?service_type="+value;
        url=url+toSearch;
        fetchQuotation({ url, setQuotationData, setPagination });
    }
    return (
        <>
            <Grid>
                <Grid.Col xs={4} span={12}>
                    <Flex>
                        <Input placeholder="Search" onChange={(e)=>{
                            setSearch(e.target.value);
                            if(e.target.value==""){
                                fetchQuotation({ url, setQuotationData, setPagination });
                            }
                            }}/>
                        <Button color={MainBlue} onClick={searchFilter} p={8} style={{borderTopLeftRadius:0,borderBottomLeftRadius:0,marginLeft:-2}}><Search size={20}/></Button>
                    </Flex>
                </Grid.Col>
                <Grid.Col m={0} xs={8} span={12}>
                    <Flex justify="end">
                        <Select w={200} clearable placeholder='Service Type' data={service_type} onChange={(e)=>{
                            serviceFilter(e);
                            if(e==""){
                                fetchQuotation({ url, setQuotationData, setPagination });
                            }
                            }}/>
                    </Flex>
                </Grid.Col>
            </Grid>

        </>
    )
}

export default FilterBarQuoatation