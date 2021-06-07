import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Select from 'react-select';

export default function Home() {
  const [users, setUsers] = useState()
  const [selectedUsers, setSelectedUsers] = useState()
  const [message, setMessage] = useState()
  const [res, setRes] = useState()

  useEffect(async ()=>{
    let x = await axios.get('/api/getall')
    console.log(x.data)
    setUsers(x.data)
  }, [])

  const update = (inputValue) => {
      setSelectedUsers(inputValue)
  };

  const updateMessage = e => {
    setMessage(e.target.value)
  }

  const sendMessage = async () => {
    alert("send message!")
    let ids = selectedUsers.map(user => user.id)
    let x = {
      ids,
      message
    }
    console.log(x)
    let xx = await axios.post('/api/sendmessage', x);
    setRes(xx.data)
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to admin!</h1>
        <div className="admin-scroller">
        <Select
            name="users"
            isMulti
            name="colors"
            options={users}
            className="basic-multi-select"
            classNamePrefix="select"
            getOptionValue={option => option['id']}
            getOptionLabel={option => option['username']}
            onChange={update}
          />
        <textarea value={message} onChange={updateMessage} rows={5}/>

        <button onClick={sendMessage}>send</button>
        </div>

        <pre>
          {JSON.stringify(res, 0, 2)}
        </pre>
      </main>


    </div>
  );
}


