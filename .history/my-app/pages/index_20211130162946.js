import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName }) => {
  <Flex flexWrap='wrap' justifyContent='center'  alignItems='center'>
        <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' fontWeight='medium' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br/>{desc2}</Text>
      <Button fontSize='xl' bg='blue.300' color='white'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
}

export default function Home() {
  return (
    <div>
      <h1>My Hotel App</h1>
      <Banner
        purpose='Traveloka '
        title1='Welcome to Traveloka App'
        title2='This is my app using Rapid Api, Nextjs, CharkUI'
        desc1='Explore Apartments, Villas, Hotel, HomeStay, Resort, booking travel and booking hotel and home stay'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://cdn.vietnambiz.vn/171464876016439296/2020/7/28/featured-traveloka-15959316397781358626877.jpg'
        />
      <Banner
        purpose='BUY AND BOOKING TRAVEL AND BOOKING ROOM '
        title1='Open, Find and Booking and Travel'
        title2='Dream Travel, Dream Room'
        desc1='Explore Apartments, Villas, Hotel, HomeStay, Resort'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl= 'https://cdn.vietnambiz.vn/171464876016439296/2020/7/28/featured-traveloka-15959316397781358626877.jpg'
      />
    </div>
  )
}
