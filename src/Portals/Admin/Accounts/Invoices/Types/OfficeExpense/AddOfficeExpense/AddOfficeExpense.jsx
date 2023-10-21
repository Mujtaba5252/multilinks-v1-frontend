import React, { useState } from 'react'
import PageWrapper from '../../../../../../../Components/PageWrapper/PageWrapper'
import { Button, Flex, Grid, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';
import { axios_post } from '../../../../../../../Utils/Axios';
import toast from 'react-hot-toast';
import { adminRoutes } from '../../../../../../../routes';
import { useNavigate } from 'react-router';
import CustomLoader from '../../../../../../../Components/CustomLoader/CustomLoader';

function AddOfficeExpense() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const form = useForm({
        initialValues: {
            invoice_date: new Date(),
            payment_to: "",
            payment_for: "",
            expense_amount: undefined,
            attachment: "",
        },
        validate: {
            invoice_date: (value) => value ? null : "Please Select Invoice Date",
            payment_to: (value) => value ? null : "Please Enter Payment To",
            payment_for: (value) => value ? null : "Please Enter Payment For",
            expense_amount: (value) => value ? null : "Please Enter Expense Amount",
        }
    });
    const handleSave = async () => {
        if (form.isValid()) {
            setLoading(true);
            let url = "/office-expense";
            await axios_post({ url: url, data: form.values }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    toast.success("Expense Added Successfully");
                    navigate(adminRoutes.officeExpenseInvoice);
                    setLoading(false);
                }
                else {
                    toast.error(res.data.message);
                    setLoading(false);
                }
            })
        }
        else {
            form.validate();
        }
    }
    return (
        <PageWrapper title="Add Office Expense">
            <CustomLoader loading={loading}>
                <form>
                    <Grid>
                        <Grid.Col span={12}>
                            <DatePickerInput
                                form={form}
                                mt={"md"}
                                mb={"md"}
                                size={"sm"}
                                label="Invoice Date"
                                withAsterisk
                                placeholder="Select Invoice Date"
                                {...form?.getInputProps("invoice_date")}
                            />
                        </Grid.Col>
                        <Grid.Col sm={6} span={12}>
                            <TextInput
                                label="Payment To"
                                placeholder="Enter Payment To"
                                form={form}
                                withAsterisk
                                {...form.getInputProps('payment_to')}
                                required
                            />
                        </Grid.Col>
                        <Grid.Col sm={6} span={12}>
                            <TextInput
                                label="Payment For"
                                placeholder="Enter Payment For"
                                form={form}
                                withAsterisk
                                {...form.getInputProps('payment_for')}
                                required
                            />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <TextInput
                                label="Expense Amount"
                                placeholder="Enter Expense Amount"
                                form={form}
                                type='number'
                                withAsterisk
                                {...form.getInputProps('expense_amount')}
                                required
                            />
                        </Grid.Col>
                    </Grid>
                    <Flex justify="end">
                        <Button mt={20} w={150} onClick={() => handleSave()}>Save</Button>
                    </Flex>
                </form>
            </CustomLoader>
        </PageWrapper>
    )
}

export default AddOfficeExpense