import '../styles/globals.css'
import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ weight: '500', subsets: ['latin', 'thai'] })

function MyApp({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
