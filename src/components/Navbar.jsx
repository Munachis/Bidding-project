import { Box, Button, Flex, Input, InputGroup, InputRightAddon, Spacer, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import "./Navbar/NavBar.css";
const Navbar = () => {

    return (
        <Box padding={"10px"} position={"sticky"} top={"0px"} zIndex={5} background={"white"} >
            <Flex >
                <Box className='font'>MUNA</Box>
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
                        <Button size='md'>Sign Up</Button>
                        <Button>Login</Button>
                    </Flex>
                </Box>
            </Flex>


            
        </Box>

    );
}

export default Navbar;
