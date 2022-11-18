
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'


export default function MainLayout({ children }) {
    return (
        <>
            <Head>

            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}