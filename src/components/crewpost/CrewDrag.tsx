import React, { useState,useRef } from 'react';
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
 const [draggingTouchIndex, setDraggingTouchIndex] = useState<number | null>(null);
 const [touchPosition, setTouchPosition] = useState<{ x: number, y: number } | null>(null);
 const threshold = 10;
 const imageRefs = useRef<(HTMLImageElement | null)[]>([]);


const upLoadImgHandler = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
        console.error("No files provided");
        return;
    }
    
    if (files.length > 3) {
        alert("최대 3개의 이미지만 업로드 가능합니다.");
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

  
    const droppedURL = updatedURLs[overIndex];
    const droppedFile = updatedFiles[overIndex];

    updatedURLs[overIndex] = updatedURLs[draggingIndex];
    updatedFiles[overIndex] = updatedFiles[draggingIndex];

    updatedURLs[draggingIndex] = droppedURL;
    updatedFiles[draggingIndex] = droppedFile;

    console.log('Updated URLs:', updatedURLs); 
    console.log('Updated Files:', updatedFiles);

    setAddImg(updatedURLs);
    setCrew(prevCrew => ({
        ...prevCrew,
        images: updatedFiles 
    }));

    setDraggingIndex(-1);
    setOverIndex(-1);
};
const rearrangeImages = (fromIndex: number, toIndex: number) => {
    let newImages = [...addImg];
    let newFiles = [...crew.images]; 
    
    if ((fromIndex === 1 && toIndex === 0) || (fromIndex === 0 && toIndex === 1)) { 
        const temp = newImages[1];
        newImages[1] = newImages[0];
        newImages[0] = temp;
    } else if ((fromIndex === 2 && toIndex === 0) || (fromIndex === 0 && toIndex === 2)) {
        const temp = newImages[2];
        newImages[2] = newImages[0];
        newImages[0] = temp;
    } else { 
        const [movedImage] = newImages.splice(fromIndex, 1);
        newImages.splice(toIndex, 0, movedImage);
    }
    const tempFile = newFiles[toIndex];
    newFiles[toIndex] = newFiles[fromIndex];
    newFiles[fromIndex] = tempFile;
    
    setAddImg(newImages);
    setCrew(prevCrew => ({
        ...prevCrew,
        images: newFiles 
    }));
};



const resetDragState = () => {
    setDraggingIndex(-1);
    setOverIndex(-1);
    setDraggingTouchIndex(null);
    setTouchPosition(null);
};
const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>, index: number) => {
    console.log("Touch Start Event Triggered");
    setDraggingTouchIndex(index);
    const touch = e.touches[0];
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
  };
const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    console.log("Touch End Event Triggered");
    if (draggingTouchIndex !== null && overIndex !== -1) {
        rearrangeImages(draggingTouchIndex, overIndex);
    }
    
    resetDragState();
}

const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (draggingTouchIndex === null || !touchPosition) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchPosition.x;
    const deltaY = touch.clientY - touchPosition.y;

    const distance = (x1: number, y1: number, x2: number, y2: number) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    let closestIndex = draggingTouchIndex;
    let closestDistance = Infinity;

    imageRefs.current.forEach((imgRef, index) => {
        if (imgRef && index !== draggingTouchIndex) {
            const rect = imgRef.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const d = distance(touch.clientX, touch.clientY, centerX, centerY);
            if (d < closestDistance) {
                closestDistance = d;
                closestIndex = index;
            }
        }
    });

    setOverIndex(closestIndex);
};
const ImageUploads=(length:any)=> {
    switch (length) {
        case 1:
            return "single";
        case 2:
            return "double";
        case 3:
            return "triple";
        default:
            return "imageWrapper";
    }
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
                {addImg.map((imgSrc, index) => {
                    const ImageUploadsClassName = ImageUploads(addImg.length);
                    return (
                        <div key={index} className={ImageUploadsClassName}>
                            <img 
                                ref={(el) => imageRefs.current[index] = el}
                                src={imgSrc} 
                                alt={`Uploaded ${index}`}
                                className={`${index === 0 ? 'largeImage' : 'smallImage'} ${draggingIndex === index ? 'dragging' : ''} ${overIndex === index ? 'over' : ''}`}    
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragOver={(e) => handleDragOver(e, index)}
                                onDrop={handleDrop}
                                onTouchStart={(e) => handleTouchStart(e, index)}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            />
                            <div className="close">
                                <button onClick={() => deletion(index)}>X</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </CrewImageUpLoad>
    )}
    </CrewImage>
  )
}

export default CrewDrag;
