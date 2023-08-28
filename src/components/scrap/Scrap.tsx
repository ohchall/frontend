import { useMutation } from "@tanstack/react-query";
import { useState, MouseEvent } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { addScrap } from "../../api/CrewApi";

interface ScrapProps {
  id: number;
}

interface IconProps {
  component: React.ComponentType<any>;
  style: React.CSSProperties;
}

const Scrap: React.FC<ScrapProps> = ({ id }) => {
  const [scrapPost, setScrapPost] = useState<boolean>(false);

  const Icon = ({ component: Component, style }: IconProps) => (
    <Component style={style} />
  );

  const mutation = useMutation(addScrap, {
    onSuccess: () => {
      // console.log("scrapped");
    },
  });

  const toggleScrap = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setScrapPost((prevscrap) => !prevscrap);
    mutation.mutate(id);
  };
  // console.log("id", id);
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
      }}
      onClick={toggleScrap}
    >
      {scrapPost ? (
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
