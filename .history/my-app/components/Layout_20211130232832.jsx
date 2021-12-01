// Package
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

// Components
import Navbar from './Navbar'
import Footer from './'


const Layout = ({ children }) => (
    <>
        <Head>
            <title>React Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
               <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Box>
    </>
)

export default Layout