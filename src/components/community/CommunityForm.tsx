import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  FormEvent,
} from "react";
import { useCommunityMutation } from "../../api/mock/SocialPostApi";
import { useNavigate } from "react-router-dom";
import {
  CrewButtons,
  CrewContent,
  CrewDates,
  CrewFormContents,
  CrewForms,
  CrewLocation,
  CrewName,
  CrewTimes,
  CrewTitle,
  CrewTotalMembers,
  CrewImage,
  CrewImageUpLoad,
} from "./CommunityForm.style";
import CommunityDrag from "./CommunityDrag";
import { CheckuserInfo } from "../../api/AuthApi";
import { useQueryClient } from "@tanstack/react-query";

interface CommunityType {
  title: string;
  content: string;
  image: File[];
}

const CommunityForm: React.FC = () => {
  const [addImg, setAddImg] = useState<string[]>([]);
  const ref = useRef<HTMLElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const queryClient = useQueryClient();
  const { mutate } = useCommunityMutation()
  const navigate = useNavigate();

  const [crew, setCrew] = useState<CommunityType>({
    title: "",
    content: "",
    image: [],
  });

  const onCrewUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!crew.title.trim() || !crew.content.trim() || crew.image.length === 0) {
      alert("제목, 내용, 이미지 모두를 입력해주세요.");
      return;
    }

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
    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(["socialPostData"]);
        alert("성공적으로 커뮤니티에 등록되었습니다.");
      },
      onError: (error) => {
        console.error("Error:", error);
        alert("데이터 전송에 실패하였습니다.");
      }
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCrew({
      ...crew,
      [name]: value,
    });
    if (name === "content" && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    if (value) {
      e.target.classList.add("focused");
    } else {
      e.target.classList.remove("focused");
    } // ...
  };

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
  );
};

export default CommunityForm;
