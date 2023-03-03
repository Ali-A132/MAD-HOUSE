import React, { useEffect } from 'react';
import {useState} from 'react';
import {storage} from "../../firebase";
import {ref, uploadBytes, listAll, getDownloadURL, refFromURL} from "firebase/storage";
import {v4} from "uuid";
import grip from "../../images/LilasIkuta.png";
import file from "../../images/filePic.png";
import folder from "../../images/folder_direct.png";
import adultSwim from "../../database/02 Hot Head (Instrumental).mp3";
import pitchFork from "../../database/05 Hustle Bones Instrumental.mp3";
import clash from "../../database/06 Bubbles Buried in this Jungle (Instrumental).mp3";
import hack from "../../database/13 Hacker Instrumental.mp3";
//lostClashMusicInterview.jpg
import './StemsLilas.css';

const Stems = () => {
     const [imageUpload, setImageUpload] = useState(null);
     const [imageList, setImageList] = useState([]);
     const imageListRef = ref(storage, 'stemsLilas/');
     const uploadImage = () => {
          if (imageUpload == null) return;
          const imageRef = ref(storage, ('stemsLilas/' + imageUpload.name))
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
                    <div class = "name_title_text">Lilas Ikuta</div>
               </div>

               <img class="grip" src={grip}></img>

               <img class="folder_int" src={folder}></img>
               <div class = "int_text">Stems/Instrumentals</div>
               <div class="bio">Lilas Ikuta, performing under the stage name Ikura in Yoasobi, is a singer-songwriter and a then-member of the cover group Plusonica from 2017 to 2021. She released her solo demo CD: 15 no Omoi (2016), and two EPs: Rerise (2018) and Jukebox (2019) through independent label After School. Performing under the stage name Ikura in Yoasobi, is a singer-songwriter and a then-member of the cover group Plusonica from 2017 to 2021. She released her solo demo CD: 15 no Omoi (2016), and two EPs.

</div>

               <div class = "name_display_title">
                    <div class = "name_display5">Download</div>
                    <div class = "name_display1">Name (view)</div>
                    <div class = "name_display2">Size</div>
                    <div class = "name_display">Type</div>
               </div>

               {/* <input class="upload_box" type="file" onChange={(event) => {setImageUpload(event.target.files[0]);}}/> */}
               <button class = "submission" onClick={uploadImage}>Upload</button>
               <div class = "marginal_plus"></div>
               <div class = "instruction">If you want to add to this database, feel free to browse your local files and upload onto our
database to contribute to the archive.</div>
               <div class = "instruction2">You will get a pop up saying it is uploaded once it completes
processing and it will add onto the stack of information on screen at the bottom.</div>

               <div class = "name_display_title1">
                    <div class = "name_display5">Download</div>
                    <div class = "name_display1">Name(view)</div>
               </div>

               {imageList.map((url) => {
                    let link = new String(url);
                    const filename = link.split('/').pop().split('?')[0];
                    const decodedString = decodeURIComponent(filename);
                    const filename1 = decodedString.split('/').pop();
                    return (
                         <div class = "file_row">
                              
                              <a href={url} download>
                                   <img class="filePicture" src={file}></img>
                                   <div class = "marginal"></div>

                              </a>
                              <div class = "filePicture_text1">
                                   <a class = "filePicture_text1_plus" href = {url} target= "blank">{(filename1)}</a>
                                   <div class = "marginal"></div>

                              </div>
                         </div>
                    );
                    //<img src={url}/>;
               })}
               <div class="navbar"></div>
          </div>
     );
};

export default Stems;