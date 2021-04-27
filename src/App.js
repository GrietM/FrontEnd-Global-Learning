import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import Form from './components/Forms/Form'
import {testData} from './data'
import CardsList from './components/CardsList/CardsList';

function App() {
  const [profiles, setProfiles] = useState([])

  /*const addNewProfile = (profileData) => {

  }*/

  return (
    <div>
      <div>
        <div className= 'header'> GitHub Cards App </div>
        <CardsList data = {testData} />
      </div>
    </div>
  );
}

export default App;
