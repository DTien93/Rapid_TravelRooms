import { Link } from 'next/link'
import { Menu, MenuItem, MenuButton, MenuList, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <Link href='' paddingLeft='2'>Rooms</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<FcMenu />}
                    variant='outlined'
                    color='red.400'
                />
            </Menu>
            <MenuList>
                <Link href='/' passHref>
                    <MenuItem icon={<FcHome/}></MenuItem>
                </Link>
            </MenuList>
        </Box>

    </Flex>
)

export default Navbar