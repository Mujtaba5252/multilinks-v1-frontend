import { Button, Flex, Grid, Input, Select } from '@mantine/core'
import React, { useState } from 'react'
import { Search } from 'tabler-icons-react'
import { MainBlue } from '../../../../../../../Utils/ThemeColors'
import { fetchClientExpense } from './ClientPaymentFunctions';

function FilterBarClientExpense({ currentUrl, setClientExpenseData, setPagination }) {
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
        const toSearch = "&search=" + search;
        url = url + toSearch;
        fetchClientExpense({ url, setClientExpenseData, setPagination });
    }
    const serviceFilter = (value) => {
        const toSearch = "&service_type=" + value;
        url = url + toSearch;
        fetchClientExpense({ url, setClientExpenseData, setPagination });

    }
    return (
        <>
            <Grid>
                <Grid.Col sm={4} span={12}>
                    <Flex>
                        <Input placeholder="Search" w={"100%"} onChange={(e) => 
                            {
                                setSearch(e.target.value);
                                if(e.target.value === "")
                                {
                                    url = currentUrl;
                                    fetchClientExpense({ url, setClientExpenseData, setPagination });
                                }
                            }
                            } />
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
                                    fetchClientExpense({ url, setClientExpenseData, setPagination });
                                }
                            }}/>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default FilterBarClientExpense
