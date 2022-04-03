import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
import Hero from './Hero';

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    )
}