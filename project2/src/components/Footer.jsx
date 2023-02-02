import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
        <Stack direction={["column", "row"]}>
            <VStack
                alignItems={"stretch"}
                width={"full"}
                px={"4"}
            >
                <Heading size="md" textTransform="uppercase" textAlign={['center', 'left']}>
                    Subscribe to get updates.
                </Heading>
                <HStack
                 borderBottom={"3px solid rgba(100, 100, 100, 1)"}
                 py={2}
                >
                    <Input  placeholder='Enter email here...' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor={"none"}
                    
                    />
                    <Button
                    p={"0"}
                    colorScheme={"purple"}
                    variant={"ghost"}
                    borderRadius={"0 20px 20px 0"}
                    >
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>

            <VStack 
            w={"full"}
            borderLeft={["none", "1px solid white"]}
            borderRight={["none", "1px solid white"]}
            >
                <Heading size='md' textTransform="uppercase" textAlign="center">
                    Video Hub
                </Heading>
                <Text>All rights reserved</Text>
            </VStack>

            <VStack 
            w={"full"}
            >
                <Heading size={"md"} textTransform={"uppercase"}>
                    Social Media
                </Heading>
                <Button variant={"link"} colorScheme={'whiteAlpha'}>
                    <a target={"blank"} href="https://youtube.com/6packprogrammer">Youtube</a>
                </Button>
                <Button variant={"link"} colorScheme={'whiteAlpha'}>
                    <a target={"blank"} href="https://instagram.com/himanshuchamyal01">Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme={'whiteAlpha'}>
                    <a target={"blank"} href="https://github.com/developerhimanshu">Github</a>
                </Button>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer