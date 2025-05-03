
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={8} country="us" category="general"/>}/> 
            <Route exact path="/business" element={<News key="business" pagesize={8} country="us" category="business"/>}/> 
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={8} country="us" category="entertainment"/>}/> 
            <Route exact path="/general" element={<News key="general" pagesize={8} country="us" category="general"/>}/> 
            <Route exact path="/health" element={<News key="health" pagesize={8} country="us" category="health"/>}/> 
            <Route exact path="/science" element={<News key="science" pagesize={8} country="us" category="science"/>}/> 
            <Route exact path="/technology" element={<News key="technology" pagesize={8} country="us" category="technology"/>}/>  
            <Route exact path="/sports" element={<News key="sports" pagesize={8} country="us" category="sports"/>}/>  
            <Route exact path="/login" element={<Login></Login>}></Route>
            <Route exact path="/signup" element={<Signup></Signup>}></Route>
          </Routes>
        </Router>
      </div>
      </>
    )
  }
}
