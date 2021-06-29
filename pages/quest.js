import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Select from 'react-select';
import {format} from 'date-fns'

export default function Home() {
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  const [message, setMessage] = useState("")
  const [a1, seta1] = useState("")
  const [a2, seta2] = useState("")
  const [res, setRes] = useState()

  useEffect(async ()=>{
    let x = await axios.get('/api/getanswers')
    console.log(x.data)
    // let a = x.data.sort((a, b) => (b.addedOn || b.auth_date).toString().localeCompare((a.addedOn || a.auth_date)));
    setUsers(x.data)
  }, [])

  // const update = (inputValue) => {
  //     setSelectedUsers(inputValue)
  // };

  const updateMessage = e => {
    // console.log(e.target.value)
    setMessage(e.target.value)
  }
  const updateA1 = e => {
    // console.log(e.target.value)
    seta1(e.target.value)
  }
  const updateA2 = e => {
    // console.log(e.target.value)
    seta2(e.target.value)
  }

  const sendMessage = async () => {
    alert("send message!")
    // console.log(message)
    // let ids = selectedUsers.map(user => user.id)
    // let x = {
    //   ids,
    //   message: unescape(message)
    // }
    // console.log({ids: ids, message: message})
    let r = Math.random().toString(36).substring(7);


    let answers = [
        { text: a1, callback_data: a1 },
        { text: a2, callback_data: a2 }
       ]
    let xx = await axios.post('/api/sendquestion', {ids: ["655255940"], question: message, answers: answers});
    setRes(xx.data)
  }

  // const sendMessageGroup = async () => {
  //   alert("send message!")
  //   let ids = [-1001278683147
  //     , -1001304399267]
  //   let x = {
  //     ids,
  //     message
  //   }
  //   console.log(x)
  //   let xx = await axios.post('/api/sendmessage', x);
  //   setRes(xx.data)
  // }



  return (
    <div className={styles.container}>
      <Head>
        <title>Admin</title>
      </Head>

      <main className={styles.admin}>

        <h1 className={styles.title}>Welcome to admin!</h1>
        <div className="admin-scroller">

        <textarea value={message} onChange={updateMessage} rows={5}/>
        <input value={a1} onChange={updateA1} />
        <input value={a2} onChange={updateA2} />

        <button onClick={sendMessage}>send</button>

        </div>

        <div>
          {users.map(a=>(
            <div>
              {a.from.first_name} &nbsp; @{a.from.username} &nbsp; - {a.data}
              <br/>
            </div> 
          ))}
        </div>

        <pre>
          {JSON.stringify(res, 0, 2)}
        </pre>

      </main>


    </div>
  );
}


