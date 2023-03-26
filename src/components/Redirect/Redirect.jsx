import React from 'react';
import './Redirect.css';
import { BrowserRouter as Router, 
     Route, Routes, Link, BrowserRouter, useNavigate } from "react-router-dom";
import grip from "../../images/exmilitary.jpg";
import folder from "../../images/folder_direct.png";
import flipbook from "../../images/flipbook.gif";
import frontman from "../../images/frontman_ride.png";

const Redirect = () => {
     const scrollToTop = () => {
          window.scrollTo(0, 0)
      }
     return (     
          <div className="direct">
               <div class="navbar"></div>
               <div class="name_title">
                    <div class = "name_title_text">Death Grips</div>
               </div>

               <img class="grip" src={grip}></img>

               <div class="bio">Death Grips is an American experimental hip hop group formed in 2010 in Sacramento, California. The group consists of Stefan Burnett, also known as MC Ride (vocals, lyrics), Zach Hill (drums, production, lyrics), and Andy Morin (keyboards, production, lyrics).Though he is not the group's frontman, Hill has been credited with being the driving creative force behind the project.Drawing from punk rock, electronic, noise, and industrial styles, the band's innovative and often difficult-to-categorize sound has earned critical acclaim and a cult following.</div>

               <div class = "folder_title">
   
                    <div class = "folder_title_text">Interview Clips</div>
               </div>

                    <Link to="/interview" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>
               

               <div class = "concert_box">
                    <div class = "folder_title">
                         <div class = "folder_title_text">Concert Footage</div>
                    </div>

                    
                    <Link to="/concert" class = "box__artists__done">
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

                    <Link to="/unreleased" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>

               </div>

               <div class = "stem_box">
                    <div class = "folder_title2">
                         <div class = "folder_title_text2">Stems/</div>
                         <div class = "folder_title_text2">Instrumentals</div>
                    </div>


                    <Link to="/stems" class = "box__artists__done">
                         <img onClick={scrollToTop} class="folder_pic" src={folder}></img>
                    </Link>
               </div>

               <div class="navbar"></div>
          </div>
     );
};

export default Redirect;