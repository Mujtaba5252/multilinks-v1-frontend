import React from 'react'
import { Title,Flex,Container,Grid, TextInput,Text } from '@mantine/core'
import { Cloud, UserCircle } from 'tabler-icons-react';
import { MainBlue } from '../../../../../../Utils/ThemeColors';

function CreateLogin({form3, confirmPassword, ConfirmPassword}) {
    return (
        <Grid>
            <Grid.Col md={6} sm={12} style={{ height: '100%' }}>
                <Container mih={415} mt={10} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 2px #D3D3D3' }}>
                    <Grid>
                        <Grid.Col md={12} sm={12}>
                            <Title mt={10} color={MainBlue()}>Create Login</Title>
                        </Grid.Col>
                        <Grid.Col md={12} sm={12}>
                            <TextInput form={form3} withAsterisk {...form3?.getInputProps('login_email')} size='md' label="Email" placeholder="Enter Email" />
                        </Grid.Col>
                        <Grid.Col md={12} sm={12}>
                            <TextInput form={form3} withAsterisk {...form3?.getInputProps('login_password')} size='md' type='password' label="Password" placeholder="Enter Password" />
                        </Grid.Col>
                        <Grid.Col md={12} sm={12}>
                            <TextInput withAsterisk onChange={(event) => ConfirmPassword(event.target.value)} size='md' type='password' label="Confirm Password" placeholder="Confirm Password" />
                            <Text color={confirmPassword ? 'green' : 'red'}>{confirmPassword ? 'Password Matched' : 'Password Not Matched'}</Text>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Grid.Col>
            <Grid.Col md={6} sm={12}>
                <Grid>
                    <Grid.Col span={6} md={12} >
                        <Flex direction={'column'} justify={'center'} mih={200} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 2px #D3D3D3' }}>
                            <Flex justify='center' align='center' style={{ height: '100%', width: '100%' }}>
                                <UserCircle size={100} color={MainBlue()} />
                            </Flex>
                            <Flex justify='center' align='center' style={{ height: '100%', width: '100%' }}>
                                <Text size='md'>Upload Profile Picture</Text>
                            </Flex>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={6} md={12} >
                        <Flex direction={'column'} justify={'center'} mih={200} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 2px #D3D3D3' }}>
                            <Flex justify='center' align='center' style={{ height: '100%', width: '100%' }}>
                                <Cloud size={100} color={MainBlue()} />
                            </Flex>
                            <Flex justify='center' align='center' style={{ height: '100%', width: '100%' }}>
                                <Text size='md'>Attachments</Text>
                            </Flex>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
    )
}

export default CreateLogin