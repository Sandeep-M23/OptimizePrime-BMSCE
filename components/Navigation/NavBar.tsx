import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import NavLink from './NavLink';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavBar: FunctionComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Flex
                        h={16}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems={'center'}>
                            <Box>Logo</Box>
                            <HStack
                                as={'nav'}
                                spacing={4}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </HStack>
                        </HStack>
                    </Flex>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default NavBar;
