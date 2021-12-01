import { Box, Flex, Text } from '@chakra-ui/layout'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import ImageScrollbar from '../../components/ImageScrollbar'

import { baseUrl, fetchApi } from '../../../utils/fetchApi'

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth='1000px' margin='auto' p='4'>
        { photos && <ImageScrollbar data={photos} />}
        <Box w='full' p='6'>
            <Flex paddingTop='2' alignItems='center'>
                <Box paddingRight='3' color='green.400'>
                    { isVerified && <GoVerified/>}
                </Box>
                <Text fontWeight='bold' fontSize='lg'>
                    
                </Text>
            </Flex>
        </Box>

    </Box>
)

export default PropertyDetails

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

    return {
        props: {
            propertyDetails: data
        }
    }
}