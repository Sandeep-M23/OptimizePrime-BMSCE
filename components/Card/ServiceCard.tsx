import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const ServiceCard: FunctionComponent = () => {
    return (
        <Center py={12}>
            <Box
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
            >
                <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}
                />
                <Stack my={6}>
                    <Heading fontSize={'2xl'}>Affects Physical Health</Heading>
                    <Text color={'gray.500'} my={4}>
                        Ornare aenean euismod elementum nisi quis eleifend quam
                        adipiscing. Gravida dictum fusce ut placerat
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
};

export default ServiceCard;
