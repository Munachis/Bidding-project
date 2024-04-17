import { Box,Image,  Button, Flex, Input, InputGroup, InputRightAddon, Spacer, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import "./NavBar.css";
import Logo from '../../assets/default1.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <Box  padding={"10px"} position={"sticky"} top={"0px"}  zIndex={100000} background={"white"} >
            <Flex paddingLeft={"40px"} paddingRight={"40px"} >
                <Box className='font' >
                    <Image src={Logo} h={"40px"} />
                </Box>
                <Spacer />
                <Stack spacing={4}>
                    <InputGroup >
                        <Input width={"400px"} focusBorderColor='lime' placeholder='Search' size='md' />
                        <InputRightAddon>
                            Search
                        </InputRightAddon>
                    </InputGroup>
                </Stack>
                <Spacer />
                <Box>
                    <Flex gap={"10px"}>
                        <Link to="/signup"><Button  size='md'>Sign Up</Button></Link> 
                        <Button>Login</Button>
                    </Flex>
                </Box>
            </Flex>


            
        </Box>

    );
}

export default Navbar;
