import React from 'react';
import './App.css';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import Menu from './componentes/Menu/Menu';


function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className='p-lg-5 p-5 '></div>
        <div className='p-lg-0 p-5 '></div>
        <div className='p-lg-0 p-4 '></div>

        <Routes>
      
        </Routes>
      </Router>

      {/* <Inicio /> */}
    </>
  );
}

export default App;
