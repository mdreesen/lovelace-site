import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
import Head from 'next/head';


export default function Layout({ children }) {
    return (
        <>
            <Navigation />

            <main>{children}</main>
        </>
    )
}