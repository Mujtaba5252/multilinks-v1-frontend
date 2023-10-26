import { Grid, TextInput,Select,Textarea,Text } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates';
import { Calendar } from 'tabler-icons-react';
import InputMask from 'react-input-mask';
import { MainBlue } from '../../../../../../Utils/ThemeColors';
import React from 'react'

function BasicInformation({ form1 }) {
    return (
        <Grid>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk {...form1?.getInputProps('name')} label="Name" placeholder="Enter Name" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk {...form1?.getInputProps('father_name')} label="Father Name" placeholder="Enter Father Name" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk {...form1?.getInputProps('personal_email')} label="Email" placeholder="Enter Email" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk {...form1?.getInputProps('designation')} label="Designation" placeholder="As per labour Contract" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <DatePickerInput form={form1} withAsterisk {...form1?.getInputProps('joining_date')} rightSection={<Calendar color={MainBlue()} />} size='xs' label={<Text display={'inline'} size={'sm'}>Joining Date</Text>} placeholder="Enter Joining Date" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk {...form1?.getInputProps('visa_status')} data={['Active', 'Expired']} placeholder='Select VISA Status' label='VISA Status' />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <DatePickerInput form={form1} withAsterisk {...form1?.getInputProps('visa_issuance_date')} rightSection={<Calendar color={MainBlue()} />} size='xs' label={<Text display={'inline'} size={'sm'}>VISA Issuance Date</Text>} placeholder="Enter VISA Issuance Date" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <DatePickerInput form={form1} withAsterisk {...form1?.getInputProps('visa_expiry_date')} rightSection={<Calendar color={MainBlue()} />} size='xs' label={<Text display={'inline'} size={'sm'}>VISA Expiry Date</Text>} placeholder="Enter VISA Expiry Date" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk component={InputMask} mask={'99999-9999999-9'} {...form1?.getInputProps('CNIC_NIN')} label="CNIC" placeholder="Enter CNIC" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput type='number' form={form1} withAsterisk {...form1?.getInputProps('salary')} label="Salary" placeholder="Enter Salary" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk {...form1?.getInputProps('bank_name')} label="Bank Name" placeholder="Enter Bank Name" />
            </Grid.Col>
            <Grid.Col lg={4} md={6} sm={12}>
                <TextInput form={form1} withAsterisk {...form1?.getInputProps('IBAN')} label="Account No." placeholder="Enter Account No." />
            </Grid.Col>
            <Grid.Col lg={12} md={12} sm={12}>
                <Textarea form={form1} withAsterisk {...form1?.getInputProps('residence_address')} label="Address" placeholder="Enter Address" />
            </Grid.Col>
        </Grid>
    )
}

export default BasicInformation