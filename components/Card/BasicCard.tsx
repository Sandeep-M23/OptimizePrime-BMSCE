import {
    Heading,
    Icon,
    Text,
    Box,
    Center,
    useColorModeValue,
} from '@chakra-ui/react';
import { BsFacebook } from 'react-icons/bs';
import { FunctionComponent } from 'react';

const BasicCard: FunctionComponent = () => {
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <Icon
                    as={BsFacebook}
                    boxSize={12}
                    m={{ base: 2 }}
                    color="red.500"
                />
                <Heading fontSize={'2xl'}>Affects Physical Health</Heading>
                <Text color={'gray.500'} my={4}>
                    Ornare aenean euismod elementum nisi quis eleifend quam
                    adipiscing. Gravida dictum fusce ut placerat
                </Text>
            </Box>
        </Center>
    );
};

export default BasicCard;
