import { Button, Flex, Grid,Input } from '@mantine/core'
import React, { useState } from 'react'
import { Search } from 'tabler-icons-react'
import { MainBlue } from '../../../../Utils/ThemeColors'
import { fetchCommissions } from './CommissionFunctions'

function FilterBarCommission({ currentUrl, setCommissionData, setPagination }) {
    const [search, setSearch] = useState("")
    let url = currentUrl;
    const searchFilter = () => {
        const toSearch = search == "" ? url : url + "?search=" + search;
        url = toSearch;
        fetchCommissions({ url, setCommissionData, setPagination });
    }
    return (
        <>
            <Grid>
                <Grid.Col xs={3} span={12}>
                    <Flex>
                        <Input w={"100%"} placeholder="Search"
                            onChange={(e) => {
                                setSearch(e.target.value);
                                if(e.target.value==""){
                                    fetchCommissions({ url, setCommissionData, setPagination });
                                }
                            }} />
                        <Button color={MainBlue()} onClick={searchFilter} p={8} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -2 }}><Search size={20} /></Button>
                    </Flex>
                </Grid.Col>
            </Grid>

        </>
    )
}

export default FilterBarCommission