
import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, Routes,  Redirect, Link, BrowserRouter, useNavigate } from "react-router-dom";
import conversion from './components/Stems/Stems';
import Redirection from './components/Redirect/Redirect';
import Interview from './components/Interview/Interview';
import Concert from './components/Concert/Concert';
import Unreleased from './components/Unreleased/Unreleased';
import Stems from './components/Stems/Stems';
import flipbook from "./images/giphyrecord.gif";
import album from "./images/album.jpg";
import madhouseLogo from "./images/madhouseLogo.png";
import './App.css';
import Home from './components/Home/Home';

// Import the functions you need from the SDKs you need

function App() {
  return (
    <section>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/redirect" element = {<Redirection/>}></Route>
        <Route exact path = "/interview" element = {<Interview/>}></Route>
        <Route exact path = "/concert" element = {<Concert/>}></Route>
        <Route exact path = "/unreleased" element = {<Unreleased/>}></Route>
        <Route exact path = "/stems" element = {<Stems/>}></Route>
      </Routes>
    </section>

  );
}

export default App;

// submit upload button
{/* <input type="file" id="actual-btn"/>


<label for="actual-btn"></label> */}