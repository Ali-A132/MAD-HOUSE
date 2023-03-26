
import React, { Component } from 'react';
import { BrowserRouter as Router, 
  Route, Routes,  Redirect, Link, BrowserRouter, useNavigate } from "react-router-dom";
import { BsArrowDown } from 'react-icons/bs';
// import conversion from './components/Conversion/Conversion';
import redirect from '../../components/Redirect/Redirect';
import flipbook from "../../images/giphyrecord.gif";
import album from "../../images/album.jpg";
import madhouseLogo from "../../images/madhouseLogo.png";
import titles from "../../images/topsters2(4).jpg";
import './Home.css';
// import Conversion from './components/Conversion/Conversion';

function Home() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className="App">

    <div class="navbar" id = "top">
      
        <a class = "navbar-item1" href ="#aboot">About</a>
        <a class = "navbar-item" href ="https://github.com/Ali-A132/MAD-HOUSE" target = "blank">Code</a>
        <a class = "navbar-item" href ="https://github.com/Ali-A132" target = "blank">Contact Us</a>
        <a class = "navbar-item" href ={titles} target = "blank">Album Names</a>
        <a class = "scroll_down" href ="#bot"><BsArrowDown size = {35}/></a>  
      </div>

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
    <div class = "marginal"></div>
    <h1 id = "aboot"></h1>
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
      <nav>
        <ul>
          <li><Link onClick={scrollToTop} to="/redirect" class = "box__artists__done">Death Grips</Link></li>
        </ul>
      </nav>
      <div class="box__artists">Wu-Tang Clan</div>
      <div class="box__artists">Kanye West</div>
      <Link onClick={scrollToTop} to="/redirect" class = "box__artists__done">Lilas Ikuta</Link>
      <div class="box__artists">Danny Brown</div>
      <div class="box__artists">Tyler, The Creator</div>
      <Link onClick={scrollToTop} to="/redirect" class = "box__artists__done">Nujabes</Link>
      <div class="box__artists">Hiatus Kaiyote</div>
      <div class="box__artists__add">ADD MORE +</div>
    </div>

    <Routes>
      <Route path="/redirect" element={<redirect/>} />
    </Routes> 

    <div class="navbar" id = "bot">

    </div>


</div>
  );
}

export default Home;

// submit upload button
{/* <input type="file" id="actual-btn"/>


<label for="actual-btn"></label> */}