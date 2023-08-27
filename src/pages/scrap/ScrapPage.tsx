import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getScrap } from "../../api/CrewApi";
import { useNavigate } from "react-router-dom";

interface CrewList {
  content: string;
  crewName: string;
  crewRecruitmentId: number;
  currentNumber: number;
  exerciseDate: string;
  exerciseKind: string;
  image?: string[];
  location: string;
  postDate: number[];
  title: string;
  totalNumber: number;
  usersLocation: string;
  page: number;
}

interface Data {
  data: {
    crewList: CrewList[];
    totalPages: number;
  };
}

const ScrapPage = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery(["scraps"], getScrap);

  const onClickCrew = (itemId: number) => {
    if (access && refresh !== "") {
      navigate(`/crew/${itemId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {data?.data.crewList.map((item: any) => (
        <div
          key={item.crewRecruitmentId}
          onClick={() => onClickCrew && onClickCrew(item.crewRecruitmentId)}
        >
          {item.title}
        </div>
      ))}
    </>
  );
};

export default ScrapPage;
