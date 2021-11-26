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
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Services
                        </Text>
                        <Link href={'#'}>Depression therapy</Link>
                        <Link href={'#'}>Individual therapy</Link>
                        <Link href={'#'}>Couples therapy</Link>
                        <Link href={'#'}>Children therapy</Link>
                        <Link href={'#'}>Anti-Stress therapy</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Contact Us
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={MdPhone} />
                            <a href="#" target="_blank" rel="noreferrer">
                                1-800-123-4567
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={MdEmail} />
                            <a href="#" target="_blank" rel="noreferrer">
                                psycheco@support.com
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
                            <a href="#" target="_blank" rel="noreferrer">
                                FaceBook
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon
                                boxSize={5}
                                m={{ base: 2 }}
                                as={BsInstagram}
                            />
                            <a href="#" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={BsTwitter} />
                            <a href="m" target="_blank" rel="noreferrer">
                                Twitter
                            </a>
                        </Text>
                        <Text fontSize="md" display="flex" alignItems="center">
                            <Icon boxSize={5} m={{ base: 2 }} as={BsYoutube} />
                            <a href="#" target="_blank" rel="noreferrer">
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
