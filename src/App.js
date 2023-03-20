
import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, Routes,  Redirect, Link, BrowserRouter, useNavigate } from "react-router-dom";
import conversion from './components/Conversion/Conversion';
import Redirection from './components/Redirect/Redirect';
import Interview from './components/Interview/Interview';
import flipbook from "./images/giphyrecord.gif";
import album from "./images/album.jpg";
import madhouseLogo from "./images/madhouseLogo.png";
import './App.css';
import Home from './components/Home/Home';

// import Conversion from './components/Conversion/Conversion';

function App() {
  return (
    <section>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/redirect" element = {<Redirection/>}></Route>
        <Route exact path = "/interview" element = {<Interview/>}></Route>

      </Routes>
    </section>

  );
}

export default App;

// submit upload button
{/* <input type="file" id="actual-btn"/>


<label for="actual-btn"></label> */}