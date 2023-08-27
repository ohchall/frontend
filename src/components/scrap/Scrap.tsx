import { useState, MouseEvent } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

const Scrap = () => {
  const [scrapPost, setScrapPost] = useState<boolean>(false);

  interface IconProps {
    component: React.ComponentType<any>;
    style: React.CSSProperties;
  }

  const Icon = ({ component: Component, style }: IconProps) => (
    <Component style={style} />
  );

  // const toggleHeart = async(event) => {
  //   event.stopPropagation();
  //   setHeart((prevHeart) => !prevHeart);
  //   try {
  //     await useLike.mutate();
  //     console.log("좋아요 성공");
  //   } catch (error) {
  //     console.error("좋아요 실패:", error);
  //   }
  // };
  const toggleScrap = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setScrapPost((prevscrap) => !prevscrap);
  };
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
