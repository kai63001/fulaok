import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import {wrapper} from '@/redux/store'
import { CookiesProvider } from 'react-cookie';


function MyApp({ Component, pageProps }: AppProps) {
  return <CookiesProvider><Component {...pageProps} /></CookiesProvider>
}

export default  (MyApp);
