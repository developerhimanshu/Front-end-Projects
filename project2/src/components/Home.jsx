import { Box, Heading,  Img, Container, Stack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform: "translate(-50%, -50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl",
}
const Home = () => {
  return (
    <Box >
       <MyCarousel/>

       <Container
            minH={"100vh"} 
            maxW={"container.xl"}  
            p={"16"}>
            <Heading 
                textTransform={"uppercase"} 
                py = "2" 
                w={'fit-content'} 
                borderBottom={"2px solid"}
                m="auto"
            >
            Services
            </Heading>

            <Stack
            h="full"
            p={"4"}
            alignItems={"center"}
            direction={["column","column", "row"]}
            >
                <Image src={img5} h={["40","300", "400"]} />

                <Text letterSpacing={"widest"} lineHeight={"190%"}
                    p={["4", "16"]}
                    textAlign={"center"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a voluptates aliquid velit, itaque minus atque corporis laudantium rerum ipsa non nisi obcaecati quae, dolores eum similique vero iure possimus doloremque. Architecto provident aspernatur dolorum facere quo. Consequatur ut commodi quasi illum cupiditate, enim ipsum, veniam molestias veritatis assumenda eius quisquam quibusdam dolorem voluptates optio delectus quidem ea quis! Sit quis repudiandae eum esse eligendi ut dignissimos voluptate, tempore vitae beatae ipsam, cum sint ab quisquam, porro rem. Maxime fugiat earum sunt repellendus eum facere, labore voluptate vero praesentium est eveniet voluptatibus. Voluptates molestias minus accusantium cumque soluta, facilis reprehenderit.
                </Text>
            </Stack>
                
       </Container>
    </Box>
  )
};

const MyCarousel = () => {
   return  (
    <Carousel autoplay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h = {"100vh"}>
            <Img  src={img1}/>
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions} >
                Watch The Future
            </Heading>

        </Box>
        <Box w="full" h = {"100vh"}>
            <Img  src={img2}/>
            <Heading bgColor={"whiteAlpha.900"} color={'black'}  {...headingOptions}>
               Future is Gaming
            </Heading>

        </Box>
        <Box w="full" h = {"100vh"}>
            <Img  src={img3}/>
            <Heading bgColor={"whiteAlpha.600"} color={'black'}  {...headingOptions}>
               Gaming on Console
            </Heading>

        </Box>
        <Box w="full" h = {"100vh"}>
            <Img  src={img4}/>
            <Heading bgColor={"whiteAlpha.600"} color={'black'}  {...headingOptions}>
               Night life is cool
            </Heading>

        </Box>
    </Carousel>
    )
}

export default Home