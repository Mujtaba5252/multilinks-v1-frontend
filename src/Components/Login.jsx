import { Grid, Text, Title } from '@mantine/core'
import React from 'react'

const Login = () => {
  return (
    <Grid style={{width:"100vw",height:"100vh"}}>
      <Grid.Col lg={6} sm={12} style={{backgroundColor:"pink"}}>
        <Title order={1}>Login</Title>
      </Grid.Col>
      <Grid.Col lg={6} sm={12} style={{backgroundColor:"aqua"}}>
        <Title order={1}>happy</Title>
      </Grid.Col>
    </Grid>
  )
}

export default Login