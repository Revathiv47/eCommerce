import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import Home from './Home.js';
import Login from './Login.js';
import Checkout from './Checkout.js';
import { useEffect } from "react/cjs/react.production.min";
import {auth} from "./firebase";

function App() {

  
  return (
    <div>
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Header /> } exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/" element={<Home /> } exact></Route>
        <Route path="/checkout" element={<Checkout /> } exact></Route>
          
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
