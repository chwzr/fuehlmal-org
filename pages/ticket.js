import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState({ auth: false });

  useEffect(async () => {
    let res = await axios.get('/api/login', { auth: true });
    setUser(res.data);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Claim your Ticket!</h1>

        <pre>{JSON.stringify(user, 0, 2)}</pre>
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
