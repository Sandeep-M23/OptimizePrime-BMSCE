import React from 'react';
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    Image,
    Icon,
} from '@chakra-ui/react';
import { FcAssistant } from 'react-icons/fc';
import { NextPage } from 'next';

const About: NextPage = () => {
    return (
        <Container maxW={'6xl'} p="12">
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
                    About Us
                </Heading>
                <Text>
                    Our mission to make quality healthcare affordable and
                    accessible for over a billion+ Indians. We believe in
                    empowering our users with the most accurate, comprehensive,
                    and curated information and care, enabling them to make
                    better healthcare decisions
                </Text>
            </Stack>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                py={{ base: 20, md: 28 }}
            >
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        Our Story
                    </Text>
                    <Heading>Who we are and what we do</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Donec et odio pellentesque diam volutpat. Quis vel eros
                        donec ac odio. Adipiscing elit duis tristique
                        sollicitudin nibh sit. Molestie ac feugiat sed lectus
                        vestibulum mattis ullamcorper velit sed. Arcu vitae
                        elementum curabitur vitae nunc sed velit dignissim.
                        Volutpat diam ut venenatis tellus in.
                    </Text>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Donec et odio pellentesque diam volutpat. Quis vel eros
                        donec ac odio. Adipiscing elit duis tristique
                        sollicitudin nibh sit. Molestie ac feugiat sed lectus
                        vestibulum mattis ullamcorper velit sed.
                    </Text>
                </Stack>
            </SimpleGrid>
            <Box p={4} spacing={8}>
                <Heading textAlign={'center'} mb={4}>
                    Credentials
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                    <Stack alignItems={'center'} my={4}>
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'gray.100'}
                            mb={1}
                        >
                            <Icon as={FcAssistant} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={600}>Higher degrees</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                    <Stack alignItems={'center'} my={4}>
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'gray.100'}
                            mb={1}
                        >
                            <Icon as={FcAssistant} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={600}>Methodology</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                    <Stack alignItems={'center'} my={4}>
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'gray.100'}
                            mb={1}
                        >
                            <Icon as={FcAssistant} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={600}>Professionals</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                    <Stack alignItems={'center'} my={4}>
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'gray.100'}
                            mb={1}
                        >
                            <Icon as={FcAssistant} w={10} h={10} />
                        </Flex>
                        <Text fontWeight={600}>Therapy</Text>
                        <Text color={'gray.600'} textAlign={'center'}>
                            Maecenas nec mi in est maximus fermentum.
                            Suspendisse tempus.
                        </Text>
                    </Stack>
                </SimpleGrid>
            </Box>
        </Container>
    );
};

export default About;