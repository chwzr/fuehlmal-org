import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import redis from '@/lib/redis';
import Barcode from 'react-barcode'

const Home = ({ ticket }) => {
  const [user, setUser] = useState({ auth: false });


  return (
    <div className={styles.container}>
      <Head>
        <title>fühl mal!</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Your Ticket,  {ticket.first_name}! </h1>
        <br /> <br />

        <div class="ticket-visual_visual__FGIcy ticket-visual_visual-vertical__1dDaT" >
          <div class="ticket-visual_ticket__2wdyX">
            <svg aria-label="Next.js Conf Ticket" viewBox="0 0 304 560" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152 34c12.873 0 24.073-7.155 29.843-17.696 2.047-3.74 4.677-7.359 7.781-10.02C192.718 3.63 196.19 2 200 2h88c7.732 0 14 6.268 14 14v528c0 7.732-6.268 14-14 14h-88c-3.81 0-7.282-1.63-10.376-4.283-3.104-2.662-5.734-6.281-7.781-10.021C176.073 533.155 164.873 526 152 526c-12.873 0-24.073 7.155-29.843 17.696-2.047 3.74-4.677 7.359-7.781 10.021C111.282 556.37 107.81 558 104 558H16c-7.732 0-14-6.268-14-14V16C2 8.268 8.268 2 16 2h88c3.81 0 7.282 1.63 10.376 4.283 3.104 2.662 5.734 6.281 7.781 10.02C127.927 26.846 139.127 34 152 34z" fill="#000" stroke="url(#main-gradient)" strokeWidth={4} />
              <path stroke="#444" strokeDasharray="4 4" d="M4 412.5h295" />
              <g id="logo" transform="matrix(2.31348,0,0,2.31348,68.2048,167.229)">
                <g transform="matrix(1,0,0,1,63.1018,60.3899)">
                  <path d="M0,-5.111L0.367,-5.111C0.419,-5.111 0.469,-5.098 0.514,-5.072L3.856,-3.158L4.181,-2.37C4.181,-2.37 0.369,-0.438 0,-0.266C-0.523,0 -0.898,-0.374 -0.783,-0.892C-0.595,-1.804 0,-5.111 0,-5.111" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,4.4636,16.837)">
                  <path d="M0,-7.837L0.254,-9.944C0.798,-14.334 4.354,-16.837 7.619,-16.837C10.375,-16.837 11.719,-15.856 12.481,-15.097L10.848,-12.482C7.908,-14.733 4.171,-13.534 3.663,-9.362L3.483,-7.837L11.61,-7.837L11.211,-4.646L3.084,-4.646L1.415,9L-2.068,9L-0.399,-4.646L-4.464,-4.646L-4.065,-7.837L0,-7.837Z" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,20.4749,16.9813)">
                  <path d="M0,1.164L1.123,-7.981L4.606,-7.981L3.445,1.454C3.084,4.249 3.846,5.954 6.529,5.954C8.635,5.954 10.665,3.995 11.102,0.437L12.153,-7.981L15.636,-7.981L13.568,8.855L10.085,8.855L10.375,6.533C9.542,7.733 7.908,9.145 5.477,9.145C1.341,9.145 -0.653,6.317 0,1.164" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,56.3674,9.4344)">
                  <path d="M0,7.257L-1.125,16.402L-4.608,16.402L-3.483,7.257C-3.123,4.172 -3.846,2.467 -6.532,2.467C-8.635,2.467 -10.703,4.426 -11.066,7.402L-12.156,16.402L-15.639,16.402L-12.517,-9.145L-9.034,-9.145L-10.342,1.596C-9.687,0.544 -7.911,-0.727 -5.48,-0.727C-1.344,-0.727 0.614,2.104 0,7.257" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,72.4413,3.481)">
                  <path d="M0,45.614C-1.27,47.354 -3.338,48.805 -6.313,48.805C-10.883,48.805 -12.771,45.431 -12.153,40.532L-7.798,0.002L-12.442,0.002L-12.04,-3.191L-3.913,-3.191L-8.78,41.259C-9.069,43.726 -8.091,45.614 -5.876,45.614C-4.39,45.614 -3.518,44.816 -2.866,43.871L0,45.614Z" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,33.4521,44.8811)">
                  <path d="M0,-2.319L-1.197,7.405L-4.679,7.405L-3.518,-2.029C-3.158,-5.114 -3.049,-6.529 -4.863,-6.529C-6.387,-6.529 -7.294,-4.57 -7.654,-1.595L-8.744,7.405L-12.227,7.405L-11.066,-2.029C-10.703,-5.114 -10.594,-6.529 -12.407,-6.529C-13.932,-6.529 -14.839,-4.57 -15.238,-1.302L-16.289,7.405L-19.772,7.405L-17.704,-9.431L-14.221,-9.431L-14.514,-7.254C-13.823,-8.415 -12.771,-9.724 -10.777,-9.724C-9.397,-9.724 -8.091,-8.778 -7.873,-6.964C-6.676,-8.961 -5.261,-9.724 -3.518,-9.724C-0.544,-9.724 0.617,-7.472 0,-2.319" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,49.9722,35.4474)">
                  <path d="M0,16.839L-0.036,14.59C-1.197,15.823 -3.193,17.129 -5.95,17.129C-9.397,17.129 -11.935,14.59 -11.536,11.361C-10.922,6.317 -4.39,4.718 0.508,7.041C0.653,4.828 0,2.904 -2.939,2.904C-4.354,2.904 -6.024,3.342 -7.146,3.995L-8.272,1.453C-7.111,0.656 -4.789,-0.29 -2.393,-0.29C2.142,-0.29 4.753,1.817 3.92,8.64L2.904,16.839L0,16.839ZM-8.053,11.47C-8.198,12.738 -6.931,13.937 -5.223,13.937C-2.756,13.937 -0.29,12.014 0.254,9.91C-2.177,8.566 -7.69,8.456 -8.053,11.47" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,30.7979,5.4006)">
                  <path d="M0,-5.111L0.367,-5.111C0.419,-5.111 0.469,-5.098 0.514,-5.072L3.856,-3.159L4.181,-2.371C4.181,-2.371 0.369,-0.438 0,-0.266C-0.523,0 -0.898,-0.375 -0.783,-0.893C-0.595,-1.804 0,-5.111 0,-5.111" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(1,0,0,1,24.3778,5.4006)">
                  <path d="M0,-5.111L0.367,-5.111C0.419,-5.111 0.469,-5.098 0.514,-5.072L3.856,-3.159L4.181,-2.371C4.181,-2.371 0.369,-0.438 0,-0.266C-0.523,0 -0.898,-0.375 -0.783,-0.893C-0.595,-1.804 0,-5.111 0,-5.111" style={{ fill: 'white', fillRule: 'nonzero' }}>
                  </path></g>
                <g transform="matrix(0.432249,0,0,0.432249,-29.7019,-45.5378)">
                  <text id="date" x="96.67px" y="272.891px" style={{ fontFamily: '"BergenText-Regular", "Bergen"', fontSize: '20px', fill: 'white' }}>XX.-XX.XX.XX</text>
                </g>
              </g>




              <path stroke="#444" d="M4 358.5h295" />
              <defs>
                <linearGradient id="main-gradient" x1={50} y1="39.5" x2="287.5" y2={560} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#88FFEA" />
                  <stop offset=".323" stopColor="#FF4ECD" />
                  <stop offset={1} stopColor="#1A75FF" />
                </linearGradient>
                <linearGradient id="main-silver" gradientUnits="userSpaceOnUse" x1="96.9%" y1="102.75%" x2="3.1%" y2="-2.75%">
                  <stop offset=".245" stopColor="#828282" />
                  <stop offset=".52" stopColor="#FFF" />
                  <stop offset=".726" stopColor="#BCBCBA" />
                  <stop offset=".94" stopColor="#4F4F4F" />
                </linearGradient>
                <linearGradient id="main-gold" gradientUnits="userSpaceOnUse" x1="96.9%" y1="102.75%" x2="3.1%" y2="-2.75%">
                  <stop offset=".259" stopColor="#B1872F" />
                  <stop offset=".447" stopColor="#FC6" />
                  <stop offset=".643" stopColor="#FC6" />
                  <stop offset=".94" stopColor="#B1872F" />
                </linearGradient>
                <linearGradient id="main-paint0_linear" x1="208.52" y1="387.348" x2="208.52" y2="379.969" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity=".15" />
                  <stop offset=".3" stopOpacity=".06" />
                  <stop offset={1} stopOpacity=".03" />
                </linearGradient>
                <linearGradient id="main-paint1_linear" x1="218.705" y1="389.731" x2="213.632" y2="394.896" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity=".15" />
                  <stop offset=".3" stopOpacity=".06" />
                  <stop offset={1} stopOpacity=".03" />
                </linearGradient>
                <linearGradient id="main-paint2_linear" x1="218.631" y1="391.217" x2="219.369" y2="383.93" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity=".15" />
                  <stop offset=".3" stopOpacity=".06" />
                  <stop offset={1} stopOpacity=".03" />
                </linearGradient>
                <clipPath id="main-clip0">
                  <path fill="#fff" transform="translate(204.602 375.892)" d="M0 0h20.62v20.62H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <div className="ticket-visual_profile__15hMt">
              <div className="ticket-profile_profile__2HXPf"><span className="ticket-profile_skeleton__2Z9jI ticket-profile_wrapper__yxCG8 ticket-profile_inline__rhJp7 ticket-profile_rounded__1gS4n"><span aria-hidden="true" className="ticket-profile_image__3gRRr ticket-profile_empty-icon__2czBU">
                {/* <svg width={40} height={40} viewBox="0 0 37 37" fill="none" stroke="#000" strokeWidth="1.311" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.021 30.536a4.772 4.772 0 011.626-1.893c2.407-1.568 7.192-2.473 8.167-2.74a.554.554 0 01.118 0v-1.476c-.922-.83-2.01-2.264-3.06-4.724 0 0-1.035-3.16-.305-3.282 0 0-2.014-7.293 5.768-7.293 7.783 0 5.768 7.293 5.768 7.293.73.123-.306 3.282-.306 3.282-1.053 2.477-2.15 3.91-3.059 4.741v1.438a.46.46 0 01.136 0c.957.288 5.764 1.193 8.15 2.761a4.772 4.772 0 011.625 1.893">
            </path>
            <path d="M18.335 35.67c9.574 0 17.335-7.761 17.335-17.335C35.67 8.761 27.909 1 18.335 1 8.761 1 1 8.761 1 18.335 1 27.909 8.761 35.67 18.335 35.67z">
            </path>
      </svg> */}
                <img className="ticket-photo" src={ticket.photo_url} alt="you" />
              </span>
              </span>
                <div className="ticket-profile_text__39qQ4">
                  <p className="ticket-profile_name__3GMze undefined"><span className="ticket-profile_skeleton__2Z9jI ticket-profile_wrapper__yxCG8 ticket-profile_ellipsis__1qVPt">{ticket.first_name}</span></p>
                  <p className="ticket-profile_username__3y92X"><span className="ticket-profile_skeleton__2Z9jI ticket-profile_wrapper__yxCG8 ticket-profile_ellipsis__1qVPt">{ticket.username}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="ticket-visual_ticket-number-wrapper__3mFTe">
              <div className="ticket-visual_ticket-number__sz5XD">#{JSON.stringify(ticket.id)}</div>
            </div>
            <div className="ticket-visual_ticket-number-wrapper__xxx">
              <div className="ticket-visual_ticket-number__sz5XD">
                <Barcode value={ticket.id} width="2" height="26" displayValue={false} background="#000000" lineColor="#ffffff" />
              </div>
            </div>
          </div>
        </div>

      </main >

      <footer className={styles.footer}>
        <a
          href="https://fuehlmal.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' fuehl mal'}
        </a>
      </footer>
    </div >
  );
}


export async function getServerSideProps({ params }) {
  let ticket = JSON.parse(await redis.hget('logins', params.id));

  return {
    props: {
      ticket,
    },
  }
}

export default Home