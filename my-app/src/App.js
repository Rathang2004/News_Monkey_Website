import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsParentComponent from './components/NewsParentComponent';

export default class App extends Component {
  c = 'Grande';
  render(){
    return (
      <div className='main-containter'>
        <Navbar />
        <NewsParentComponent />
      </div>
    )
  }
}

