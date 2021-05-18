import React, { useEffect, useState } from 'react'
import {Table, Space, Button } from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined} from '@ant-design/icons'

const Books = (props) => {
const [books, setBooks] = useState([])

const getAllBooks = async() => {
  const response = await axios.get('http://localhost:8081/api/books') 
  console.log(response)

  setBooks(response.data)
}

/* INTENTANDO HACER EL DELETE... tengo que usarlo con la url/id como haciamos en postman/*
/*
const deleteBookById = async() =>{
  const.response = await axios.delete('http://localhost:8081/api/books/PARAMS!')
}*/


useEffect(()=> {
  getAllBooks()
},[]
)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Read',
      dataIndex: 'read',
      key: 'read',
    } ,
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button /*{onClick= {handleOnClick}}*/ > <DeleteOutlined style={{ color: 'red' }}/> </Button>
          <Button /*{onClick= {handleOnClick}}*/ > <EditOutlined/> </Button>
        </Space>
      ),
    } 
  ];
  
  return(
    <div>
      <h1>Books</h1>
      <Table dataSource={books} columns={columns} rowKey='_id' />
     
    </div>
     
  )
}

export default Books 

