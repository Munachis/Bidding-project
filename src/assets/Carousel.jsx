import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import "../components/Navbar/NavBar.css"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };


    return (
        <Box
        margin={"10px"}
            position="relative"
            height="85vh"
            borderRadius={"20px"}
            overflow="hidden"
            backgroundImage={`url(${slides[currentSlideIndex].imageUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            transition="background-image 0.5s ease"
        >
            <Box
                marginLeft={"10%"}
                position="absolute"
                top="40%"
                left="2rem"
                transform="translateY(-50%)"
                zIndex="2"
                color = {"gainsboro"}
                className='mainfont'
                
            >
                <Text fontSize="5xl" fontWeight={"700"} textShadow={'2px 2px 2px  lightgray'} backdropFilter={'grayscale(30%)'} color={'black'}>{slides[currentSlideIndex].text}</Text>
            </Box>
            <Button
                onClick={handlePrevSlide}
                position="absolute"
                left="1rem"
                top="50%"
                transform="translateY(-50%)"
                zIndex="1"
            >
                <IoIosArrowBack />
            </Button>
            <Button
                onClick={handleNextSlide}
                position="absolute"
                right="1rem"
                top="50%"
                transform="translateY(-50%)"
                zIndex="1"
            >
                <IoIosArrowForward />
            </Button>
        </Box>
    );
};


export default Carousel;
