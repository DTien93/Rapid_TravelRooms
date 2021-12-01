import Router from 'next/router'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
