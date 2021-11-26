import { Link, useColorModeValue } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

const NavLink: FunctionComponent = ({
    children,
}: {
    children: ReactNode | ReactNode[];
}) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
    >
        {children}
    </Link>
);

export default NavLink;
