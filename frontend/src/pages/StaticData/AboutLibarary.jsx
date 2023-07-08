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


const AboutLibarary = () => {
    return (
        <>
            <WithSubnavigation />
            <CaptionCarousel />
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: 'xl', sm: '3xl' }} fontWeight={'bold'}>
                        نبذه عن المكتبة
                    </Heading>

                </Stack>
                <Container maxW={'5xl'} mt={12} textAlign={"right"}>
                    <h1>نبذة عن المكتبة </h1>
                    <p>أنشئت مكتبة كلية الحاسبات و المعلومات عام 2002 كوحدة من الوحدات الهامة بكلية الحاسبات و المعلومات لتخدم السادة أعضاء هيئة التدريس والهيئة المعاونة وطلاب البكالوريوس وطلاب الدراسات العليا والعاملين بالكلية والكليات الموازية للتخصص العام بالحاسبات وتكنولوجيا المعلومات والذكاء الاصطناعي  وذلك لما تقتنيه من مصادر معلومات متعددة من كتب و مراجع و دوائر معارف بالإضافة الى الرسائل الجامعية و كذلك دورية علمية متخصصة فى مجال الحاسب الالى لذا فهى تلبى احتياجاتهم البحثية نظرا لتنوع مصادرها</p>
                    <h1>محتويات المكتبة</h1>
                    <p>بلغت مقتنيات المكتية حتى نهاية العام الدراسي 2022/2023 الى 3104 كتاب و مرجع ، 189 رسالة جامعية ، 1 دورية علمية تغطى موضوعاتها مختلف الموضوعات الخاصة بالحاسب الآلي و علومه المختلفة</p>
                    <h1>القيم التى تسعى المكتبة لنشرها </h1>
                    <p>1- الأمانة : العمل على حماية الملكية الفكرية
                        2- المعرفة : بالاسهام للوصول إلى مجتمع المعرفة
                        3- الجودة : بتطبيق معايير الجودة في أداء المكتبة والخدمات فيها
                        4- الإبداع : من خلال تبنى أفكار وتقنيات حديثة
                        5- التعاون : التواصل مع المكتبات ومراكز المعلومات الآخرى
                        6- التواصل : من خلال التواصل بين المستفيدين داخل المكتبة ببعضهم البعض وبالمجتمع الخارجى
                        7- البناء : يتم من خلال بناء ثقافة بناء شخصية علمية متمكنة للمستفيدين</p>
                </Container>
            </Box>
            <LargeWithNewsletter />
        </>
    );
}

export default AboutLibarary;
