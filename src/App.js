import logo from './logo.svg';
import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from './pages/Home/Home';
import Politic from './pages/Politic/Politic';


import './app.scss';


function App() {
  return (
    <>
      <HashRouter hashType="hashbang" >
        <Routes>
           <Route exact path="/" element={<Home/>}/>   
           <Route path="/candidate/:id" element={<Politic/>}/>    
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
