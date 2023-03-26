import React, { useEffect } from 'react';
import {useState} from 'react';
import {storage} from "../../firebase";
import {ref, uploadBytes, listAll, getDownloadURL, refFromURL} from "firebase/storage";
import {v4} from "uuid";
import grip from "../../images/bottomlessPit.png";
import file from "../../images/filePic.png";
import folder from "../../images/folder_direct.png";
import adultSwim from "../../database/Earth Angel (Androgynous Mind).mp3";
import pitchFork from "../../database/FAB (Demo).mp3";
import clash from "../../database/lostClashMusicInterview.jpg";
//lostClashMusicInterview.jpg
import './Unreleased.css';

const Unreleased = () => {
     const [imageUpload, setImageUpload] = useState(null);
     const [imageList, setImageList] = useState([]);
     const imageListRef = ref(storage, 'unreleased/');
     const uploadImage = () => {
          if (imageUpload == null) return;
          const imageRef = ref(storage, ('unreleased/' + imageUpload.name))
          uploadBytes(imageRef, imageUpload).then((snapshot) => {
               alert("File Uploaded");
               getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [...prev, url])
               })
          });
     };

     useEffect(() => {
          listAll(imageListRef).then((response) => {
               response.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                         setImageList((prev) => [...prev, url]);
                    })
               })
          })
     }, []);

     const scrollToTop = () => {
          window.scrollTo(0, 0)
      }
     return (
          <div className="Interview">
                           <div class="navbar"></div>
               <div class="name_title">
                    <div class = "name_title_text">Death Grips</div>
               </div>

               <img class="grip" src={grip}></img>

               <img class="folder_int" src={folder}></img>
               <div class = "int_text">Unreleased/Mixtapes</div>
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
                    <div class = "name_display5">Download</div>
                    <div class = "name_display1">Name (view)</div>
                    <div class = "name_display2">Size</div>
                    <div class = "name_display">Type</div>
               </div>
               <div class = "file_row">
                    
                         <a href={pitchFork} download>
                         <img class="filePicture" src={file}></img>
                         </a>
                    <div class = "filePicture_text1">
                         <a href= {pitchFork} target="_blank">Demo Of FAB</a> 
                    </div>
                    <div class = "filePicture_text4">9.00MB</div>
                    <div class = "filePicture_text3">MP3</div>
               </div>

               <div class = "marginal"></div>

               <div class = "marginal"></div>

               <div class = "file_row">

                    <a href={adultSwim} download>
                         <img class="filePicture" src={file}></img>
                    </a>
                    <div class = "filePicture_text1">
                         <a href = {adultSwim} target="_blank">Earth Angel (Androgynous Mind)</a>
                    </div>
                    <div class = "filePicture_text4">5.96MB</div>
                    <div class = "filePicture_text3">MP3</div>
               </div>

               <input class="upload_box" type="file" onChange={(event) => {setImageUpload(event.target.files[0]);}}/>
               <button class = "submission" onClick={uploadImage}>Upload</button>
               <div class = "evenal"></div>
               {imageList.map((url) => {
                    let link = new String(url + "\n");
                    return <a class = "linked" href = {url} target= "blank">{(link)}</a>
                    //<img src={url}/>;
               })}

               <div class = "marginal"></div>
               <div class="navbar"></div>
          </div>
     );
};

export default Unreleased;