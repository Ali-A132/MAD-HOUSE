import React from 'react';
import './RedirectLilas.css';
import { BrowserRouter as Router, 
     Route, Routes, Link, BrowserRouter, useNavigate } from "react-router-dom";
import grip from "../../images/LilasIkuta.png";
import folder from "../../images/folder_direct.png";
import flipbook from "../../images/flipbook.gif";
import frontman from "../../images/LilasAlbum.png";

const Redirect = () => {
     const scrollToTop = () => {
          window.scrollTo(0, 0)
      }
     return (     
          <div className="direct">
               <div class="navbar"></div>
               <div class="name_title">
                    <div class = "name_title_text">Lilas Ikuta</div>
               </div>

               <img class="grip" src={grip}></img>

               <div class="bio">Lilas Ikuta, performing under the stage name Ikura in Yoasobi, is a singer-songwriter and a then-member of the cover group Plusonica from 2017 to 2021. She released her solo demo CD: 15 no Omoi (2016), and two EPs: Rerise (2018) and Jukebox (2019) through independent label After School. Performing under the stage name Ikura in Yoasobi, is a singer-songwriter and a then-member of the cover group Plusonica from 2017 to 2021. She released her solo demo CD: 15 no Omoi (2016), and two EPs: Rerise (2018) and Jukebox (2019) through independent label After School.</div>

               <div class = "folder_title">
   
                    <div class = "folder_title_text">Interview Clips</div>
               </div>

                    <Link to="/interviewLilas" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>
               

               <div class = "concert_box">
                    <div class = "folder_title">
                         <div class = "folder_title_text">Concert Footage</div>
                    </div>

                    
                    <Link to="/concertLilas" class = "box__artists__done">
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

                    <Link to="/unreleasedLilas" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>

               </div>

               <div class = "stem_box">
                    <div class = "folder_title2">
                         <div class = "folder_title_text2">Stems/</div>
                         <div class = "folder_title_text2">Instrumentals</div>
                    </div>


                    <Link to="/stemsLilas" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>
               </div>

               <div class="navbar"></div>
          </div>
     );
};

export default Redirect;