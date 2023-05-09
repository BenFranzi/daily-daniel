import styles from './NavMenu.module.css';
import Link from "next/link";

export default function NavMenu() {
    return (
        <nav className={styles.navmenu}>
            <Link href="/">DD.</Link>
        </nav>
    );
}
