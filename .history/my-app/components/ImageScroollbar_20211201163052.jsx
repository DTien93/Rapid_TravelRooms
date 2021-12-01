import { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
    const { scrollPev } = useContext(VisibilityContext)
    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPev}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}
 
const RightArrow = () => {

}

const ImageScrollbar = () => (
    <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow} style={{overflow: 'hidden'}}>

    </ScrollMenu>
)

export default ImageScrollbar

