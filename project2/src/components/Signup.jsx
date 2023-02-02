import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <Container h={"100vh"} maxW={"container.xl"} p={"16"}>
        <form>
          <VStack alignItems={"stretch"} w={"96"} spacing={"8"} m={"auto"} my={"16"}>
              <Heading textAlign={'center'}>Video Hub</Heading>
              <Avatar alignSelf={"center"} boxSize={'32'} />
              <Input placeholder='Enter your Name' type={"text"}  required focusBorderColor={'purple.500'}/>
              <Input placeholder='Enter your Email' type={"email"} required focusBorderColor={"purple.500"}/>
              <Input placeholder='Enter your Password' type={"password"}  required focusBorderColor={"purple.500"}/>

              <Button colorScheme={"purple"} type={"submit"}>Sign up</Button>

              <Text textAlign={'right'}>Already Have an account?
              <Button variant={"link"} colorScheme={'purple'}>
              <Link to='/login'>Login</Link>
              </Button>
              </Text>
          </VStack>
        </form>
    </Container>
  )
}

export default Signup