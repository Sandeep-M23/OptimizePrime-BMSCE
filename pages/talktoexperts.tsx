import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { FaCheckCircle } from 'react-icons/fa';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { IoSearchSharp } from 'react-icons/io5';
import PriceCard from '../components/Card/PriceCard';
import Feature from '../components/UI/Feature';
import Layout from '../components/UI/Layout';
const TalkToExperts: NextPage = () => {
    return (
        <Layout title="MHM | Talk to Experts">
            <Container maxW={'5xl'} py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}
                        >
                            Experts
                        </Text>
                        <Heading>Therapy</Heading>
                        <Text color={'gray.500'} fontSize={'lg'}>
                            There might be a lot of issues coming up in the
                            marriage, due to each person’s character being
                            unique and having its own set of emotional triggers.
                        </Text>

                        <Text color={'gray.500'} fontSize={'lg'}>
                            While couples may be arguing, bickering, and
                            constantly fighting with each other, it all is a
                            telling sign of a bigger problem. This may include
                            them losing their communication connection, feeling
                            alone, or going through an anxiety period.
                        </Text>

                        <Text color={'gray.500'} fontSize={'lg'}>
                            One thing that couples seeking counseling typically
                            have in common is that their relationship is no
                            longer a safe, loving, and enjoyable space.
                        </Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue(
                                        'gray.100',
                                        'gray.700'
                                    )}
                                />
                            }
                        >
                            <Feature
                                icon={
                                    <Icon
                                        as={FcAssistant}
                                        color={'yellow.500'}
                                        w={5}
                                        h={5}
                                    />
                                }
                                iconBg={useColorModeValue(
                                    'yellow.100',
                                    'yellow.900'
                                )}
                                text={'Individual Therapy'}
                            />
                            <Feature
                                icon={
                                    <Icon
                                        as={FcInTransit}
                                        color={'green.500'}
                                        w={5}
                                        h={5}
                                    />
                                }
                                iconBg={useColorModeValue(
                                    'green.100',
                                    'green.900'
                                )}
                                text={'Family Therapy'}
                            />
                            <Feature
                                icon={
                                    <Icon
                                        as={FcDonate}
                                        color={'purple.500'}
                                        w={5}
                                        h={5}
                                    />
                                }
                                iconBg={useColorModeValue(
                                    'purple.100',
                                    'purple.900'
                                )}
                                text={'Coaching'}
                            />
                        </Stack>
                    </Stack>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                </SimpleGrid>
                <Box p={4} mt={10}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <Feature
                            icon={
                                <Icon
                                    as={IoSearchSharp}
                                    color={'purple.500'}
                                    w={5}
                                    h={5}
                                />
                            }
                            iconBg={useColorModeValue(
                                'purple.100',
                                'purple.900'
                            )}
                            text={
                                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                            }
                        />
                        <Feature
                            icon={
                                <Icon
                                    as={IoSearchSharp}
                                    color={'purple.500'}
                                    w={5}
                                    h={5}
                                />
                            }
                            iconBg={useColorModeValue(
                                'purple.100',
                                'purple.900'
                            )}
                            text={
                                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                            }
                        />
                        <Feature
                            icon={
                                <Icon
                                    as={IoSearchSharp}
                                    color={'purple.500'}
                                    w={5}
                                    h={5}
                                />
                            }
                            iconBg={useColorModeValue(
                                'purple.100',
                                'purple.900'
                            )}
                            text={
                                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                            }
                        />
                    </SimpleGrid>
                </Box>
                <Box py={12}>
                    <VStack spacing={2} textAlign="center">
                        <Heading as="h1" fontSize="4xl">
                            Plans that fit your need
                        </Heading>
                        <Text fontSize="lg" color={'gray.500'}>
                            Start with 14-day free trial. No credit card needed.
                            Cancel at anytime.
                        </Text>
                    </VStack>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        textAlign="center"
                        justify="center"
                        spacing={{ base: 4, lg: 10 }}
                        py={10}
                    >
                        <PriceCard>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Individual Therapy
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600">
                                        $
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        79
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /month
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={useColorModeValue('gray.50', 'gray.700')}
                                py={4}
                                borderBottomRadius={'xl'}
                            >
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        unlimited build minutes
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button
                                        w="full"
                                        colorScheme="red"
                                        variant="outline"
                                    >
                                        Start trial
                                    </Button>
                                </Box>
                            </VStack>
                        </PriceCard>

                        <PriceCard>
                            <Box position="relative">
                                <Box
                                    position="absolute"
                                    top="-16px"
                                    left="50%"
                                    style={{ transform: 'translate(-50%)' }}
                                >
                                    <Text
                                        textTransform="uppercase"
                                        bg={useColorModeValue(
                                            'red.300',
                                            'red.700'
                                        )}
                                        px={3}
                                        py={1}
                                        color={useColorModeValue(
                                            'gray.900',
                                            'gray.300'
                                        )}
                                        fontSize="sm"
                                        fontWeight="600"
                                        rounded="xl"
                                    >
                                        Most Popular
                                    </Text>
                                </Box>
                                <Box py={4} px={12}>
                                    <Text fontWeight="500" fontSize="2xl">
                                        Marriage Therapy
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            $
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            149
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /month
                                        </Text>
                                    </HStack>
                                </Box>
                                <VStack
                                    bg={useColorModeValue(
                                        'gray.50',
                                        'gray.700'
                                    )}
                                    py={4}
                                    borderBottomRadius={'xl'}
                                >
                                    <List spacing={3} textAlign="start" px={12}>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="green.500"
                                            />
                                            unlimited build minutes
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="green.500"
                                            />
                                            Lorem, ipsum dolor.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="green.500"
                                            />
                                            5TB Lorem, ipsum dolor.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="green.500"
                                            />
                                            5TB Lorem, ipsum dolor.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={FaCheckCircle}
                                                color="green.500"
                                            />
                                            5TB Lorem, ipsum dolor.
                                        </ListItem>
                                    </List>
                                    <Box w="80%" pt={7}>
                                        <Button w="full" colorScheme="red">
                                            Start trial
                                        </Button>
                                    </Box>
                                </VStack>
                            </Box>
                        </PriceCard>
                        <PriceCard>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Counselling
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="3xl" fontWeight="600">
                                        $
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        349
                                    </Text>
                                    <Text fontSize="3xl" color="gray.500">
                                        /month
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={useColorModeValue('gray.50', 'gray.700')}
                                py={4}
                                borderBottomRadius={'xl'}
                            >
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        unlimited build minutes
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Lorem, ipsum dolor.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        5TB Lorem, ipsum dolor.
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button
                                        w="full"
                                        colorScheme="red"
                                        variant="outline"
                                    >
                                        Start trial
                                    </Button>
                                </Box>
                            </VStack>
                        </PriceCard>
                    </Stack>
                </Box>
            </Container>
        </Layout>
    );
};

export default TalkToExperts;
