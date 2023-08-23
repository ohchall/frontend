import { useState, MouseEvent } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const LikeButton = () => {
  const [heart, setHeart] = useState<boolean>(false);

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
  const toggleHeart = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setHeart((prevHeart) => !prevHeart);
  };
  return (
    <button
      style={{
        border: "none",
        background: "transparent",
      }}
      onClick={toggleHeart}
    >
      {heart ? (
        <AiFillHeart
          style={{ color: " #ef902a", width: "20px", height: "20px" }}
        />
      ) : (
        <AiOutlineHeart
          style={{ color: " #ef902a", width: "20px", height: "20px" }}
        />
      )}
    </button>
  );
};
export default LikeButton;
