'use client';

import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import styles from './buttons.module.css';

export function SignInButton() {
    const {data: session, status} = useSession();

    if (status === 'loading') {
        return <button className={styles.signin} disabled>Loading...</button>
    }

    if (status === 'authenticated') {
        return (
            <Link href={'/pics'} className={styles.signin}>
                <Image
                    alt="Go to dashboard"
                    src={session.user?.image ?? '/daniel/landing.png'}
                    width={32}
                    height={32}
                />
                Welcome back homie
            </Link>
        )
    }

    return <button className={styles.signin} onClick={() => signIn()}>Get it, straight no cap</button>
}
