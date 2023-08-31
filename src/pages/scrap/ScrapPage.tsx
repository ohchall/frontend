import { useQuery } from "@tanstack/react-query";
import { getScrap } from "../../api/CrewApi";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../components/Skeleton";
import { CrewList } from "../../redux/modules/Modules";
import {
  ImageWrapper,
  Overview,
  R9dCrew,
  TitleContainer,
  ScrapPageBlock,
} from "./ScrapPage.style";
import Scrap from "../../components/scrap/Scrap";

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

  // console.log(data);
  return (
    <>
      <ScrapPageBlock>
        {data?.length > 0 &&
          data.map((post: CrewList) => {
            return (
              <R9dCrew
                key={post.crewRecruitmentId}
                onClick={() => onClickCrew(post.crewRecruitmentId)}
              >
                <ImageWrapper>
                  <img
                    src={post.image && post.image[0] ? post.image[0] : ""}
                    alt=""
                  />
                </ImageWrapper>

                <Overview>
                  <div>
                    <TitleContainer>
                      <p>{post.title}</p>
                    </TitleContainer>

                    <Scrap
                      id={post.crewRecruitmentId}
                      currentScrapData={post}
                    />
                  </div>

                  <p>{post.exerciseKind} / {post.location.split(' ').slice(0, 2).join(' ')}</p>
                </Overview>
              </R9dCrew>
            );
          })}

        {isLoading ? <Skeleton /> : ""}
        {error ? <h3 style={{ color: "red" }}>결과가 없습니다</h3> : ""}
      </ScrapPageBlock>
    </>
  );
};

export default ScrapPage;
