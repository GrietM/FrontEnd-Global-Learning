import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import CardsPage from './CardsPage'
import {Routes, Route} from 'react-router-dom'
import Books from './Books'
import Header from './components/Header/Header'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path ='/' element ={<CardsPage/>}/>
        <Route path ='/books' element ={<Books/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
