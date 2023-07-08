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


const LibararyVision = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        رؤيه المكتبة
                    </Heading>

                </Stack>
                <Container maxW={'5xl'} mt={12} textAlign={"right"}>
                    <h1>رؤية ورسالة المكتبة </h1>
                    <p>رؤية المكتبة
                        الريادة والابداع والابتكار فى تقديم خدمات ومصادر المعلومات للمستفيدين لتصبح المكتبة مركزا متطورا لنشر المعلومات والمعرفة وتحقيق أهداف الكلية التعليمية والبحثية والمجتمعية</p>
                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default LibararyVision;