import React from 'react'
import {Drawer, DrawerBody, DrawerCloseButton, DrawerHeader, DrawerOverlay, DrawerContent, Button, useDisclosure, Stack } from '@chakra-ui/react'
import {VStack, HStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

 function Header(){
    const {isOpen, onOpen, onClose} = useDisclosure()
 
    return(
        <div>
            <Button
                pos={"fixed"}
                top={"4"}
                left={"4"}
                colorScheme={"purple"}
                p={"0"}
                h={"10"}
                w={"10"}
                borderRadius={"full"}
                onClick ={onOpen}
                zIndex={"overlay"}
            >
                <BiMenuAltLeft size={"20"} />
            </Button>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                       <VStack alignItems={"flex-start"} >
                            <Button onClick={onClose}  variant={"ghost"} colorScheme="purple" my={"2"}>
                                <Link to='/'>Home</Link>
                            </Button>
                            <Button onClick={onClose}  variant={"ghost"} colorScheme="purple" my={"2"}>
                                <Link to='/videos'>Videos</Link>
                            </Button>
                            <Button  onClick={onClose} variant={"ghost"} colorScheme="purple" my={"2"}>
                                <Link to='/videos?category=free'>Free Videos</Link>
                            </Button>
                            <Button onClick={onClose}  variant={"ghost"} colorScheme="purple" my={"2"}>
                                <Link to='/upload'>Upload Video</Link>
                            </Button>
                        </VStack>

                        <HStack 
                            position={"absolute"} 
                            bottom={"10"} 
                            left={"0"}
                            w={"full"}
                            justifyContent={"space-evenly"}
                        >

                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to='/login'>Log In</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                                <Link to='/signup'>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </div>
    )
}

export default Header