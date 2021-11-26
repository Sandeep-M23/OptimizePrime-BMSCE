import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    SimpleGrid,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import BasicCard from '../components/Card/BasicCard';
import ServiceCard from '../components/Card/ServiceCard';
import TestimonialCard from '../components/Card/TestimonialCard';
import Layout from '../components/UI/Layout';

const Home: NextPage = () => {
    return (
        <Layout title="MHM">
            <Container maxW={'6xl'}>
                {/*Poster*/}
                <Flex
                    w={'full'}
                    h={'75vh'}
                    backgroundImage={
                        'url(https://static.scientificamerican.com/sciam/cache/file/54808BE2-DCC8-4438-860BFF8211C17CE2_source.jpg)'
                    }
                    backgroundSize={'cover'}
                    backgroundPosition={'center center'}
                >
                    <VStack
                        w={'full'}
                        justify={'center'}
                        px={useBreakpointValue({ base: 4, md: 8 })}
                        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
                    >
                        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                            <Text
                                color={'white'}
                                fontWeight={700}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({
                                    base: '2xl',
                                    md: '4xl',
                                })}
                            >
                                Covid 19 has intensified and exaggerated fault
                                lines in contemporary socities revealing back to
                                us our ways of dealing with Mental Health
                            </Text>
                        </Stack>
                    </VStack>
                </Flex>
                {/*Welcome*/}
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 6 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    >
                        Welcome!
                    </Heading>
                    <Text color={'gray.500'}>
                        The COVID-19 pandemic has likely impacted mental health
                        in many different ways. The pandemic has created an
                        environment where many determinants of mental health are
                        impacted.
                    </Text>
                    <Text color={'gray.500'}>
                        During the COVID-19 pandemic, concerns about mental
                        health and substance use have grown, including concerns
                        about suicidal ideation. In January 2021, 41% of adults
                        reported symptoms of anxiety and/or depressive disorder,
                        a share that has been largely stable since spring 2020.
                        In a survey from June 2020, 13% of adults reported new
                        or increased substance use due to coronavirus-related
                        stress, and 11% of adults reported thoughts of suicide
                        in the past 30 days. Suicide rates have long been on the
                        rise and may worsen due to the pandemic.
                    </Text>
                </Stack>
                {/*Importance*/}
                <Box
                    maxW="6xl"
                    mx={'auto'}
                    textAlign={'center'}
                    pt={5}
                    px={{ base: 2, sm: 12, md: 17 }}
                >
                    <Heading
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={10}
                        fontWeight={'bold'}
                    >
                        Why is Mental Health So Important ?
                    </Heading>
                    <Text color={'gray.500'}>
                        Mental health matters. Taking care of our mental health
                        aids in our resilience and recovery from anything that
                        happens. Anyone can have a bad day, but it doesn’t mean
                        that it’s a bad life. How we respond to it and take care
                        of our mental health are what’s important.
                    </Text>
                    <SimpleGrid
                        my={6}
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: 5, lg: 8 }}
                    >
                        <BasicCard />
                        <BasicCard />
                        <BasicCard />
                    </SimpleGrid>
                </Box>
                {/*Service*/}
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        What we can Offer
                    </Heading>
                    <Text color={'gray.500'}>
                        Maecenas nec mi in est maximus fermentum. Suspendisse
                        tempus, nibh id convallis porttitor, ipsum.
                    </Text>
                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: 5, lg: 8 }}
                    >
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </SimpleGrid>
                </Stack>
                {/*Schedule*/}
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'red.400',
                                    zIndex: -1,
                                }}
                            >
                                Zoom Meeting
                            </Text>
                        </Heading>
                        <Text color={'gray.500'}>
                            Connect instantly with a 24x7 specialist or choose
                            to video visit a particular doctor. Start an instant
                            consultation within 2 minutes or do video
                            consultation at the scheduled time. Be assured that
                            your online consultation will be fully private and
                            secured.
                        </Text>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'red'}
                            bg={'red.400'}
                            _hover={{ bg: 'red.500' }}
                        >
                            Schedule a session
                        </Button>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}
                    >
                        <Box
                            position={'relative'}
                            height={'300px'}
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Zoom Meeting'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    'https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F577980%2Fgettyimages-1214753465.jpg&w=700&op=resize'
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
                {/*Testimonial */}
                <Stack spacing={6} align={'center'} py={{ base: 20 }}>
                    <Heading>What Our Clients Say</Heading>
                    <Text>
                        We have been working with clients around the world and
                        Here are the few things they say about us.
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: 10, md: 4, lg: 10 }}
                        my={10}
                    >
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </Stack>
                </Stack>
            </Container>
        </Layout>
    );
};

export default Home;
