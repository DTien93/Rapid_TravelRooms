import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose }) => {
  <Flex flexWrap='wrap' justifyContent='center'  alignItems='center'>
    <Image src={imageUrl} width={500} height={300} alt='banner' />
    <Box p='5'>

    </Box>
  </Flex>
}

export default function Home() {
  return (
    <div>
      <h1>My Hotel App</h1>
      <Banner purpose={'For sale'} />
      <Banner purpose={'For Rent '}/>
    </div>
  )
}
