import { Badge, Container, Flex, Grid, Text, Title } from '@mantine/core'
import React from 'react'
import { MainBlue } from '../../../../../../Utils/ThemeColors'
import { DateFormatter } from '../../../../../../Utils/CommonFormatters'
import './ViewModal.css'
import { Cloud, Percentage, UserCircle } from 'tabler-icons-react'

function ViewModal({ Data }) {

    return (
        <>
            <Grid>
                <Grid.Col md={4} span={12}>
                    <Container mih={50} mt={10} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 2px #D3D3D3', padding: '5px 10px', height: '100%' }}>
                        <Title order={3} color={MainBlue()} mt={10}>Basic Information</Title>
                        <Grid>
                            <Grid.Col span={12}>
                                <Grid pt={20} pb={20}>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Name</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.name}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Father Name</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.father_name}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Personal Email</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.personal_email}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Designation</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.designation}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Joining Date</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{DateFormatter(Data?.joining_date)}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>VISA Status</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Badge color={Data?.visa_status == 'Active' ? 'green' : (Data?.visa_status == 'Expired' ? 'red' : MainBlue())}>{Data?.visa_status}</Badge>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>VISA Expiry Date</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{DateFormatter(Data?.visa_expiry_date)}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>VISA Issuance Date</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{DateFormatter(Data?.visa_issuance_date)}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>CNIC</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.CNIC_NIN}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Salary</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.salary}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Bank</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.bank_name}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>IBAN</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.IBAN}</Text>
                                    </Grid.Col>
                                </Grid>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Grid.Col>
                <Grid.Col md={4} span={12}>
                    <Container mih={50} mt={10} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 2px #D3D3D3', padding: '5px 10px', height: '100%' }}>
                        <Title order={3} color={MainBlue()} mt={10}>Additional Information</Title>
                        <Grid>
                            <Grid.Col span={12}>
                                <Grid pt={20} pb={20}>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Nationality</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.nationality}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Passport Number</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.passport_number}</Text>
                                    </Grid.Col>
                                    {Data.has_emirates_ID &&
                                        <>
                                            <Grid.Col span={6}>
                                                <Text color={MainBlue()}>Emirates ID</Text>
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <Text>{Data?.emirates_ID}</Text>
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <Text color={MainBlue()}>Emirates ID Expiry</Text>
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <Text>{DateFormatter(Data?.emirates_ID_expiry_date)}</Text>
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <Text color={MainBlue()}>Emirates ID Issuance</Text>
                                            </Grid.Col>
                                            <Grid.Col span={6}>
                                                <Text>{DateFormatter(Data?.emirates_ID_issuance_date)}</Text>
                                            </Grid.Col>
                                        </>
                                    }
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Emergency Contact Name</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.emergency_contact_name}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Emergency Contact Number</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.emergency_contact_number}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Residence Address in UAE</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.residence_address_in_UAE}</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text color={MainBlue()}>Commission Percentage</Text>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Text>{Data?.commission_percentage}<Percentage size={12} color={MainBlue()} /></Text>
                                    </Grid.Col>
                                </Grid>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Grid.Col>
                <Grid.Col md={4} span={12}>
                    <Grid mt={0}>
                        <Grid.Col span={12}>
                            <Flex direction={'column'} justify={'center'} mih={200} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 2px #D3D3D3', marginTop: "0.6rem" }}>
                                <Flex justify='center' align='center' style={{ height: '100%', width: '100%' }}>
                                    <UserCircle size={100} color={MainBlue()} />
                                </Flex>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Flex direction={'column'} justify={'center'} mih={200} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 2px #D3D3D3', marginTop: "0.6rem" }}>
                                <Flex justify='center' align='center' style={{ height: '100%', width: '100%' }}>
                                    <Cloud size={100} color={MainBlue()} />
                                </Flex>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default ViewModal