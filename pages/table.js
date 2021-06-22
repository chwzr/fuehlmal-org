import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component'
import axios from 'axios';
import {format} from 'date-fns'


export default function Table() {

  const [users, setUsers] = useState([])
  useEffect(async ()=>{
    let x = await axios.get('/api/getall')
    // console.log(x.data)
    let a = x.data.sort((a, b) => (b.addedOn || b.auth_date).toString().localeCompare((a.addedOn || a.auth_date)));
    setUsers(a)
  }, [])

  const columns = React.useMemo(() => [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Username',
      selector: 'username',
      sortable: true,
    },
    {
      name: 'First Name',
      selector: 'first_name',
      sortable: true,
    },
    {
      name: "BotChat",
      selector: row => row.fromBotChat ? "X" : "",
      sortable:true
    },
    {
      name: "Added On",
      selector: row => format(row.addedOn || row.auth_date, "dd-MM-yyyy 'T' HH:mm"),
      sortable:true
    }
  ], []);

  return (
    <div className="table">
      Total Registrations: {users.length}
      <DataTable
      title="User List"
      columns={columns}
      data={users}
      theme="dark"
      highlightOnHover
      dense
    />

    </div>
  )
}

