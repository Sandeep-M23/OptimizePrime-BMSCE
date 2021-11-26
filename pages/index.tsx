import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
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
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        Welcome!
                    </Heading>
                    <Text color={'gray.500'}>
                        Founded in 1999 by a group of fellow counseling
                        therapists and psychiatrists, this center aims to help
                        all people who ask for help. With that in mind, we are
                        extremely proud of both our pricing’s affordability and
                        our schedule’ flexibility when it comes to booking
                        counseling sessions.
                    </Text>
                </Stack>
                {/*Importance*/}
                <Box
                    maxW="6xl"
                    mx={'auto'}
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
                    <SimpleGrid
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
                            Snippy is a rich coding snippets app that lets you
                            create your own code snippets, categorize them, and
                            even sync them in the cloud so you can use them
                            anywhere. All that is free!
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
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
                {/*Testimonial */}
                <Stack spacing={5} align={'center'} py={{ base: 20 }}>
                    <Heading>Our Clients Speak</Heading>
                    <Text>
                        We have been working with clients around the world
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={{ base: 10, md: 4, lg: 10 }}
                        my={8}
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
