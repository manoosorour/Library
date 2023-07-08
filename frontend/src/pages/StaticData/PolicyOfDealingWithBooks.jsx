import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react';
import WithSubnavigation from '../LibarayHeader/LibararyHeader';
import CaptionCarousel from '../LibararyCarasoul/LibararyCarasoul';
import LargeWithNewsletter from '../LibraryFooter/LibarayFooter';


const PolicyOfDealingWithBooks = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        سياسة التعامل بالمكتبة فى وقت الذروه
                    </Heading>

                </Stack>
                <Container maxW={'5xl'} mt={12} textAlign={"right"}>

                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default PolicyOfDealingWithBooks;