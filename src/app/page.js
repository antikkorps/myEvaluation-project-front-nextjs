import styles from './page.module.css';
import { LoginButton } from '../../components/buttons.components';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>This is the home Page</h1>
        <p>
          This is the homepage of an evaluation app built with Next.js and
          Express.
        </p>
        <p>To get started, click on the button below.</p>
        <LoginButton />
      </div>
    </main>
  );
}
