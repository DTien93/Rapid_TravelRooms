import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'

import Property from '../components/Property'
import SearchFilters from '../components/SearchFilters'
import noresult from '../images/noresult.svg'

const Search = ({ properties}) => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter()

    return (
        <Box>
            <Flex
                onClick={() => setSearchFilters(!searchFilters)}
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='bold'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
            >
                <Text>Search Travel Rooms</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap='wrap'>
                {}
            </Flex>
        </Box>
    )
}

export default Search
