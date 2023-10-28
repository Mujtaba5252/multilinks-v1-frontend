import { Button, Flex, Grid, Group, Input, Select } from '@mantine/core'
import React, { useState } from 'react'
import { Search } from 'tabler-icons-react'
import { MainBlue } from '../../../Utils/ThemeColors'
import { getCleintData } from './ClientFunctions'

function FilterBarClient({currentUrl, setClientData, setPagination}) {
    const [search, setSearch] = useState("")
    let url = currentUrl;
    const searchFilter = () => {
        const includes = url.includes("?")
        const toSearch=includes?"&search="+search:"?search="+search;
        url=url+toSearch;
        getCleintData({ url, setClientData, setPagination });
    }
    return (
        <>
            <Grid>
                <Grid.Col xs={4} span={12}>
                    <Flex>
                        <Input w={"100%"} placeholder="Search" onChange={(e)=>{
                            setSearch(e.target.value);
                            if(e.target.value==""){
                                getCleintData({ url, setClientData, setPagination });
                            }
                            }}/>
                        <Button color={MainBlue} onClick={searchFilter} p={8} style={{borderTopLeftRadius:0,borderBottomLeftRadius:0,marginLeft:-2}}><Search size={20}/></Button>
                    </Flex>
                </Grid.Col>
            </Grid>

        </>
    )
}

export default FilterBarClient