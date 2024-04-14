import React, { useEffect } from 'react';
import Carousel from './assets/Carousel';
import { Box, Center, Flex, Text, Card, CardHeader, CardBody, CardFooter, Button, Divider, ButtonGroup, Stack, Image, Heading, Spacer } from '@chakra-ui/react';
import Imag from '../src/assets/pexels-katrin-bolovtsova-6077326.jpg';

const LandingPage = () => {
    const slides = [
        {
            imageUrl: 'https://images.pexels.com/photos/1038256/pexels-photo-1038256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            text: 'Go from ...'
        }, {
            imageUrl: 'https://images.pexels.com/photos/12119220/pexels-photo-12119220.jpeg',
            text: 'To this with us  '
        }, {
            imageUrl: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            text: 'Your bidding has no limit...'
        }

    ];

    return (
        <>
            <Carousel slides={slides} />
            <Box height={""} marginTop={"50px"}>
                <Text fontSize={"40px"} textAlign={"center"} fontWeight={"600"}>Top Products</Text>
                <Box marginLeft={'150px'} marginRight={"200px"}>
                    <Flex>
                        <Box width={'300px'} backgroundColor={'lighgray'}>
                            <Box>
                                <Image
                                    margin={'15px'}
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    width={'350px'}
                                />
                                <Flex>
                                    <Text  fontSize={"20px"} fontWeight={"500"} marginLeft={"30px"}>Thailand Couch</Text>
                                    <Spacer />
                                    <Text fontSize={"20px"} fontWeight={"500"} marginRight={"20px"}>$80</Text>
                                </Flex>
                            </Box>
                        </Box>
                        <Spacer />
                        <Box width={'300px'} backgroundColor={'lighgray'}>
                            <Box>
                                <Image
                                    margin={'15px'}
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    width={'350px'}
                                />
                                <Flex>
                                    <Text  fontSize={"20px"} fontWeight={"500"} marginLeft={"30px"}>Thailand Couch</Text>
                                    <Spacer />
                                    <Text fontSize={"20px"} fontWeight={"500"} marginRight={"20px"}>$80</Text>
                                </Flex>
                            </Box>
                        </Box>
                        <Spacer />
                        <Box width={'300px'} backgroundColor={'lighgray'}>
                            <Box>
                                <Image
                                    margin={'15px'}
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    width={'350px'}
                                />
                                <Flex>
                                    <Text  fontSize={"20px"} fontWeight={"500"} marginLeft={"30px"}>Thailand Couch</Text>
                                    <Spacer />
                                    <Text fontSize={"20px"} fontWeight={"500"} marginRight={"20px"}>$80</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Box>

            </Box>

            <Box marginTop={"150px"} height={'60vh'} fontSize={"30px"} marginLeft={'150px'} marginRight={"150px"}>
                <Flex>
                    <Box width={"50%"}>
                        <Text paddingTop={"50px"} fontSize={"40px"} fontWeight={"700"}>We match the right buyers, <br />to the right products,<br /> at the right price</Text>
                        <Button width={"90px"} bgColor={"black"} color={"white"}>Join Us</Button>
                    </Box>
                    <Spacer/>
                    <Image width={"50%"}  borderRadius={"10px"} src={Imag} />
                </Flex>
            </Box>
            <Box marginLeft={'150px'} marginRight={"150px"}>
            <Text fontSize={"40px"} textAlign={"center"} fontWeight={"600"}>Reviews By Our Top Customers</Text>
            <Flex marginTop={"50px"}>
                <Box h = {"300px"} w={"300px"} boxShadow='dark-lg' p='6' rounded='md' bg='white'>
                    <Text>

                    </Text>
                    <Flex>
                        <Image/>
                        <Text>Mary Her</Text>
                    </Flex>
                </Box>
            </Flex>
            </Box>

            
        </>
    );
}

export default LandingPage;
