import { useCallback, useEffect, useRef, ReactNode, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { FiChevronsRight } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  CrewPersonMax,
  CrewPostInfo,
  CrewPostRecent,
  CrewPostReContent,
  CrewPostReImg,
  CrewPosts,
  CrewPostsRecents,
  CrewPostUpLoad,
} from "./Community.style";
import CommunityModal from "./CommunityModal";

const Community = () => {
  const observerRef = useRef(null);
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCommunity = ({ pageParam = 1 }) =>
    axios.get(`${process.env.REACT_APP_MOCK_SERVER_URL}/community`, {
      params: {
        page: pageParam,
        size: 2,
        sortBy: "createPostDate",
        isAsc: false,
      },
    });

  const { data, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["communityData"],
    fetchCommunity,
    {
      getNextPageParam: (totalPage) => {
        if (totalPage && totalPage[totalPage.length - 1]) {
          return totalPage[totalPage.length - 1].last
            ? undefined
            : totalPage.length + 2;
        }
        return undefined;
      },
    }
  );

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerRef.current;
    if (!element) {
      return;
    }
    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  const addressSubstraction = (location) => {
    const parts = location.split(" ");
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1]}`;
    }
    return "";
  };

  const navigate = useNavigate();

  const navigateDetail = (id) => {
    navigate(`/communityDetail/${id}`);
  };

  const modalHandler = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isSuccess && !data) {
    return <div>Loading...</div>;
  }

  if (!isSuccess) {
    return <div>Error...</div>;
  }

  const flattenedCrewList = data?.pages.flatMap((page) => page.data);

  return (
    <CrewPosts>
      <CrewPostUpLoad>
        <h3>오운완 SNS</h3>
        <div className="crewPostButton" onClick={modalHandler}>
          <p>오늘의 운동을 사진으로 남겨주세요</p>
          <button onClick={modalHandler}>
            <FiChevronsRight />
          </button>
        </div>
        <CommunityModal isOpen={isOpen} closeModal={closeModal} />
        <CrewPostsRecents>
          {flattenedCrewList &&
            flattenedCrewList.length > 0 &&
            flattenedCrewList.map((crew) => (
              <CrewPostRecent
                key={crew.crewRecruitmentId}
                onClick={() => navigateDetail(crew.crewRecruitmentId)}
              >
                <CrewPostReImg>
                  <img
                    src={
                      crew.image?.length !== 0 &&
                      crew.image?.length !== undefined
                        ? crew.image
                        : ""
                    }
                    alt=""
                  />
                </CrewPostReImg>
                <CrewPostReContent>
                  <div className="crewPostTitle">
                    <p>{crew.title}</p>
                  </div>
                  <CrewPostInfo>
                    <div className="category">{crew.exerciseKind}</div>
                    <div>/</div>
                    <div className="location">
                      {addressSubstraction(crew.location)}
                    </div>
                  </CrewPostInfo>
                  <CrewPersonMax>
                    <div className="nickname">
                      <p>{crew.nickname}</p>
                    </div>
                  </CrewPersonMax>
                </CrewPostReContent>
              </CrewPostRecent>
            ))}
        </CrewPostsRecents>
        <div className="loader" ref={observerRef}>
          {fetchNextPage && hasNextPage ? "Loading..." : "No search left"}
        </div>
      </CrewPostUpLoad>
    </CrewPosts>
  );
};

export default Community;
