import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const data = [
    {
        heading: '',
        review: '',
        name: 'Guy Hawkins',
        designation: 'Designer',
        imageUrl:
            'http://webdesign-finder.com/psycheco-psychology/wp-content/uploads/2021/06/img50.jpg',
    },
    {
        heading: '',
        review: '',
        name: 'Alec Buttons',
        designation: 'Software Engineer',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/close-up-cheerful-older-man-standing-isolated-on-w-Z7MW6Q8.jpg',
    },
    {
        heading: '',
        review: '',
        name: 'Kira Rhoades',
        designation: 'CEO',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/beautiful-young-woman-standing-outdoors-PDP7Q6B-1.jpg',
    },
];

const TestimonialCard: FunctionComponent = () => {
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
                    Efficient Collaborating
                </Heading>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.600', 'gray.400')}
                    fontSize={'sm'}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </Text>
            </Stack>
            <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar
                    src={
                        'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                    }
                    alt={'Jane Cooper'}
                    mb={2}
                />
                <Stack spacing={-1} align={'center'}>
                    <Text fontWeight={600}>Jane Cooper</Text>
                    <Text
                        fontSize={'sm'}
                        color={useColorModeValue('gray.600', 'gray.400')}
                    >
                        CEO at ABC Corporation
                    </Text>
                </Stack>
            </Flex>
        </Box>
    );
};

export default TestimonialCard;
