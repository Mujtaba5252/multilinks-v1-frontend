import { Grid, Container, Flex, Title, Text, Tooltip, Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { Mail, Message, Phone, UserCircle, User, Cash, FileInvoice, CircleCheck, Tex, Key, Clock } from 'tabler-icons-react'
import { MainBlue } from '../../../../../../../Utils/ThemeColors'
import PageWrapper from '../../../../../../../Components/PageWrapper/PageWrapper'
import { CurrencyFormatter, camelCaseFormatter } from '../../../../../../../Utils/CommonFormatters'
import { useMediaQuery } from '@mantine/hooks'
import ModalComponent from '../../../../../../../Components/ModalComponent/ModalComponent'
import InnvoiceDetailsModal from './Modal/InnvoiceDetailsModal'

function AddClientExpenseInvoice() {
  const ClientData = JSON.parse(localStorage.getItem('expenseType'))
  const isSmall = useMediaQuery('(max-width: 767.20px)')
  const [paidAmount, setPaidAmount] = useState(0)
  const [remainingAmout, setRemainingAmout] = useState(0)
  const [genrateInvoice, setGenrateInvoice] = useState(false)
  const [invoiceData, setInvoiceData] = useState({})
  const calculateExpenseStats = () => {
    if (ClientData.offered_services.length > 0) {
      ClientData.offered_services.forEach((clientExpense) => {
        if (clientExpense.ispaid) {
          setPaidAmount(prevState => prevState + parseInt(clientExpense.amount))
        } else {
          setRemainingAmout(prevState => prevState + parseInt(clientExpense.amount))
        }
      })
    }
  }
  useEffect(() => {
    setPaidAmount(0)
    setRemainingAmout(0)
    calculateExpenseStats();
  }, [])
  return (
    <>
      <PageWrapper title="Add Client Expense Invoice">
      <ModalComponent
        opened={genrateInvoice}
        setOpened={setGenrateInvoice}
        radius='md'
        title={'Invoice Details'}
        size={800}
        >
          <InnvoiceDetailsModal Data={invoiceData} genrateInvoice={genrateInvoice} setGenrateInvoice={setGenrateInvoice}/>
      </ModalComponent>
        <Grid>
          <Grid.Col span={12}>
            <Container fluid mt={10} mih={200} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 5px #D3D3D3' }}>
              <Grid>
                <Grid.Col sm={3} span={12}>
                  <Flex justify='center' mt={5} align='center' style={{ height: '100%', width: '100%' }}>
                    <UserCircle size={170} color={MainBlue()} />
                  </Flex>
                </Grid.Col>
                <Grid.Col sm={5} span={12}>
                  <Grid mt={20} mb={10}>
                    <Grid.Col span={12} style={{ borderBottom: "1px solid #d3d3d3" }}>
                      <Title order={2} ml={isSmall?12:0} style={{ color: MainBlue() }}>{ClientData.client.client_name}</Title>
                      <Text  ml={isSmall?12:0} style={{ fontSize: "14px" }}>{ClientData.client.UID}</Text>
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <Flex align={'center'} ml={isSmall?12:0} mt={10}>
                        <Phone color={MainBlue()} />
                        <Text ml={5} style={{ fontSize: "14px" }}>{ClientData.client.client_contact_number}</Text>
                      </Flex>
                      <Flex align={'center'} ml={isSmall?12:0}   mt={10}>
                        <User color={MainBlue()} />
                        <Text ml={5} style={{ fontSize: "14px" }}><b>Generated By:</b> {ClientData.staff.name}</Text>
                      </Flex>
                      <Flex align={'center'} ml={isSmall?12:0}   mt={10}>
                        <Mail color={MainBlue()} />
                        <Text ml={5} style={{ fontSize: "14px" }}>{ClientData.client.client_email}</Text>
                      </Flex>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
                <Grid.Col sm={4} span={12}>
                  <Grid ml={5} mt={isSmall ? 5 : 20} mb={10}>
                    <Grid.Col sm={12} span={6}>
                      <Title order={isSmall ? 4 : 3} mt={isSmall ? 2 : 0} style={{ color: MainBlue() }}>Client Balance</Title>
                    </Grid.Col>
                    <Grid.Col sm={12} span={6}>
                      <Flex align='center'>
                        <Cash size={isSmall ? 20 : 30} color={MainBlue()} />
                        <Text size={isSmall ? 20 : 30} fw={700} order={1} ml={10} style={{ wordWrap: "break-word" }}> {CurrencyFormatter(ClientData.client_balance-ClientData.client_expense)}</Text>
                      </Flex>
                    </Grid.Col>
                    <Grid.Col sm={12} span={6}>
                      <Title order={isSmall ? 4 : 3} mt={isSmall ? 3 : 0} style={{ color: MainBlue() }}>Grand Total</Title>
                    </Grid.Col>
                    <Grid.Col sm={12} span={6}>
                      <Flex align='center'>
                        <Cash size={isSmall ? 20 : 30} color={MainBlue()} />
                        <Text size={isSmall ? 20 : 30} fw={700} order={1} ml={10} style={{ wordWrap: "break-word" }}> {CurrencyFormatter(ClientData.grand_total_numeric)}</Text>
                      </Flex>
                    </Grid.Col>
                    {!isSmall && <Grid.Col sm={12} span={12}>
                      <Flex align='center'>
                        <Text size={12} fw={300} order={1} ml={40} style={{ marginTop: "-13px" }}> {camelCaseFormatter(ClientData.grand_total_in_words)}</Text>
                      </Flex>
                    </Grid.Col>}
                  </Grid>
                </Grid.Col>
              </Grid>
            </Container>
          </Grid.Col>
          <Grid.Col span={12}>
            <Container fluid mt={10} pt={20} pb={20} style={{ borderRadius: "10px", boxShadow: '0px 0px 5px 5px #D3D3D3' }}>
              <Grid width={"100%"} style={{ overflowY: "auto", borderBottom: "2px solid #D3D3D3" }}>
                <Grid.Col span={6}><b style={{ color: MainBlue() }}>Service</b> </Grid.Col>
                <Grid.Col span={5}><b style={{ color: MainBlue() }}>Amount</b> </Grid.Col>
                <Grid.Col span={1}><b style={{ color: MainBlue() }}>Invoice</b> </Grid.Col>
                {ClientData.offered_services.length > 0 &&
                  ClientData.offered_services.map((clientExpense) => {
                    return (
                      <>
                        <Grid.Col span={6}>{clientExpense.service}</Grid.Col>
                        <Grid.Col span={5}>{CurrencyFormatter(clientExpense.amount)}</Grid.Col>
                        <Grid.Col span={1}>
                          {clientExpense.is_paid ?
                            <Tooltip label='Expense Generated'>
                              <Button variant='default' style={{ border: "none" }}>
                                <CircleCheck cursor={'pointer'} color='green' />
                              </Button>
                            </Tooltip>
                            :
                            (clientExpense.client_expense_generated==true?
                              <Tooltip label='Waiting For Approval or Rejection'>
                                <Button variant='default' style={{ border: "none" }}>
                                    <Clock cursor={'pointer'} color='orange' />
                                  </Button>
                              </Tooltip>
                            :
                            <Tooltip label='Generate Expense Invoice'>
                              <Button variant='default' style={{ border: "none" }}>
                                <FileInvoice cursor={'pointer'} color={MainBlue()} 
                                onClick={() => {
                                  setGenrateInvoice(true);
                                  setInvoiceData({...clientExpense, service_type: ClientData.service_type,id:ClientData.id})
                                  }}/>
                              </Button>
                            </Tooltip>)
                          }
                        </Grid.Col>
                      </>
                    )
                  })
                }
              </Grid>
              <Grid>
                <Grid.Col sm={9} span={7}>
                  <Text mt={20} color={MainBlue()}>Paid Services Amount</Text>
                  <Text mt={10} color={MainBlue()}>Remaining Services Amount</Text>
                </Grid.Col>
                <Grid.Col sm={3} span={5}>
                  <Text mt={20}>{CurrencyFormatter(ClientData.client_expense)}</Text>
                  <Text mt={10} style={{ wordWrap: "break-word" }}>{CurrencyFormatter(ClientData.total-ClientData.client_expense)}</Text>
                </Grid.Col>
              </Grid>
            </Container>
          </Grid.Col>
        </Grid>
      </PageWrapper>
    </>
  )
}

export default AddClientExpenseInvoice