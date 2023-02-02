import { Container, Input, VStack, Heading, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container h={"100vh"} maxW={"container.xl"} p={"16"}>
        <form>
            <VStack alignItems={"stretch"} spacing={"8"} w={"96"} m={"auto"} my={"16"}>
                <Heading textAlign={"center"}>Welcome Back</Heading>
                <Input placeholder={'Email'} type={'email'} required
                focusBorderColor={"purple.500"}
                />
                <Input placeholder={'Password'} type={'password'} required 
                focusBorderColor={"purple.500"}
                />

                <Button variant={"link"} alignSelf={"flex-end"}>
                    <Link to ="/forgorpassword">Forgot Password</Link>
                </Button>
                <Button colorScheme={"purple"} type={"submit"}>Log in</Button>

                <Text textAlign={'right'}>New User?  
                    <Button variant={"link"} colorScheme={'purple'}>
                        <Link to ={"/signup"}>Sign Up</Link>
                    </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Login