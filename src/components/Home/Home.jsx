
import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, Routes,  Redirect, Link, BrowserRouter, useNavigate } from "react-router-dom";
// import conversion from './components/Conversion/Conversion';
import redirect from '../../components/Redirect/Redirect';
import flipbook from "../../images/giphyrecord.gif";
import album from "../../images/album.jpg";
import madhouseLogo from "../../images/madhouseLogo.png";
import './Home.css';
// import Conversion from './components/Conversion/Conversion';

function Home() {
  return (
    <div className="App">
      


      <div className="navbar_new">
      <div className="navbar-items">
        <div className="navbar-item">
          <a href="#">About</a>
        </div>
        <div className="navbar-item">
          <a href="#">Code</a>
        </div>
        <div className="navbar-item">
          <a href="#">Contact</a>
        </div>
        <div className="navbar-item">
          <a href="#">Album Covers</a>
        </div>
      </div>
      <div className="navbar-arrow">
      <span className="arrow-symbol">&gt;</span>
      </div>
    </div>
    
    <nav>
      <ul>
        <li><Link to="/redirect">Death Grips</Link></li>
      </ul>
    </nav>

  <Routes>
    <Route path="/redirect" element={<redirect/>} />
  </Routes> 


    <img class='flipbook1' src={flipbook}></img>
    <img class='flipbook2' src={flipbook}></img>

    <div class='title__container'>
      <div class="title__box">
        <img class='mad' src={madhouseLogo}></img>
        <div class="semi__title__box">
          <div>&lt;My-Artist-Database/&gt;</div>
        </div>
      </div>
    </div>

    <h3 class="paragraph__title">Welcome to the MAD (My-Artist-Database) House website! This site serves two purposes, it acts
as an archive for our favourite artists interviews, concerts, and unreleased music. It also 
converts YouTube videos by their URL into MP3 files for the purpose of storage/archival.
Feel free to go navigate the site and have fun!</h3>

    <div class="album__collage">
    <img class="collage" src={album}></img>
    </div>
  
    <div class ="divider">
      <hr class="divider__ac"></hr>
    </div>
  
    <h3 class="box__title">Artist Pages</h3>

    <div class="box">
      <div class="box__artists">Daft Punk</div>
      <div class="box__artists">MF DOOM</div>
      <a class="box__artists__done" routerLink="/daft">Death Grips</a>
      <div class="box__artists">Wu-Tang Clan</div>
      <div class="box__artists">Kanye West</div>
      <div class="box__artists">JPEGMAFIA</div>
      <div class="box__artists">Danny Brown</div>
      <div class="box__artists">Tyler, The Creator</div>
      <div class="box__artists">Hiatus Kaiyote</div>
      <div class="box__artists__add">ADD MORE +</div>
    </div>

    <div class="navbar">

    </div>


</div>
  );
}

export default Home;

// submit upload button
{/* <input type="file" id="actual-btn"/>


<label for="actual-btn"></label> */}