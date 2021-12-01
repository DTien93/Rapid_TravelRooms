import { Link } from 'next/link'
import { Menu, MenuItem, MenuBottom, MenuButton, MenuList, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
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
                <Me
                    as={IconButton}
                    icon={<FcMenu />}
                    variant='outlined'
                    color='red.400'
                    />
            </Menu>
        </Box>

    </Flex>
)

export default Navbar