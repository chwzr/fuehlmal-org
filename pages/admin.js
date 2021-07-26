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
  const [res, setRes] = useState()

  useEffect(async ()=>{
    let x = await axios.get('/api/getall')
    console.log(x.data)
    let a = x.data.sort((a, b) => (b.addedOn || b.auth_date).toString().localeCompare((a.addedOn || a.auth_date)));
    setUsers(a)
  }, [])

  const update = (inputValue) => {
      setSelectedUsers(inputValue)
  };

  const updateMessage = e => {
    // console.log(e.target.value)
    setMessage(e.target.value)
  }

  const sendMessage = async () => {
    alert("send message!")
    // console.log(message)
    let ids = selectedUsers.map(user => user.id)
    // let x = {
    //   ids,
    //   message: unescape(message)
    // }
    console.log({ids: ids, message: message})
    let xx = await axios.post('/api/sendmessage', {ids: ids, message: message});
    setRes(xx.data)
  }

  const sendMessageGroup = async () => {
    alert("send message!")
    let ids = [-1001278683147
      , -1001304399267]
    let x = {
      ids,
      message
    }
    console.log(x)
    let xx = await axios.post('/api/sendmessage', x);
    setRes(xx.data)
  }

  const sendMessageGroupWfk = async () => {
    alert("send message!")
    let ids = [-410187265]
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
        <title>Admin</title>
      </Head>

      <main className={styles.admin}>
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
            getOptionLabel={option => (option.username || option.first_name) + " - " + option.id}
            onChange={update}
          />
        <textarea value={message} onChange={updateMessage} rows={5}/>

        <button onClick={sendMessage}>send to selected users</button>
        <button onClick={sendMessageGroup}>send to groups</button>
        <button onClick={sendMessageGroupWfk}>send to wfk</button>

        </div>
        <br/>
        <br/>
        <br/>
        <div className="table">
          {users.map(user=>(
            <div className="row" key={user.id}>
              <div className="col">
                {user.photo_url && (
                  <img className="ticket-photo" src={user.photo_url} alt="you" />
                )}
              </div>
              <div className="col">
                {user.username}
              </div>
              <div className="col">
                {user.first_name}
              </div>
              <div className="col">
                { format(user.addedOn || user.auth_date, "dd-MM-yyyy 'T' HH:mm")}
              </div>
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


