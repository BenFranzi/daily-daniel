import styles from './page.module.css';
import Image from 'next/image';
import Feature from "@/app/Feature";
import {signin} from "next-auth/core/routes";
import {SignInButton} from "@/components/buttons";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.fold}>
          <div className={styles.heading}>
              <h2>This is</h2>
              <h1>The Daily Daniel</h1>
              <p>“May I offer a friendly face in this trying time”</p>
              <div className={styles.cta}>
                  <SignInButton />
              </div>
          </div>
          <Feature />
      </div>
    </main>
  );
}
