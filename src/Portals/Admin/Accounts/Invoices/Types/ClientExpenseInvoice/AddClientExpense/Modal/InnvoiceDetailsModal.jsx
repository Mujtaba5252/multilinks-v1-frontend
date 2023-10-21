import { Button, Flex, Grid, Text, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useForm } from '@mantine/form'
import React, { useEffect } from 'react'
import { MainBlue } from '../../../../../../../../Utils/ThemeColors'
import { axios_post } from '../../../../../../../../Utils/Axios'
import { useNavigate } from 'react-router-dom'
import { adminRoutes } from '../../../../../../../../routes'
import toast from 'react-hot-toast'

function InnvoiceDetailsModal({ Data, genrateInvoice, setGenrateInvoice }) {
    const navigate=useNavigate();
    const form = useForm({
        initialValues: {
            quotation:Data.id,
            invoice_ID: "not found",
            invoice_date: new Date(),
            attachment: "",
            service_type: Data.service_type,
            payment_to: "",
            payment_for: Data.service,
            expense_amount: Data.amount,
        },
        validate: {
            payment_to: (value) => (value ? null : "Please Enter Payment To"),
        }
    })
    const handleInvoiceGenration = async() => {
        if(form.isValid()){
            const values = {
                ...form.values,
                payment_for: Data.UUID,
            }
            const url=`/client-expense`
            await axios_post({url:url,data:values}).then((res)=>{
                if(res.status===200 || res.status===201){
                    localStorage.removeItem('expenseType')
                    navigate(adminRoutes.clientExpenseInvoice)
                }
                else{
                    toast.error(res.data.message)
                }
            })  
        }
        else{
            form.validate()
        }
    }
    useEffect(() => {
        console.log(Data)
    }, [])
    return (
        <>
            <Grid>
                <Grid.Col sm={6} span={12}>
                    <DatePickerInput
                        form={form}
                        {...form?.getInputProps('invoice_date')}
                        label="Invoice Date"
                        readOnly
                    />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                    <TextInput
                        form={form}
                        {...form?.getInputProps('service_type')}
                        label="Service Type"
                        readOnly
                    />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                    <TextInput
                        form={form}
                        {...form?.getInputProps('payment_to')}
                        label="Payment To"
                        placeholder="Enter Payment To"
                        withAsterisk
                    />
                </Grid.Col>
                <Grid.Col sm={6} span={12}>
                    <TextInput
                        form={form}
                        {...form?.getInputProps('payment_for')}
                        label="Payment For"
                        readOnly
                    />
                </Grid.Col>
                <Grid.Col span={12}>
                    <TextInput
                        form={form}
                        {...form?.getInputProps('expense_amount')}
                        label="Expense Amount"
                        readOnly
                    />
                </Grid.Col>
            </Grid>
            <Flex justify={'center'}>
                <Button variant='light' w={200} mr={10} mt={20} onClick={() => setGenrateInvoice(false)}>
                    Cancel
                </Button>
                <Button w={200} mt={20} color={MainBlue()} onClick={handleInvoiceGenration}>
                    Generate Invoice
                </Button>
            </Flex>
        </>
    )
}

export default InnvoiceDetailsModal