import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import TelegramLoginButton from 'react-telegram-login';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState({ auth: false });
  const router = useRouter();

  const handleTelegramResponse = async tuser => {
    console.log(tuser);
    setUser(tuser);
    if (tuser.id) {
      await axios.post('/api/login', { login: true, tuser });
      router.push('/ticket/' + tuser.id);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>fühl mal!</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>fühl mal!</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            {/* <h3>Hello</h3> */}
            <p>Please sign in with telegram to claim your free ticket and get updates via our Telegram bot!</p>
          </div>
        </div>
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="fuehl_bot"
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://fuehlmal.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' fuehl mal'}
        </a>
      </footer>
    </div>
  );
}
