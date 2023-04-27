import React from 'react';
import './RedirectNujabes.css';
import { BrowserRouter as Router, 
     Route, Routes, Link, BrowserRouter, useNavigate } from "react-router-dom";
import grip from "../../images/NujabesAlbum.png";
import folder from "../../images/folder_direct.png";
import flipbook from "../../images/flipbook.gif";
import frontman from "../../images/Nujabes.png";

const Redirect = () => {
     const scrollToTop = () => {
          window.scrollTo(0, 0)
      }
     return (     
          <div className="direct">
               <div class="navbar"></div>
               <div class="name_title">
                    <div class = "name_title_text">Nujabes</div>
               </div>

               <img class="grip" src={grip}></img>

               <div class="bio2">Jun Seba (Japanese: 瀬葉 淳, Hepburn: Seba Jun, February 7, 1974 – February 26, 2010), better known by his stage name Nujabes (ヌジャベス, Nujabesu), was a Japanese record producer, audio engineer, DJ, composer and arranger best known for his atmospheric instrumental mixes sampling from hip hop, soul, and jazz, as well as incorporating elements of trip hop, breakbeat, downtempo, and ambient music.Seba released two studio albums during his lifetime: Metaphorical Music (2003) and Modal Soul (2005).</div>

               <div class = "folder_title">
   
                    <div class = "folder_title_text">Interview Clips</div>
               </div>

                    <Link to="/interviewNujabes" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>
               

               <div class = "concert_box">
                    <div class = "folder_title">
                         <div class = "folder_title_text">Concert Footage</div>
                    </div>

                    
                    <Link to="/concertNujabes" class = "box__artists__done">
                         <img  onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>
 
               </div>

               <img class="flipper" src={flipbook}></img>

               <img class="artist_ride" src={frontman}></img>


               <div class = "unreleased_box">
                    <div class = "folder_title2">
                         <div class = "folder_title_text2">Unreleased/</div>
                         <div class = "folder_title_text2">Mixtapes</div>
                    </div>

                    <Link to="/unreleasedNujabes" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>

               </div>

               <div class = "stem_box">
                    <div class = "folder_title2">
                         <div class = "folder_title_text2">Stems/</div>
                         <div class = "folder_title_text2">Instrumentals</div>
                    </div>


                    <Link to="/stemsNujabes" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>
               </div>

               <div class="navbar"></div>
          </div>
     );
};

export default Redirect;