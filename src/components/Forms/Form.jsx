import React, {useState} from 'react'
import axios from 'axios'
//import './Form.css'
import {Space} from 'antd'

const Form = (props) => {
  const [userName, setUserName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    props.changeList (response.data)
    console.log('response: ', response)
    console.log('userName: ', userName)
  }

  const handleOnChange = (data) => {
    console.log(data.target.value)
    setUserName(data.target.value)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <Space>
      <input
      type= 'text'
      placeholder= "GitHub username"
      value= {userName}
      onChange= {handleOnChange}
      required
      ></input>
      <button> Add card </button>
      </Space>
    </form>
  )
}

export default Form

