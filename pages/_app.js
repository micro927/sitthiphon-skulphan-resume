import '../styles/globals.css'

import { Roboto_Slab } from '@next/font/google'

const inter = Roboto_Slab({ subsets: ['latin', 'thai'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
