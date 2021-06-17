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
        <h1 className={styles.title}>
          <svg width="60%" height="100%" viewBox="0 0 1280 1280" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
            <g transform="matrix(1,0,0,1,-12.3242,-115.193)">
              <g transform="matrix(16.4434,0,0,16.4434,1094.34,1253.16)">
                <path d="M0,-5.111L0.367,-5.111C0.419,-5.111 0.469,-5.098 0.514,-5.072L3.856,-3.158L4.181,-2.37C4.181,-2.37 0.369,-0.438 0,-0.266C-0.523,0 -0.898,-0.374 -0.783,-0.892C-0.595,-1.804 0,-5.111 0,-5.111" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,130.134,537.007)">
                <path d="M0,-7.837L0.254,-9.944C0.798,-14.334 4.354,-16.837 7.619,-16.837C10.375,-16.837 11.719,-15.856 12.481,-15.097L10.848,-12.482C7.908,-14.733 4.171,-13.534 3.663,-9.362L3.483,-7.837L11.61,-7.837L11.211,-4.646L3.084,-4.646L1.415,9L-2.068,9L-0.399,-4.646L-4.464,-4.646L-4.065,-7.837L0,-7.837Z" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,393.414,539.379)">
                <path d="M0,1.164L1.123,-7.981L4.606,-7.981L3.445,1.454C3.084,4.249 3.846,5.954 6.529,5.954C8.635,5.954 10.665,3.995 11.102,0.437L12.153,-7.981L15.636,-7.981L13.568,8.855L10.085,8.855L10.375,6.533C9.542,7.733 7.908,9.145 5.477,9.145C1.341,9.145 -0.653,6.317 0,1.164" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,983.608,415.283)">
                <path d="M0,7.257L-1.125,16.402L-4.608,16.402L-3.483,7.257C-3.123,4.172 -3.846,2.467 -6.532,2.467C-8.635,2.467 -10.703,4.426 -11.066,7.402L-12.156,16.402L-15.639,16.402L-12.517,-9.145L-9.034,-9.145L-10.342,1.596C-9.687,0.544 -7.911,-0.727 -5.48,-0.727C-1.344,-0.727 0.614,2.104 0,7.257" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,1247.92,317.389)">
                <path d="M0,45.614C-1.27,47.354 -3.338,48.805 -6.313,48.805C-10.883,48.805 -12.771,45.431 -12.153,40.532L-7.798,0.002L-12.442,0.002L-12.04,-3.191L-3.913,-3.191L-8.78,41.259C-9.069,43.726 -8.091,45.614 -5.876,45.614C-4.39,45.614 -3.518,44.816 -2.866,43.871L0,45.614Z" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,606.803,998.146)">
                <path d="M0,-2.319L-1.197,7.405L-4.679,7.405L-3.518,-2.029C-3.158,-5.114 -3.049,-6.529 -4.863,-6.529C-6.387,-6.529 -7.294,-4.57 -7.654,-1.595L-8.744,7.405L-12.227,7.405L-11.066,-2.029C-10.703,-5.114 -10.594,-6.529 -12.407,-6.529C-13.932,-6.529 -14.839,-4.57 -15.238,-1.302L-16.289,7.405L-19.772,7.405L-17.704,-9.431L-14.221,-9.431L-14.514,-7.254C-13.823,-8.415 -12.771,-9.724 -10.777,-9.724C-9.397,-9.724 -8.091,-8.778 -7.873,-6.964C-6.676,-8.961 -5.261,-9.724 -3.518,-9.724C-0.544,-9.724 0.617,-7.472 0,-2.319" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,878.449,843.024)">
                <path d="M0,16.839L-0.036,14.59C-1.197,15.823 -3.193,17.129 -5.95,17.129C-9.397,17.129 -11.935,14.59 -11.536,11.361C-10.922,6.317 -4.39,4.718 0.508,7.041C0.653,4.828 0,2.904 -2.939,2.904C-4.354,2.904 -6.024,3.342 -7.146,3.995L-8.272,1.453C-7.111,0.656 -4.789,-0.29 -2.393,-0.29C2.142,-0.29 4.753,1.817 3.92,8.64L2.904,16.839L0,16.839ZM-8.053,11.47C-8.198,12.738 -6.931,13.937 -5.223,13.937C-2.756,13.937 -0.29,12.014 0.254,9.91C-2.177,8.566 -7.69,8.456 -8.053,11.47" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,563.159,348.954)">
                <path d="M0,-5.111L0.367,-5.111C0.419,-5.111 0.469,-5.098 0.514,-5.072L3.856,-3.159L4.181,-2.371C4.181,-2.371 0.369,-0.438 0,-0.266C-0.523,0 -0.898,-0.375 -0.783,-0.893C-0.595,-1.804 0,-5.111 0,-5.111" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
              <g transform="matrix(16.4434,0,0,16.4434,457.591,348.954)">
                <path d="M0,-5.111L0.367,-5.111C0.419,-5.111 0.469,-5.098 0.514,-5.072L3.856,-3.159L4.181,-2.371C4.181,-2.371 0.369,-0.438 0,-0.266C-0.523,0 -0.898,-0.375 -0.783,-0.893C-0.595,-1.804 0,-5.111 0,-5.111" style={{ fill: 'white', fillRule: 'nonzero' }} />
              </g>
            </g>
          </svg>

        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p>Bitte melde dich mit Telegram an um Updates über unseren Telegram Bot zu bekommen!</p>
          </div>
          <div className={styles.card}>
            <p>Please sign in to get updates via our Telegram bot!</p>
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
