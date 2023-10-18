import { Button, Flex, Grid, Input, Select } from '@mantine/core'
import React, { useState } from 'react'
import { Search } from 'tabler-icons-react'
import { MainBlue } from '../../../../Utils/ThemeColors'
import { getLicenseData } from './LicenseFunctions'

function FilterBarLicense({ currentUrl, setLicenseData, setPagination }) {
    const [search, setSearch] = useState("");
    let url = currentUrl;
    const cat_type = [
        {
            value: "CAT 2",
            label: "CAT 2"
        }
        , {
            value: "CAT 3",
            label: "CAT 3"
        }
    ]
    const searchFilter = () => {
        const toSearch = "?search=" + search;
        url = url + toSearch;
        getLicenseData({ url, setLicenseData, setPagination });
    }
    const serviceFilter = (value) => {
        const toSearch = "?misc=" + value;
        url = url + toSearch;
        getLicenseData({ url, setLicenseData, setPagination });

    }
    return (
        <>
            <Grid>
                <Grid.Col sm={4} span={12}>
                    <Flex>
                        <Input placeholder="Search" onChange={(e) => 
                            {
                                setSearch(e.target.value);
                                if(e.target.value === "")
                                {
                                    url = currentUrl;
                                    getLicenseData({ url, setLicenseData, setPagination });
                                }
                            }
                            } />
                        <Button color={MainBlue} onClick={searchFilter} p={8} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginLeft: -2 }}><Search size={20} /></Button>
                    </Flex>
                </Grid.Col>
                <Grid.Col m={0} sm={8} span={12}>
                    <Flex justify="end">
                        <Select w={200} clearable placeholder='CAT Type' data={cat_type} onChange={(e)=>{
                            serviceFilter(e)
                            if(e === "" || e === null)
                                {
                                    url = currentUrl;
                                    getLicenseData({ url, setLicenseData, setPagination });
                                }
                            }}/>
                    </Flex>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default FilterBarLicense
