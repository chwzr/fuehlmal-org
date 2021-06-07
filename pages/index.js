import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TelegramLoginButton from 'react-telegram-login';

export default function Home() {
  const handleTelegramResponse = user => {
    console.log(user);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to fühl mal!</h1>
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="fuehl_bot"
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}
