import React, { useState } from 'react';
import { CrewImage, CrewImageUpLoad } from './CrewDrag.style';
import { AiOutlineCamera } from "react-icons/ai";
import imageCompression from "browser-image-compression";
import {Crew} from "../crewpost/CrewTypes";

interface CrewDragProps {
    crew: Crew;
    setCrew: React.Dispatch<React.SetStateAction<Crew>>;
  }


 const CrewDrag: React.FC<CrewDragProps> = ({ crew, setCrew }) =>  {
 const [draggingIndex, setDraggingIndex] = useState<number>(-1);
 const [overIndex, setOverIndex] = useState<number>(-1);
 const [addImg, setAddImg] = useState<string[]>([]);

const upLoadImgHandler = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
        console.error("No files provided");
        return;
    }
  
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
        useWebWorker: true,
    };

    const allFilePromises = Array.from(files).map(file => {

        return new Promise<{ url: string, file: File }>(async (resolve, reject) => {
            try {
                const compressedFile = await imageCompression(file, options);
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve({ url: reader.result as string, file: compressedFile });
                };
                reader.readAsDataURL(compressedFile);
            } catch (error) {
                reject(error);
            }
        });
    });

    try {
        const results = await Promise.all(allFilePromises);
        const previewURLs = results.map(result => result.url);
        const compressedFiles = results.map(result => result.file);

        setAddImg(prevURLs => [...prevURLs, ...previewURLs]);
        setCrew(prevCrew => {
            const newImages = [...prevCrew.images, ...compressedFiles];
            return {
                ...prevCrew,
                images: newImages
            };
        });
    } catch (error) {
        console.error("Error during image processing:", error);
    }
};

const handleDragStart = (e: React.DragEvent<HTMLImageElement>, index: number) => {
  e.dataTransfer.effectAllowed = "move";
  setDraggingIndex(index);
}

const handleDragOver = (e: React.DragEvent<HTMLImageElement>, index: number) => {
  e.preventDefault();
  if (draggingIndex !== index) {
      setOverIndex(index);
  }
}
const deletion = (index: number) => {
    const updatedImages = [...addImg];
    updatedImages.splice(index, 1);
    setAddImg(updatedImages);
};
const handleDrop = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    
    const updatedURLs = [...addImg];
    const updatedFiles = [...crew.images];
    
    const [removedURL] = updatedURLs.splice(draggingIndex, 1);
    updatedURLs.splice(overIndex, 0, removedURL);
    console.log('Updated URLs:', updatedURLs); 
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
            <div>
            {addImg.map((imgSrc, index) => (
                <div key={index} className="imageWrapper">
                    <img 
                        src={imgSrc} 
                        alt={`Uploaded ${index}`}
                        className={`${index === 0 ? 'largeImage' : 'smallImage'} ${draggingIndex === index ? 'dragging' : ''} ${overIndex === index ? 'over' : ''}`}    
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDrop={handleDrop}
                    />
                    <div className="close">
                        <button onClick={() => deletion(index)}>X</button>
                    </div>
                </div>
            ))}
            </div>
        </CrewImageUpLoad>
        )}
    </CrewImage>
  )
}

export default CrewDrag;
