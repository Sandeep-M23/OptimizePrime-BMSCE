import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    useColorModeValue,
    Container,
    Stack,
    Button,
} from '@chakra-ui/react';
import { NextPage } from 'next';

const data = [
    {
        title: '“Look after your mental health, Australia” – World Mental Health Day',
        description:
            'World Mental Health Day is on 10 October. The campaign this year has a simple message: Look after your mental health, Australia.',
        imageUrl:
            'https://ontheline.org.au/wp-content/uploads/2021/10/WMHD2-680-x-480.jpg',
        link: 'https://ontheline.org.au/mental-health-blog/world-mental-health-day-2021/',
    },
    {
        title: 'How I manage my Mental Health during Covid',
        description:
            'The last year has been like no other, and as we observe the anniversary of the first lockdown we need to take a minute and try to understand how Covid has impacted our mental health.Like many others our work has moved online, with most staff working from home, this has seen a blurring of the line between work and home life with some of us juggling work, home schooling, and childcare responsibility.',
        imageUrl:
            'https://everyonehealth.co.uk/wp-content/uploads/2021/03/mental-health.jpg',
        link: 'https://everyonehealth.co.uk/blog-how-i-manage-my-mental-health-during-covid/',
    },
    {
        title: 'The Effects a Pandemic Can Have on Your Mental Health',
        description:
            '7 suggestions to help improve your mental health during the COVID-19 pandemic. Limit the news: Sure, you need to know whats going on in the world, but spending',
        imageUrl:
            'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2197109.jpeg',
        link: 'https://www.mindsetsd.com/blog/the-affects-a-pandemic-can-have-on-your-mental-health',
    },
    {
        title: 'The Importance Of Mental Health',
        description:
            'Mental health is important. It impacts how we feel, think, and behave each day. Our mental health also contributes to our decision making, problem solving, how we deal with stress, and how we can relate to others in our lives. we have to always care about our own mental health.',
        imageUrl:
            'https://www.voicesofyouth.org/sites/voy/files/images/2020-06/gettyimages-1044233906.jpg',
        link: 'https://www.voicesofyouth.org/blog/importance-mental-health',
    },
];

const Blogs: NextPage = () => {
    return (
        <Container maxW={'7xl'} p="12">
            <Stack
                as={Box}
                spacing={{ base: 5 }}
                py={{ base: 20, md: 24 }}
                bg={'red'}
            >
                <Heading
                    mb={3}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}
                >
                    Blogs
                </Heading>
                <Text>
                    Across the world, people use blogs as a platform to share
                    experiences, increase awareness and understanding, and
                    provide comfort and support. And that’s a very good
                    thing.Here Are a few Blogs, We thought we’d pop a list
                    together of the blogs we frequently read, admire and
                    appreciate. We hope you enjoy them as we do.
                </Text>
            </Stack>
            {/*Blog 1*/}
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                >
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%"
                    >
                        <Image
                            borderRadius="lg"
                            src={
                                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: 'none' }}
                        >
                            Blog article title
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </Text>
                    <Button>Read More</Button>
                </Box>
            </Box>
            {/*Blog 2*/}
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: 'none' }}
                        >
                            Blog article title
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </Text>
                    <Button>Read More</Button>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                >
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%"
                    >
                        <Image
                            borderRadius="lg"
                            src={
                                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
            </Box>
            {/*Blog 3*/}
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                >
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%"
                    >
                        <Image
                            borderRadius="lg"
                            src={
                                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: 'none' }}
                        >
                            Blog article title
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </Text>
                    <Button>Read More</Button>
                </Box>
            </Box>
            {/*Blog 4*/}
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    marginTop={{ base: '3', sm: '0' }}
                >
                    <Heading marginTop="1">
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: 'none' }}
                        >
                            Blog article title
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg"
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </Text>
                    <Button>Read More</Button>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                >
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%"
                    >
                        <Image
                            borderRadius="lg"
                            src={
                                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Blogs;
