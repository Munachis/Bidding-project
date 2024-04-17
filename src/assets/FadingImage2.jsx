import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const FadingImage2 = ({ src, alt }) => {
    return (
        <Box position="relative">
            <Box
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                right={0}
                bgGradient="linear(to right,  rgba(0, 0, 0, 0), #e0e0e0)"
            />
            <Image src={src} alt={alt} w="140px" h="45px" />
        </Box>
    );
};

export default FadingImage2; 