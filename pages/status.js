import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Select from 'react-select';
import { format } from 'date-fns'

export default function Home() {
  const [users, setUsers] = useState([])
  const [answers, setAnswers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  const [message, setMessage] = useState("")
  const [a1, seta1] = useState("")
  const [a2, seta2] = useState("")
  const [c1, setc1] = useState("")
  const [c2, setc2] = useState("")
  const [res, setRes] = useState([])
  const [support, setSupport] = useState({ yes: 0, no: 0 })

  useEffect(async () => {
    let x = await axios.get('/api/getanswers')
    console.log(x.data)
    // let a = x.data.sort((a, b) => (b.addedOn || b.auth_date).toString().localeCompare((a.addedOn || a.auth_date)));
    setAnswers(x.data)
    let c = { yes: 0, no: 0 }
    x.data.forEach(a => {
      if (a.data == "EventJa") {
        c.yes++
      }
      if (a.data == "EventNein") {
        c.no++
      }
    })

    setSupport(c)

  }, [])

  useEffect(async () => {
    let x = await axios.get('/api/getall')
    console.log("users:")
    console.log(x.data)
    // let a = x.data.sort((a, b) => (b.addedOn || b.auth_date).toString().localeCompare((a.addedOn || a.auth_date)));
    setUsers(x.data)
  }, [])

  // const update = (inputValue) => {
  //     setSelectedUsers(inputValue)
  // };


  return (
    <div className={styles.container}>
      <Head>
        <title>Admin</title>
      </Head>

      <main>

        <h3 className={styles.title}>Bot Status</h3>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p>
              Total Registrations: {users.length}
            </p>
          </div>
          <div className={styles.card}>
            <p>fühl  mal wieder teilnahme</p>
            Ja: {support.yes}<br />
            Nein: {support.no} <br />
            Total: {support.yes + support.no}<br />
          </div>

        </div>


      </main>


    </div>
  );
}


