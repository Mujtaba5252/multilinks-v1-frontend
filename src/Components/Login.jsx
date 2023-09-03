import { Box, Button, Center, Container, Flex, Grid, Image, Input, Stack, Text, TextInput, Title, useMantineTheme } from '@mantine/core'
import React from 'react'
import fileImage from "../assets/images/file.png"
import logo from "../assets/images/logo.png"
import logoWithText from "../assets/images/logo_with_text_dark.png"
import { useMediaQuery } from '@mantine/hooks';
const Login = () => {
  const theame = useMantineTheme();
  const  isSmall=useMediaQuery('(max-width: 992px)');
  return (
    <Grid style={{ width: "100vw", height: "100vh", backgroundColor: theame.colors.basicBlues[0] }}>
    {!isSmall&&
      <Grid.Col md={6} >
        <Grid >
          <Grid.Col span={12}>
            <Image src={logo} style={{ width:'200px' }} />
          </Grid.Col>
          <Grid.Col span={12}>
            <Center mt={30}>
              <Stack spacing={0}>
                <Title color={theame.colors.basicColors[1]} size='64px' fw={900}>MULTILINKS</Title>
                <Text color={theame.colors.basicColors[1]} size='25px'  fw={300}>Links to Success</Text>  
              </Stack>
            </Center>
          </Grid.Col>
          <Grid.Col span={12} p={0}>
            <Container p={0} style={{ position: "absolute", bottom: '0', left: '0', zIndex: "" }}>
              <Image src={fileImage} style={{ width: "30rem" }} />
            </Container>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      } 
      <Grid.Col md={6} >
        <Center p={0} style={{ height: "100%" }}>
          <Box p={0} bg={theame.colors.basicColors[1]} style={{ width: isSmall?'98%':'70%', borderRadius: "20px", boxShadow: "1px 1px 20px 2px #696969 " }}>
            <Container p={40} mt={!isSmall?20:0} mb={!isSmall?20:0}>
              {!isSmall?
                <Title order={1} align='left' color={theame.colors.basicBlues[0]} fw={900} size={isSmall?'40px':'64px'}>LOGIN</Title>
                :
                <Center mb={30}>
                  <Image src={logoWithText} style={{ width:'300px' }} />
                </Center>
              }
              <form>
                <TextInput mt={"md"} mb={"md"} label={'Email'} size='lg' placeholder='Enter Email' />
                <TextInput mt={"md"} mb={"md"} type='password' size='lg' label={'Password'} placeholder='Enter Password' />
                <Center>
                  <Button mt={"md"} mb={"md"} size='lg' fullWidth>LOGIN</Button>
                </Center>
              </form>
            </Container>
          </Box>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default Login;
