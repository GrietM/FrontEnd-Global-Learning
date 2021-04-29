import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import Form from './components/Forms/Form'
import {testData} from './data'
import CardsList from './components/CardsList/CardsList';

function CardsPage() {
  const [profiles, setProfiles] = useState([])

  const addNewProfile = (profileData) => {
    setProfiles([...profiles,profileData])
  }
  console.log('profiles :', profiles)


  return (
    <div>
      <div>
        <div className= 'header'> GitHub Cards App </div>
        <Form changeList = {addNewProfile} />
        <CardsList data = {profiles} />
        </div>
    </div>
  );
}

export default CardsPage;


