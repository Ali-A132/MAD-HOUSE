import React from 'react';
import grip from "../../images/exmilitary.jpg";
import file from "../../images/filePic.png";
import folder from "../../images/folder_direct.png";
import adultSwim from "../../database/Death Grips Interview—April 2012.mp4";
import pitchFork from "../../database/Death Grips Interview DELETED 720p.mp4";
import clash from "../../database/lostClashMusicInterview.jpg";
//lostClashMusicInterview.jpg
import './Interview.css';

const Interview = () => {
     return (
          <div className="Interview">
                           <div class="navbar"></div>
               <div class="name_title">
                    <div class = "name_title_text">Death Grips</div>
               </div>

               <img class="grip" src={grip}></img>

               <img class="folder_int" src={folder}></img>
               <div class = "int_text">Interview Clips</div>
               <div class="bio1">Stefan Burnett, Andy Morin, and Zach Hill
are not very well known for doing interviews
and its contributed to the mystique of Death 
Grips and not much is known about their personal
lives. With the exception of Zach Hill’s 
involvement in the band Hella, Andy Morin’s 
running the label A2B2, Ride (Stefan Burnett) 
does not have social media and not much is 
known about him.

</div>

               <div class = "name_display_title">
                    <div class = "name_display1">Name</div>
                    <div class = "name_display2">Size</div>
                    <div class = "name_display">Type</div>
               </div>
               <div class = "file_row">
                    
                         <a href={pitchFork} download>
                         <img class="filePicture" src={file}></img>
                         </a>
                    <div class = "filePicture_text1">
                         <a href= {pitchFork} target="_blank">DELETED Death Grips PitchFork Interview 2013</a> 
                    </div>
                    <div class = "filePicture_text4">52.2mb</div>
                    <div class = "filePicture_text3">MP4</div>
               </div>

               <div class = "marginal"></div>


               <div class = "file_row">

                    <a href={adultSwim} download>
                         <img class="filePicture" src={file}></img>
                    </a>
                    <div class = "filePicture_text1">
                         <a href = {clash} target="_blank">Clash Music Death Grips Interview 2012</a>
                    </div>
                    <div class = "filePicture_text7">670.0kb</div>
                    <div class = "filePicture_text6">JPG</div>
               </div>

               <div class = "marginal"></div>

               <div class = "file_row">

                    <a href={adultSwim} download>
                         <img class="filePicture" src={file}></img>
                    </a>
                    <div class = "filePicture_text1">
                         <a href = {adultSwim} target="_blank">Death Grips Adult Swim Interview 2012</a>
                    </div>
                    <div class = "filePicture_text2">10.8mb</div>
                    <div class = "filePicture_text5">MP4</div>
               </div>

               <div class = "upload_box">
                    Upload
               </div>

     
               <div class="navbar"></div>
          </div>
     );
};

export default Interview;