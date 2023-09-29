import React from 'react'
import PageWrapper from '../../../../Components/PageWrapper/PageWrapper'
import { Button, Grid } from '@mantine/core'
import { Blockquote, Coin, Paperclip, Wallet } from 'tabler-icons-react'
import { DarkBlue } from '../../../../Utils/ThemeColors'
import { useNavigate } from 'react-router-dom'
import { adminRoutes } from '../../../../routes'
import { useMediaQuery } from '@mantine/hooks'

function Index({ isInvoice }) {
  
  const navigate=useNavigate();
  const handleMargin=useMediaQuery('(max-width: 1199.20px)')

  return (
    <>
      <PageWrapper title={isInvoice ? 'Invoices' : 'Receipts'}>
        <Grid>
          {!isInvoice&&<Grid.Col span={12} mb={handleMargin?0:10}>
            <Button 
              fullWidth h={170} leftIcon={<Blockquote size={50} />} 
              bg={DarkBlue()} onClick={
                ()=>navigate(adminRoutes.approvedQuotationsReceipts)
              } 
              style={{ fontSize: '20px' }}>
                Approved Quotations</Button>
          </Grid.Col>}
          <Grid.Col xs={12} lg={4} sm={6} md={6}>
            <Button 
              fullWidth h={170} leftIcon={<Coin size={50} />} 
              bg={DarkBlue()} onClick={
                ()=>isInvoice?navigate(adminRoutes.paymentsInvoice):navigate(adminRoutes.paymentsReceipts)
              } 
              style={{ fontSize: '20px' }}>
                Payment</Button>
          </Grid.Col>
          <Grid.Col xs={12} lg={4} sm={6} md={6}>
            <Button 
              fullWidth h={170} leftIcon={<Wallet size={50} />} 
              bg={DarkBlue()} onClick={
                ()=>isInvoice?navigate(adminRoutes.clientExpenseInvoice):navigate(adminRoutes.clientExpenseReceipts)
              } 
              style={{ fontSize: '20px' }}>
                Client Expense</Button>
          </Grid.Col>
          <Grid.Col xs={12} lg={4} sm={12} md={12}>
            <Button 
              fullWidth h={170} leftIcon={<Paperclip size={50} />}
              bg={DarkBlue()} onClick={
                ()=>isInvoice?navigate(adminRoutes.officeExpenseInvoice):navigate(adminRoutes.officeExpenseReceipts)
              } 
              style={{ fontSize: '20px' }}>
                Office Expense</Button>
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default Index