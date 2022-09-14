import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter,
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
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<Home/>}/>   
           <Route path="/candidate/:id" element={<Politic/>}/>           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
