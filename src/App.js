//import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import CardsPage from './CardsPage'
import {Routes, Route} from 'react-router-dom'
import Books from './Books'
import Users from './Users'
import {Header} from './components/Header/Header'
import {Header2} from './components/Header/Header'
//import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import {PageHeader} from './components/Header/Header'
import MyLayout from './components/Layout/Layout';
import MyModal from './components/Modal/Modal';


function App() {
  return (
    <div>
     <Header/>
      <MyLayout/>
      <MyModal/>      
    </div>
  );
}

export default App;
