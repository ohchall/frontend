import { useCallback, useEffect, useRef, ReactNode, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  CommunityPersonMax,
  CommunityPostReContent,
  CommunityPostReImg,
  CommunityPostRecent,
  CommunityPostUpLoad,
  CommunityPosts,
  CommunityPostsRecents,
} from "./Community.style";
import CommunityModal from "./CommunityModal";
import debounce from "lodash/debounce";

interface SocialPostData {
  socialPostId: `socialPostId`;
  images?: string[];
  content: string;
  nickname: string;
}
interface SocialPostDataResponse {
  data: {
    socialList: SocialPostData[];
  };
  last: boolean;
}

const Community: React.FC = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [createdAt] = useState("");

  // const communitycontent = crew.content.split(" ")";

  const { data, isSuccess, hasNextPage, fetchNextPage } =
    useInfiniteQuery<SocialPostDataResponse>(
      ["socialPostData"],
      ({ pageParam = 1 }) =>
        axios.get(
          `${process.env.REACT_APP_SERVER_URL}/socialPost/thumbnailSocialPost`,
          {
            params: {
              page: pageParam,
              size: 2,
              sortBy: "createdAt",
              isAsc: false,
            },
            headers: {
              Access: `${access}`,
              Refresh: `${refresh}`,
            },
          }
        ),
      {
        getNextPageParam: (lastPage, totalPage) => {
          return totalPage[totalPage.length - 1].last
            ? undefined
            : totalPage.length + 1;
        },
      }
    );
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;

      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  const debouncedHandleObserver = debounce(handleObserver, 300);

  useEffect(() => {
    const element = observerRef.current;
    if (!element) {
      return;
    }

    const option: IntersectionObserverInit = { threshold: 0 };
    const observer = new IntersectionObserver(debouncedHandleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, debouncedHandleObserver]);

  const getContentPreview = (content: string) => {
    const windowWidth = window.innerWidth;
    const wordCount = windowWidth <= 500 ? 4 : 8;
    const splitContent = content.split(" ");
    return splitContent?.slice(0, wordCount).join(" ");
  };

  const navigate = useNavigate();

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
  };
 
  const navigateDetail = (socialPostId: string) => {
    navigate(`/socialPost/${socialPostId}`);
  };

  const flattenedCommunityList = data?.pages.flatMap(
    (page) => page.data.socialList
  );

  return (
    <CommunityPosts>
      <CommunityPostUpLoad>
        <CommunityModal isOpen={isOpen} closeModal={closeModal} />

        {isSuccess && data && (
          <>
            <CommunityPostsRecents>
              {flattenedCommunityList &&
                flattenedCommunityList.length > 0 &&
                flattenedCommunityList.map((crew) => {
                  const selectedContent = getContentPreview(crew?.content);

                  return (
                    <CommunityPostRecent
                      key={crew?.socialPostId}
                      onClick={() => navigateDetail(crew?.socialPostId)}
                    >
                      <CommunityPostReImg>
                        <img
                          src={
                            crew && crew.images && crew.images.length > 0
                              ? crew.images[0]
                              : ""
                          }
                          alt=""
                        />
                      </CommunityPostReImg>
                      <CommunityPostReContent>
                        <div className="crewPostTitle">
                          <p>{selectedContent}</p>
                        </div>
                        <CommunityPersonMax>
                          <div className="nickname">
                            <div className="nickProfile">
                              <p>{crew?.nickname[0]}</p>
                            </div>
                            <p className="nickId">{crew?.nickname}</p>
                          </div>
                        </CommunityPersonMax>
                      </CommunityPostReContent>
                    </CommunityPostRecent>
                  );
                })}
            </CommunityPostsRecents>
            <div className="loader" ref={observerRef}>
              {hasNextPage ? "Loading..." : "No search left"}
            </div>
          </>
        )}
        <div className="communityPostButton" onClick={modalHandler}>
          <p>+</p>
        </div>
      </CommunityPostUpLoad>
    </CommunityPosts>
  );
};

export default Community;
