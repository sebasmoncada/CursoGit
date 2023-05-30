import React from 'react';
import './App.css';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import Menu from './componentes/Menu/Menu';
import Inicio from './componentes/Inicio/Inicio';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className='p-lg-5 p-5 '></div>
        <div className='p-lg-0 p-5 '></div>
        <div className='p-lg-0 p-4 '></div>

        <Routes>
          <Route path="/" element={<Inicio />}/> 
          
        </Routes>
      </Router>

      {/* <Inicio /> */}
    </>
  );
}

export default App;
