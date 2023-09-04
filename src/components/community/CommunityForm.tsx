import React,{ useCallback, useEffect, useRef, useState, FormEvent }from 'react'
import { useCommunityMutation } from '../../api/mock/SocialPostApi';
import { useNavigate } from 'react-router-dom';
import { CrewButtons, CrewContent, CrewDates, CrewFormContents, CrewForms, CrewLocation, CrewName, CrewTimes, CrewTitle, CrewTotalMembers,CrewImage, CrewImageUpLoad  } from "./CommunityForm.style";
import CommunityDrag from './CommunityDrag';
import { CheckuserInfo } from '../../api/AuthApi';

interface CommunityType {
  title: string;
  content: string;
  image: File[];
};


const  CommunityForm: React.FC= () => {
  const [addImg, setAddImg] = useState<string[]>([]);
  const ref = useRef<HTMLElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const {mutate} = useCommunityMutation();
  const navigate = useNavigate();

 

  const [crew, setCrew] = useState<CommunityType>({
    title: "",
    content: "",
    image: [],
});

 
  const onCrewUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData();
    const contents = {
      title: crew.title,
      content: crew.content,
    };
    const jsonContent = JSON.stringify(contents);
    const blob = new Blob([jsonContent], { type: "application/json" });
    formData.append("data", blob);
    for (let i = 0; i < crew.image.length; i++) {
      formData.append(`image`, crew.image[i]);
      console.log(crew.image[i]);
      }
     mutate(formData);
      alert("성공적으로 데이터를 전송하였습니다.");
  };
     
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>  {
    const { name, value } = e.target;
        setCrew({
          ...crew,
          [name]: value,
        });
        if (name === "content" && textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
      if (value) {
        e.target.classList.add('focused');
    } else {
        e.target.classList.remove('focused');
    }// ...
  };

 
  //   const upLoadImgHandler = async(e) => {
  //     const files = e.target.files;
  //     if (!files || files.length === 0) {
  //         console.error("No files provided");
  //         return;
  //     }
  //     const file = files[0];
  
  //     const options = {
  //         maxSizeMB: 1,
  //         maxWidthOrHeight: 1000,
  //         useWebWorker: true,
  //     };
  
  //     try {
  //         const compressedFile = await imageCompression(file, options);
  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //             const url = reader.result
  
  //             setAddImg(prevURLs => [...prevURLs, url]);
  //             setCrew(prevCrew => {
  //                 const newImage = {...prevCrew.image};
  //                 return {
  //                     ...prevCrew,
  //                     image: newImage
  //                 };
  //             });
  //         };
  //         reader.readAsDataURL(compressedFile);
  //     } catch (error) {
  //         console.error("Error during image processing:", error);
  //     }
  // };
  // const deletion = (index) => {
  //   const updatedImages = [...addImg];
  //   updatedImages.splice(index, 1);
  //   setAddImg(updatedImages);
  // };


  return (
    
    <CrewForms onSubmit={onCrewUpload}>
       <CommunityDrag setCrew={setCrew} crew={crew} />

      <CrewFormContents>
        <CrewTitle className="identicalStyle">
          <input
            type="text"
            name="title"
            value={crew.title}
            placeholder="제목"
            onChange={handleInputChange}
          />
        </CrewTitle>
        <CrewContent className="identicalStyle">
          <strong>내용</strong>
          <textarea
            ref={textareaRef}
            rows={1} 
            name="content"
            value={crew.content}
            placeholder="내용을 입력하세요"
            onChange={handleInputChange}
          />
        </CrewContent>
        <CrewButtons className="button">
          <button type="submit" className="submit">
            등록하기
          </button>
        </CrewButtons>
      </CrewFormContents>
    </CrewForms>
  )
}

export default CommunityForm