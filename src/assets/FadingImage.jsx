import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const FadingImage = ({ src, alt }) => {
    return (
        <Box position="relative">
            <Box
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                width="50%"
                bgGradient="linear(to right, #e0e0e0, rgba(0, 0, 0, 0))"
            />
            <Image src={src} alt={alt} w="100%" h="auto" />
        </Box>
    );
};

export default FadingImage; 