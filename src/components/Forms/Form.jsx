import React, {useState} from 'react'
import axios from 'axios'
import './Form.css'

const Form = (props) => {
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (typeof (event)) == 'string'{
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    props.changeList (response.data)
    console.log('response: ', response)
    console.log('userName: ', userName)}
    else{
      if (typeof (event)) == 'number'{
        const response = await axios.get(`https://api.github.com/users/${userId}`);
    props.changeList (response.data)
    console.log('response: ', response)
    console.log('userId: ', userId)}
      }
    }
  }

  const handleOnChange = (data) => {
    console.log(data.target.value)
    setUserName(data.target.value)
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input
      type= 'text'
      placeholder= "GitHub username"
      value= {userName}
      onChange= {handleOnChange}
      required
      ></input>
      <button> Add card </button>
    </form>
  )
}

export default Form

