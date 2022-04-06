import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.js";
import Home from './Home.js';
import Login from './Login.js';
import Checkout from './Checkout.js';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser  => {
      console.log('user is', authUser);

      if(authUser){

        dispatch({
        type: 'SET_USER',
        user:authUser
      })
    }else {
      dispatch({
        type: 'SET_USER',
        user: null
      })

      }
    })

  }, [])

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
