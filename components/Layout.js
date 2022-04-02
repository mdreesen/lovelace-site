import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
import Hero from './Hero';

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <ParallaxProvider>
                <Hero heroImage='homePage' width="586" height="875" alt="Homepage image, pregnant woman" />
            </ParallaxProvider>
            <main>{children}</main>
        </>
    )
}