import { Button, Flex, Grid, Input, Menu, Select, Switch } from '@mantine/core'
import React, { useState } from 'react'
import { Filter, Search } from 'tabler-icons-react'
import { MainBlue } from '../../../../../../../Utils/ThemeColors'
import { fetchOfficeExpense } from './OfficeExpenseFunctions';
import { useMediaQuery } from '@mantine/hooks';

function FilterBarOfficeExpense({ currentUrl, setOfficeExpenseData, setPagination, isInvoice }) {
    const [search, setSearch] = useState("");
    let url = currentUrl;
    const searchFilter = () => {
        const toSearch = "&search=" + search;
        url = url + toSearch;
        fetchOfficeExpense({ url, setOfficeExpenseData, setPagination });
    }

    return (
        <>
            <Grid>
                <Grid.Col sm={4} span={8}>
                    <Flex>
                        <Input w={"100%"} placeholder="Search" onChange={(e) => {
                            setSearch(e.target.value)
                            if(e.target.value === "")
                            {
                                url = currentUrl;
                                fetchOfficeExpense({ url, setOfficeExpenseData, setPagination });
                            }
                            }} />
                        <Button color={MainBlue} onClick={searchFilter} p={8} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -2 }}><Search size={20} /></Button>
                    </Flex>
                </Grid.Col>
            </Grid>

        </>
    )
}

export default FilterBarOfficeExpense