import React from 'react';
import { Box, Image, Button, Flex, Input, InputGroup, InputRightAddon, Spacer, Text, Link, ExternalLinkIcon } from '@chakra-ui/react';
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Img1 from '../../assets/defaultwhite.svg';

const Footer = () => {
    return (
        <Box bgGradient={"linear(to-r, #226a87, #247675 )"} w={"100%"} h={"450px"} zIndex={0} >
            <Flex padding={"30px 180px"} justifyContent={'space-between'}>
                <Image src={Img1} h={"69px"} />
                <Box id='Socials' >
                    <Flex gap={"8%"} paddingTop={"20px"}>
                        <Link fontSize={"28px"} color={"white"} href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </Link>
                        <Link fontSize={"28px"} color={"white"} href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </Link>
                        <Link fontSize={"28px"} color={"white"} href="https://twitter.com/MunaMUna1076238" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </Link>
                        <Link fontSize={"28px"} color={"white"} href="https://twitter.com/MunaMUna1076238" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </Link>
                    </Flex>
                </Box>
            </Flex>
            <Flex margin={"auto 180px"} paddingBottom={"70px"} justifyContent={'space-between'} borderBottom={"1px solid silver"}>
                <Box>
                    <Flex direction={"column"}>
                        <Text fontSize={"20px"} fontWeight={600} paddingBottom={"20px"} color={"gray"}>Solution</Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex direction={"column"}>
                        <Text fontSize={"20px"} fontWeight={600} color={"gray"}>Solution</Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex direction={"column"}>
                        <Text fontSize={"20px"} fontWeight={600} color={"gray"}>Solution</Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex direction={"column"}>
                        <Text fontSize={"20px"} fontWeight={600} color={"gray"}>Solution</Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex direction={"column"}>
                        <Text fontSize={"20px"} fontWeight={600} color={"gray"}>Solution</Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                        <Text fontSize={"17px"} color={"white"}>Lorem Ipsum </Text>
                    </Flex>
                </Box>
            </Flex>
            <Flex>
                <Text fontSize={"sm"} color={"#f2f3f4"} margin={"10px 180px"}>
                    Munabids is a !registered trademark of Muna's person and Co. <Text>Registered Company No. 0123456789 - All Rights Reserved</Text>  
                </Text>
            </Flex>
        </Box>
    );
}

export default Footer;
