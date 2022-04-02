import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image'

export default function Hero(props) {

    return (
        <Parallax speed={5}>
            <Image
                src={`/images/${props.heroImage}.webp`}
                alt={`${props.alt}`}
                width={props.width}
                height={props.height}
            />
        </Parallax>
    );
}