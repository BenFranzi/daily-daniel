'use client';

import Image from "next/image";
import styles from './Feature.module.css';
import {useEffect, useMemo, useState} from "react";

const DRIFT = 30;
const WIDTH = 500;
const HEIGHT = 550;

export default function Feature() {
    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <div className={styles.feature}>
            <Image
                src="/landing-transparent.webp"
                width={WIDTH}
                height={HEIGHT}
                alt='Daniel'
            />
        </div>
    )
}
