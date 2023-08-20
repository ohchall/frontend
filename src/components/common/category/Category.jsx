import { useEffect, useState } from "react";

import { CategoryBlock } from "./Category.style";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../../Skeleton";
import { setDisplayRemainingComponents } from "../../../redux/modules/Modules";
import useSearch from "../../../hook/useSearch";
function Category() {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const navigate = useNavigate();
  const categories = [
    "전체",
    "러닝",
    "웨이트",
    "자전거",
    "요가",
    "필라테스",
    "크로스핏",
    "골프",
    "테니스",
  ];
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(""); // 선택된 카테고리

  const { searchResult, loading, error, search } = useSearch();

  useEffect(() => {
    dispatch(setDisplayRemainingComponents(searchResult.length === 0));
  }, [searchResult, dispatch]);

  const onClickCategory = (pickedCategory) => {
    setSelectedCategory(pickedCategory);
    search(pickedCategory);
  };

  const onClickCrew = (itemId) => {
    if (access && refresh !== "") {
      navigate(`/crew/${itemId}`);
    } else {
      navigate("/login");
    }
  };
  const displayRemainingComponents = useSelector(
    (state) => state.display.displayRemainingComponents
  );

  // console.log(selectedCategory);
  // console.log(category);
  // console.log(searchResult);

  return (
    <CategoryBlock>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => onClickCategory(category)}
            style={{
              backgroundColor: selectedCategory === category ? "orange" : "",
            }}
          >
            {category}
          </button>
        );
      })}

      {!displayRemainingComponents && (
        <CategoryContents>
          {searchResult?.data?.crewList?.length > 0 &&
            searchResult.data.crewList.map((post) => {
              return (
                <R9dCrew
                  key={post.crewRecruitmentId}
                  onClick={() => onClickCrew(post.crewRecruitmentId)}
                >
                  <ImageWrapper>
                    <img
                      src={
                        post.length !== 0 && post.image?.length !== undefined
                          ? post.image[0]
                          : ""
                      }
                      alt=""
                    />
                  </ImageWrapper>

                  <Overview>
                    <div>
                      <TitleContainer>
                        <p>{post.title}</p>
                      </TitleContainer>

                      {/* <LikeButton /> */}
                    </div>

                    <p>{post.exercisekind} / 서울 중구</p>
                  </Overview>
                </R9dCrew>
              );
            })}
        </CategoryContents>
      )}
      {loading ? <Skeleton /> : ""}

      {error ? alert("입력하신 키워드를 찾지 못하였습니다.") : ""}
    </CategoryBlock>
  );
}

export default Category;
const ImageWrapper = styled.div`
  width: 100%;
  height: 259px;
  border-radius: 25px 25px 0 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

const Overview = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 16px;
  border-radius: 0 0 25px 25px;
  background-color: #f3f3f3;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  & > p {
    font-size: 13px;
  }

  & > div > span > svg {
    font-size: 20px;
  }
`;

const TitleContainer = styled.div`
  & > p {
    display: inline-block;
    font-size: 18px;
  }

  & > span {
    display: inline-block;
  }
`;

const R9dCrew = styled.div`
  width: 398px;
  height: 232px;
  cursor: pointer;

  & ${ImageWrapper} {
    height: 160px;
  }

  & ${Overview} {
    height: 72px;
  }
`;
const CategoryContents = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;
