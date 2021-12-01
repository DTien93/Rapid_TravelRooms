import { useState, useEffect } from 'react'
import { Flex, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { filterData, getFilterValues } from '../../utils/filterData'

const SearchFilter = () => {
    const [filters, setFilters] = useState({})


    return (
        <Flex bg='gray.100' p='4' justifyContent='center'>

        </Flex>
    )
}

export default SearchFilter