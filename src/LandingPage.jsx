import React, { useEffect } from 'react';
import Carousel from './assets/Carousel';
import { Box, Center, Flex, Text, Card, CardHeader, CardBody, CardFooter, Button, Divider, ButtonGroup, Stack, Image, Heading, Spacer } from '@chakra-ui/react';
import Imag from '../src/assets/pexels-katrin-bolovtsova-6077326.jpg';
import '../src/components/Navbar/NavBar.css';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import Hilico from '../src/assets/hilco.svg';
import FadingImage from './assets/FadingImage';
import FadingImage2 from './assets/FadingImage2';
import Lease from '../src/assets/leaseplan-.svg';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";

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
    const reviews = [
        {
            text: 'Its a very good website, really love how all the functionalities fall into place beautiful user experience. ',
            name: 'Daniel Abrahmov',
            desc: 'A lead at Chakra UI',
            imgUrl: ''
        }, {
            text: 'Mid app yall can do better, reach Gear 5th.',
            name: 'Monkey D. Luffy',
            desc: 'The Captain of the Straw Hats Pirates',
            imgUrl: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/14/one-piece-gear-5-luffy.jpeg '
        }, {
            text: 'Beautiful App, i am really in a new world with all these new products.',
            name: 'Andrew Pereira',
            desc: 'A Buyer',
            imgUrl: ''
        }
    ]
    const images = [
        {
            imgUrl: 'https://assets-global.website-files.com/636391c87b868a039b7b7cc3/63651f79b17f1bbe7a86be20_client-logo-cix-grey.svg',
            alt: 'Climate Impact X'
        },
        {
            imgUrl: 'https://assets-global.website-files.com/636391c87b868a039b7b7cc3/63651f79377f295201c7dcab_client-logo-christies-grey.svg',
            alt: "CHRISTIE'S"
        },
        {
            imgUrl: 'https://assets-global.website-files.com/636391c87b868a039b7b7cc3/63651f79d57dab7168390a0b_client-logo-carnext-grey.svg',
            alt: 'Carnext.com'
        },
        {
            imgUrl: 'https://assets-global.website-files.com/636391c87b868a039b7b7cc3/63651f79c1ad2d74373f8aaa_client-logo-lloyds-grey.svg',
            alt: "LLOYD'S"
        },
        {
            imgUrl: 'https://assets-global.website-files.com/636391c87b868a039b7b7cc3/63d28548db29fe26df9714e4_marufreight-grey.svg',
            alt: 'MaruFreight'
        }
    ]
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Box bg={"#f5f5f5"} >
            <Carousel slides={slides} />
            <Box height={""} marginTop={"50px"}>
                <Text fontSize={"40px"} textAlign={"center"} fontWeight={"600"}>Top Products</Text>
                <Box marginLeft={'180px'} marginRight={"200px"}>
                    <Flex>
                        <Box width={'300px'} backgroundColor={'lighgray'}>
                            <Box _hover={{}}>
                                <Image
                                    margin={'15px'}
                                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    width={'350px'}
                                />
                                <Flex>
                                    <Text fontSize={"20px"} fontWeight={"500"} marginLeft={"30px"}>Thailand Couch</Text>
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
                                    <Text fontSize={"20px"} fontWeight={"500"} marginLeft={"30px"}>Thailand Couch</Text>
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
                                    <Text fontSize={"20px"} fontWeight={"500"} marginLeft={"30px"}>Thailand Couch</Text>
                                    <Spacer />
                                    <Text fontSize={"20px"} fontWeight={"500"} marginRight={"20px"}>$80</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Box>

            </Box>

            <Box marginTop={"180px"} height={'60vh'} fontSize={"30px"} marginLeft={'180px'} marginRight={"180px"} data-aos= "fade-up" >
                <Flex>
                    <Box width={"50%"}>
                        <Text paddingTop={"50px"} fontSize={"40px"} fontWeight={"700"}>We match the right buyers, <br />to the right products,<br /> at the right price</Text>
                        <Button width={"90px"} borderRadius={"20px"} _hover={{ width: '100px', height: "50px", transition: '0.2s' }} bgGradient={"linear(to-r, #226a87, #247675 )"} color={"white"}>Join Us</Button>
                    </Box>
                    <Spacer />
                    <Image width={"50%"} borderRadius={"10px"} alt={"bid image"} src={Imag} />
                </Flex>
            </Box>
            <Box marginLeft={'180px'} marginRight={"180px"}>
                <Text fontSize={"40px"} textAlign={"center"} fontWeight={"600"}>Reviews By Our Top Customers</Text>
                <Flex marginTop={"50px"} justifyContent={"space-between"}>
                    {reviews.map((review, index) => (
                        <Box h={"300px"} w={"300px"} boxShadow='dark-lg' p='6' rounded='lg' bg='white' position={'relative'} data-aos= "fade-right" >
                            <Flex direction={"column"} gap={"20px"} flex={"1"}>
                                <Flex>
                                    <Text fontSize={"40px"} className='quote' >"</Text>
                                    <Text marginTop={"40px"} maxH={"40px"}>{review.text}</Text>
                                    <Text fontSize={"40px"} className='quote' >"</Text>
                                </Flex>
                                <Flex gap={"15px"} position={'absolute'} bottom={"10"}>
                                    <Avatar bgcolor={"gray"} name={review.name} src={review.imgUrl} />

                                    <Flex direction={"column"}>
                                        <Text fontWeight={"500"}>{review.name} - </Text>
                                        <Text fontSize={"12px"} color={"gray"}>{review.desc}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Image />
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box marginTop={"200px"} w={"100%"} bgColor={'#e0e0e0'} h={"300px"}>
                <Box marginLeft={'180px'} marginRight={"180px"}>
                    <Flex direction={"column"} gap={"20px"}>
                        <Text textAlign={"center"} paddingTop={"20px"} fontSize={"25px"} fontWeight={500}>We are leading the wave of digital transformation</Text>
                        {/* <Text>At MunaBids, We offer a arketplace like no other to all of our buyers and sellers. We adopt a collaborative and hands-on approach  bidding has never been this easy </Text> */}
                        <Text paddingBottom={"30px"} borderBottom={"1px solid lightgray"} noOfLines={2} >MunaBids is at the forefront of digital transformation in bidding systems. Our innovative solutions optimize efficiency, foster competitiveness, and propel <Text textAlign={"center"}>bidding environments into a new era of success and innovation.</Text></Text>
                        <Flex marginTop={"20px"} justifyContent={'space-between'}>
                            <FadingImage src={Hilico} alt={"Hilco"} />
                            {images.map((image) => (
                                <Image src={image.imgUrl} alt={image.alt} w={"132px"} h={"39px"} />
                            ))}
                            <FadingImage2 src={Lease} w={"10px"} h={"39px"} />

                        </Flex>
                    </Flex>
                </Box>
            </Box>

            <Footer />
        </Box>

    );
}

export default LandingPage;
