import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
import Head from 'next/head';


export default function Layout({ children }) {
    return (
        <>
              <Head>
        <title>Wild Beginnings</title>
        <meta name="Wild Beginnings" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <Navigation />
            
            <main>{children}</main>
        </>
    )
}