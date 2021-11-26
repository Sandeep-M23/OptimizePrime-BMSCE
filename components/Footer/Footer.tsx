import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <Box py={10}>
                    <Flex
                        align={'center'}
                        _before={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: useColorModeValue(
                                'gray.200',
                                'gray.700'
                            ),
                            flexGrow: 1,
                            mr: 8,
                        }}
                        _after={{
                            content: '""',
                            borderBottom: '1px solid',
                            borderColor: useColorModeValue(
                                'gray.200',
                                'gray.700'
                            ),
                            flexGrow: 1,
                            ml: 8,
                        }}
                    >
                        {/*LOGO*/}
                    </Flex>
                </Box>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Services
                        </Text>
                        <Text>Depression therapy</Text>
                        <Text>Individual therapy</Text>
                        <Text>Couples therapy</Text>
                        <Text>Children therapy</Text>
                        <Text>Anti-Stress therapy</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Contact Us
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={MdPhone} />
                            <a
                                href="tel:+918088611802"
                                target="_blank"
                                rel="noreferrer"
                            >
                                +91 80 8861 1802
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={MdEmail} />
                            <a
                                href="mailto:HmH@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                HmH@gmail.com
                            </a>
                        </Text>
                        <Text
                            fontSize="md"
                            display="flex"
                            alignItems="flex-start"
                        >
                            <Icon
                                boxSize={5}
                                m={{ base: 1 }}
                                as={MdLocationOn}
                            />
                            2231 Sycamore Lake Road Green Bay, WI 54304
                        </Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Follow Us
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={BsFacebook} />
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FaceBook
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon
                                boxSize={5}
                                m={{ base: 2 }}
                                as={BsInstagram}
                            />
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={BsTwitter} />
                            <a
                                href="https://twitter.com/?lang=en"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={BsYoutube} />
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Youtube
                            </a>
                        </Text>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Footer;
