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
} from '@chakra-ui/react';
import { NextPage } from 'next';

const Blogs: NextPage = () => {
    return (
        <Container maxW={'7xl'} p="12">
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
                    Blogs
                </Heading>
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
                    justifyContent="center"
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
                    justifyContent="center"
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
                    justifyContent="center"
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
                    justifyContent="center"
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
