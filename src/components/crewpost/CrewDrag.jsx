import React, { useState } from 'react'
import { CrewImage, CrewImageUpLoad } from './CrewDrag.style';
import { AiOutlineCamera } from "react-icons/ai";
import imageCompression from "browser-image-compression";

const CrewDrag = ({setCrew}) => {
 const [draggingIndex, setDraggingIndex] = useState(-1);
 const [overIndex, setOverIndex] = useState(-1);
 const [addImg, setAddImg] = useState([]);
 const [crew, setCrewState] = useState({
    title: "",
    content: "",
    crewName: "",
    location: "",
    usersLocation: "",
    exerciseDate: new Date().toISOString(),
    exerciseKind: "",
    totalNumber: 0,
    images: [],
    time: "",
  });
    

  // 이미지 미리보기+압축 조정
  const upLoadImgHandler = async(e) => {
   const files = e.target.files;
   console.log('Current crew.images:', crew.images);
 
   if (!files || files.length === 0) {
       console.error("No files provided");
       return;
   }
 
   const options = {
       maxSizeMB: 1,
       maxWidthOrHeight: 1000,
       useWebWorker: true,
   };
 
   const compressedFiles = [];
   const previewURLs = [];
 
   for (let i = 0; i < files.length; i++) {
       if (!(files[i] instanceof File)) {
           console.error("The provided item is not a File");
           continue; // Skip this iteration and move to the next file
       }
 
       try {
           const compressedFile = await imageCompression(files[i], options);
           compressedFiles.push(compressedFile);
 
           const reader = new FileReader();
           reader.onloadend = function(event) {
               previewURLs.push(event.target.result);
 
               
            if (previewURLs.length === compressedFiles.length) {
                setAddImg(previewURLs);
                setCrewState(prevCrew => {
                    console.log('Before setCrewState:', prevCrew.images);
                    const newImages = [...prevCrew.images, ...compressedFiles];
                    console.log('After setCrewState:', newImages);
                    return {
                        ...prevCrew,
                        images: newImages
                    };
                });
            }
           };
           reader.readAsDataURL(compressedFile);
       } catch (error) {
           console.error("Error compressing the file:", error);
       }
   }
 }; 
 
 const handleDragStart = (e, index) => {
  e.dataTransfer.effectAllowed = "move";
  setDraggingIndex(index);
}

const handleDragOver = (e, index) => {
  e.preventDefault();
  if (draggingIndex !== index) {
      setOverIndex(index);
  }
}

const handleDrop = (e) => {
    e.preventDefault();
    
    const updatedURLs = [...addImg];
    const updatedFiles = [...crew.images];
    
    // 이미지 URL 순서 변경
    const [removedURL] = updatedURLs.splice(draggingIndex, 1);
    updatedURLs.splice(overIndex, 0, removedURL);
    console.log('Updated URLs:', updatedURLs); 
    // 이미지 파일 순서 변경
    const [removedFile] = updatedFiles.splice(draggingIndex, 1);
    updatedFiles.splice(overIndex, 0, removedFile);
    console.log('Updated Files:', updatedFiles);
    setAddImg(updatedURLs);
    setCrew(prevCrew => ({
      ...prevCrew,
      images: updatedFiles 
    }));
    
    setDraggingIndex(-1);
    setOverIndex(-1);
  }
  


  return (
   <CrewImage>
   {addImg.length === 0 ? (
        <div className="button">
           <label className="inputFileBtn" htmlFor="inputFile">
               <AiOutlineCamera />
               크루 대표 이미지를 등록해주세요
           </label>
           <input
               type="file"
               id="inputFile"
               accept="image/*"
               onChange={upLoadImgHandler}
               multiple
           />
        </div>
        ) : (
       <CrewImageUpLoad>
           {addImg.map((imgSrc, index) => (
             <img 
             key={index} 
             src={imgSrc} 
             alt={`Uploaded ${index}`}
              className={`${index === 0 ? 'largeImage' : 'smallImage'} ${draggingIndex === index ? 'dragging' : ''} ${overIndex === index ? 'over' : ''}`}    draggable
             onDragStart={(e) => handleDragStart(e, index)}
             onDragOver={(e) => handleDragOver(e, index)}
             onDrop={handleDrop}
         />
           ))}
       </CrewImageUpLoad>
       )}
   </CrewImage>
  )
}

export default CrewDrag