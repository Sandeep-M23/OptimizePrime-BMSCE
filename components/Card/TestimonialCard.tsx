import {
    Avatar,
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { ITestimonial } from '../../@types';

type Props = {
    data: ITestimonial;
};

const TestimonialCard: FunctionComponent<Props> = ({ data }: Props) => {
    const { heading, designation, imageUrl, review, name } = data;

    return (
        <Box>
            <Stack
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                p={8}
                rounded={'xl'}
                align={'center'}
                pos={'relative'}
                _after={{
                    content: `""`,
                    w: 0,
                    h: 0,
                    borderLeft: 'solid transparent',
                    borderLeftWidth: 16,
                    borderRight: 'solid transparent',
                    borderRightWidth: 16,
                    borderTop: 'solid',
                    borderTopWidth: 16,
                    borderTopColor: useColorModeValue('white', 'gray.800'),
                    pos: 'absolute',
                    bottom: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <Heading as={'h3'} fontSize={'xl'}>
                    {heading}
                </Heading>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize={'sm'}
                >
                    {review}
                </Text>
            </Stack>
            <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar
                    src={
                        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                    }
                    alt={name}
                    mb={2}
                />
                <Stack spacing={-1} align={'center'}>
                    <Text fontWeight={600}>{name}</Text>
                    <Text
                        fontSize={'sm'}
                        color={useColorModeValue('gray.600', 'gray.400')}
                    >
                        {designation}
                    </Text>
                </Stack>
            </Flex>
        </Box>
    );
};

export default TestimonialCard;
