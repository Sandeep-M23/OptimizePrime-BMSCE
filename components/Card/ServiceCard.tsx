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

const data = [
    {
        title: 'Individual Therapy',
        description:
            'Individual therapy is one type of psychotherapy in which a trained professional helps a single person work through personal issues they have been facing. It is an effective treatment for a variety of emotional difficulties and mental illnesses.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/interested-young-woman-listening-carefully-to-psyc-4LTTAE3-scaled.jpg',
    },
    {
        title: 'Couples Therapy',
        description:
            'Couples therapy can address a wide range of relationship issues, including recurring conflicts, feelings of disconnection, an affair or difficulties due to external stressors.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/happy-couple-at-successful-therapy-session-with-fa-W9KXY7U-scaled.jpg',
    },
    {
        title: 'Children Therapy',
        description:
            'Child counseling is a type of therapy that focuses on young children, teens, and adolescents with one or more mental illnesses. It also provides aid to youths, who have experienced trauma, and/or who are experiencing a dysfunctional or stressful home environment.',
        imageUrl:
            'https://matar-elementor.42theme.com/wp-content/uploads/2020/05/sad-boy-with-teddy-bear-JVSTZXX-scaled.jpg',
    },
];

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const ServiceCard: FunctionComponent = () => {
    return (
        <Center py={3}>
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
