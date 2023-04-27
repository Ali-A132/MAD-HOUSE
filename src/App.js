
import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, Routes,  Redirect, Link, BrowserRouter, useNavigate } from "react-router-dom";
import conversion from './components/Stems/Stems';
import Redirection from './components/Redirect/Redirect';
import Interview from './components/Interview/Interview';
import Concert from './components/Concert/Concert';
import Unreleased from './components/Unreleased/Unreleased';
import Stems from './components/Stems/Stems';
import RedirectLilas from './components/RedirectLilas/RedirectLilas';
import RedirectNujabes from './components/RedirectNujabes/RedirectNujabes';
import StemsNujabes from './components/StemsNujabes/StemsNujabes';
import UnreleasedNujabes from './components/UnreleasedNujabes/UnreleasedNujabes';
import ConcertNujabes from './components/ConcertNujabes/ConcertNujabes';
import InterviewNujabes from './components/InterviewNujabes/InterviewNujabes';
import InterviewLilas from './components/InterviewLilas/InterviewLilas';
import UnreleasedLilas from './components/UnreleasedLilas/UnreleasedLilas';
import ConcertLilas from './components/ConcertLilas/ConcertLilas';
import StemsLilas from './components/StemsLilas/StemsLilas';
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
        <Route exact path = "/redirectLilas" element = {<RedirectLilas/>}></Route>
        <Route exact path = "/redirectNujabes" element = {<RedirectNujabes/>}></Route>
        <Route exact path = "/stemsNujabes" element = {<StemsNujabes/>}></Route>
        <Route exact path = "/unreleasedNujabes" element = {<UnreleasedNujabes/>}></Route>
        <Route exact path = "/interviewNujabes" element = {<InterviewNujabes/>}></Route>
        <Route exact path = "/concertNujabes" element = {<ConcertNujabes/>}></Route>
        <Route exact path = "/stemsLilas" element = {<StemsLilas/>}></Route>
        <Route exact path = "/unreleasedLilas" element = {<UnreleasedLilas/>}></Route>
        <Route exact path = "/interviewLilas" element = {<InterviewLilas/>}></Route>
        <Route exact path = "/concertLilas" element = {<ConcertLilas/>}></Route>
      </Routes>
    </section>

  );
}

export default App;

// submit upload button
{/* <input type="file" id="actual-btn"/>


<label for="actual-btn"></label> */}