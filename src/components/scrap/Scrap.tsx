import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, MouseEvent, useRef } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { addScrap } from "../../api/CrewApi";
import { useNavigate } from "react-router-dom";
import { ScrapButton } from "./Scrap.style";

type data = {
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
  scrapped?: boolean;
};

interface ScrapProps {
  id: number;
  currentScrapData: data;
}

interface IconProps {
  component: React.ComponentType<any>;
  style: React.CSSProperties;
}

const Scrap: React.FC<ScrapProps> = ({ id, currentScrapData }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [scrappedAction, setScrappedAction] = useState(false);
  const lastClickedTimeRef = useRef(0);

  const Icon = ({ component: Component, style }: IconProps) => (
    <Component style={style} />
  );

  const addScrapMutation = useMutation(addScrap, {
    onSuccess: () => {
      queryClient.invalidateQueries(["scraps"]);
      setScrappedAction(true);
    },
    onError: () => {
      navigate("/login");
    },
  });

  const removeScrapMutation = useMutation(addScrap, {
    onSuccess: () => {
      queryClient.invalidateQueries(["scraps"]);
      setScrappedAction(false);
      // console.log("scrapped");
    },
  });

  const toggleScrap = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (Date.now() - lastClickedTimeRef.current < 1000) {
      return;
    } else if (currentScrapData?.scrapped || scrappedAction) {
      removeScrapMutation.mutate(id);
      // console.log("click1");
    } else {
      addScrapMutation.mutate(id);
      // console.log("click2");
    }
    lastClickedTimeRef.current = Date.now();
    // console.log("toggle", scrappedAction);
  };

  // console.log(scrappedAction);
  // console.log("scrapData", currentScrapData);
  // console.log("id", id);
  return (
    <ScrapButton onClick={toggleScrap}>
      {currentScrapData?.scrapped || scrappedAction ? (
        <Icon
          component={BsFillBookmarkFill}
          style={{ color: " #ef902a", width: "20px", height: "20px" }}
        />
      ) : (
        <Icon
          component={BsBookmark}
          style={{ color: " #ef902a", width: "20px", height: "20px" }}
        />
      )}
    </ScrapButton>
  );
};

export default Scrap;
