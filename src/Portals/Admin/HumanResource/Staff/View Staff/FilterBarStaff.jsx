import { Button, Flex, Grid, Group, Input, MultiSelect, Select } from '@mantine/core'
import React, { useState } from 'react'
import { Search } from 'tabler-icons-react'
import { MainBlue } from '../../../../../Utils/ThemeColors'
import { fetchStaff, splitValue } from './StaffFunction'

function FilterBarStaff({ currentUrl, setStaffData, setPagination }) {
    const [search, setSearch] = useState("")
    let url = currentUrl;
    const commission_percentage = [
        {
            value: "0-10",
            label: "0% - 10%"
        }
        , {
            value: "10-20",
            label: "10% - 20%"
        }
        , {
            value: "20-30",
            label: "20% - 30%"
        },
        {
            value: "30-40",
            label: "30% - 40%"
        },
        {
            value: "40-50",
            label: "40% - 50%"
        }
    ]
    const searchFilter = () => {
        const toSearch = search == "" ? url : url + "&search=" + search;
        url = toSearch;
        fetchStaff({ url, setStaffData, setPagination });
    }
    const commissionPercentageFilter = (value) => {
        let values=splitValue(value);
        let commission_percentage_min=0;
        let commission_percentage_max=0;
        if(value!=""){
            commission_percentage_min=values[0];
            commission_percentage_max=values[1];
        }
        const toSearch = commission_percentage_max!=0?  url + "&commission_percentage_min=" + commission_percentage_min + "&commission_percentage_max=" + commission_percentage_max:url;
        url = toSearch;
        fetchStaff({ url, setStaffData, setPagination });
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
                                    fetchStaff({ url, setStaffData, setPagination });
                                }
                            }} />
                        <Button color={MainBlue} onClick={searchFilter} p={8} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -2 }}><Search size={20} /></Button>
                    </Flex>
                </Grid.Col>
                <Grid.Col m={0} xs={9} span={12}>
                    <Flex justify="end">
                        <MultiSelect
                            maxSelectedValues={1} 
                            w={200} 
                            placeholder='Commission' 
                            data={commission_percentage}
                            onChange={(e) => {
                                commissionPercentageFilter(e);
                            }} />
                    </Flex>
                </Grid.Col>
            </Grid>

        </>
    )
}

export default FilterBarStaff