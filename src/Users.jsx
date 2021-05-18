import React, { useEffect, useState } from 'react'
import {Table} from 'antd'
import axios from 'axios'

const Users = () => {
const [users, setUsers] = useState([])

const getAllUsers = async() => {
  const response = await axios.get ('http://localhost:8081/api/user')
  console.log(response)

  setUsers(response.data)
}

useEffect(()=> {
  getAllUsers()
},[]
)

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName',
  }
];


  return(
    <div>
    <h1>Users</h1>
    <Table dataSource={users} columns={columns} rowKey='_id'/>
  </div>
  )
}

export default Users