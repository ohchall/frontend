import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, MouseEvent } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { addScrap } from "../../api/CrewApi";
import { useNavigate } from "react-router-dom";

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
  const Icon = ({ component: Component, style }: IconProps) => (
    <Component style={style} />
  );

  const addScrapMutation = useMutation(addScrap, {
    onSuccess: () => {
      setScrappedAction(true);
      queryClient.invalidateQueries(["scraps"]);
    },
    onError: () => {
      navigate("/login");
    },
  });

  const removeScrapMutation = useMutation(addScrap, {
    onSuccess: () => {
      setScrappedAction(false);
      queryClient.invalidateQueries(["scraps"]);
      // console.log("scrapped");
    },
  });

  const toggleScrap = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (currentScrapData?.scrapped || scrappedAction) {
      removeScrapMutation.mutate(id);
    } else {
      addScrapMutation.mutate(id);
    }
  };

  // console.log("scrapData", currentScrapData);
  // console.log("id", id);
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
      }}
      onClick={toggleScrap}
    >
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
    </button>
  );
};

export default Scrap;
