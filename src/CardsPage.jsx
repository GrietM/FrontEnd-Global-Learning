//import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import Form from './components/Forms/Form'
//import {testData} from './data'
import CardsList from './components/CardsList/CardsList';
import {Space} from 'antd'

function CardsPage() {
  const [profiles, setProfiles] = useState([])

  const addNewProfile = (profileData) => {
    setProfiles([...profiles,profileData])
  }
  console.log('profiles :', profiles)

  return (
    <div>
      <div>
      <div>
          <h1>Welcome to GitHub Cards App</h1>
      </div>
        <Form changeList = {addNewProfile} />
        <Space size="middle">
        <div className= "grilla">
        <CardsList data = {profiles} />
        </div>
        </Space>
      </div>
    </div>
  );
}

export default CardsPage;


