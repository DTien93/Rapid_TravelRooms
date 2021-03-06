import { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const ImageScrollbar = () => (
    <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow}>

    </ScrollMenu>
)

export default ImageScrollbar

