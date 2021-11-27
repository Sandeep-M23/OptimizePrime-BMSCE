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

const Data = [
    {
        title: 'Affects Physical Health',
        description:
            'The mind and the body are connected. Many mental ailments cause stress, which lowers the immune system. This means more frequent sickness and inability to cope.Stress and anxiety can take a toll on our physical health.',
        icon: 'FaRunning',
    },
    {
        title: 'Affects Everything',
        descripition:
            'Our mental health affects how we cope with life. Lack of treatment leads to hopelessness and sadness, worthlessness, feeling guilty, anxiety and worry, fear, and loss of control.Our relationships may suffer.',
        icon: 'AiFillHeart',
    },
    {
        title: 'End Stigma and Shame',
        description:
            'When it comes down to it, those who are mentally ill must need treatment. But without awareness and breaking the stigma surrounding their condition, they won’t feel comfortable reaching out to somebody for help.',
        icon: 'FaPeopleCarry',
    },
];

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
