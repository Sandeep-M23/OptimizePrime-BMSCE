import { Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/UI/Layout';

const Home: NextPage = () => {
    return (
        <Layout title="MHM">
            <Text>Hello World!!</Text>
        </Layout>
    );
};

export default Home;
