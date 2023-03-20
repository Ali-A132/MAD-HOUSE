
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
      

    <div class="navbar">

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

    <div class="album__collage">
    <img class="collage" src={album}></img>
    </div>

    <div class = "rounded_rect"><b>About This Project</b></div>
    

    <center>
    <h1 style = {{textAlign: "center", maxWidth: 1035, fontFamily: "consolas", paddingBottom: "40px"}}>This project was built with React, Node.js, JavaScript, HTML/CSS and with the Youtube API. This project came about because of our passion for music and wanting to make a project that could help in our day to day. The purpose of this project is to archive an artist's history and see their evolution over time whether it be through sound or personality. Just paste the YouTube URL above to convert it to MP3 and if you want to store it, just head on down to 'Artist Pages' and select the musician, click the category, and upload it in the archive.</h1>
    </center>

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