import Head from 'next/head'
import { Box } from '@chakra-ui/react'
const Layout = ({ children }) => (
    <>
        <Head>
            <title>React Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                Navbar
            </header>
            {/* Main children get Layout is h1: Tests */}
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