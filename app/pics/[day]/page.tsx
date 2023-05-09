import Image from 'next/image';
import styles from './page.module.css';

type Props = {
    params: { day: string }
}

export default function DayPage({params: { day } }: Props) {
    return (
        <main className={styles.main}>
            <Image
                className={styles.pic}
                width={500}
                height={550}
                src={`/daniel/landing.png`}
                alt={'latest'}
            />
        </main>
    );
}
