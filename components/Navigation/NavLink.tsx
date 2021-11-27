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
            bg: useColorModeValue('purple.700', 'white'),
            color: useColorModeValue('white', 'purple.700'),
        }}
        href={children.toString().toLowerCase()}
    >
        {children}
    </Link>
);

export default NavLink;
