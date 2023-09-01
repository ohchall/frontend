import { useCallback, useEffect, useRef, ReactNode,useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FiChevronsRight } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {
  CrewPersonMax,
  CrewPostRecent,
  CrewPostReContent,
  CrewPostReImg,
  CrewPosts,
  CrewPostsRecents,
  CrewPostUpLoad,
} from "./Community.style";
import CommunityModal from './CommunityModal';

interface SocialPostData {
  socialPosttId: `socialPosttId`
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
  const observerRef = useRef<HTMLDivElement | null>(null)
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [createdAt] = useState('');
  const { data, isSuccess, hasNextPage, fetchNextPage } = useInfiniteQuery< SocialPostDataResponse>(
    ['socialPostData'],
    ({ pageParam = 1 }) => axios.get(`${process.env.REACT_APP_SERVER_URL}/socialPost/thumbnailSocialPost`, {
      params: {
        page: pageParam,
        size: 2,
        sortBy: 'createdAt',
        isAsc:false,
      },
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }),
    {
      getNextPageParam: (lastPage, totalPage) => {
        return totalPage[totalPage.length - 1].last ? undefined : totalPage.length + 2;
      }      
    }
  );

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);
  
  useEffect(() => {
    const element = observerRef.current;
    if (!element) {
      return;
    }
    
    const option: IntersectionObserverInit = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage,handleObserver]);
 


  const navigate = useNavigate();
 

  const modalHandler = ()=> {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  if (isSuccess && !data) {
    return <div>Loading...</div>;
  };

  if (!isSuccess) {
    return <div>Error...</div>;
  };
 
  const navigateDetail=(id: string)=>{
  navigate(`/socialPost/${id}`)
  }
  const flattenedCommunityList = data?.pages.flatMap(page => page.data.socialList);
  console.log(flattenedCommunityList)
  

  return (
    <CrewPosts>
    <CrewPostUpLoad>
      <h3>오운완 SNS</h3>
      
      <CommunityModal isOpen={isOpen} closeModal={closeModal} />
      {isSuccess && data && (
      <>
      <CrewPostsRecents>
      {flattenedCommunityList && flattenedCommunityList.length > 0 && flattenedCommunityList.map((crew) => (
        <CrewPostRecent key={crew?.socialPosttId} onClick={() => navigateDetail(crew?.socialPosttId)}>
          <CrewPostReImg>
          <img src={ crew && crew.images && crew.images.length > 0 ? crew.images[0] : "" }  alt=""/>


          </CrewPostReImg>
          <CrewPostReContent>
            <div className="crewPostTitle">
            <p>{crew?.content}</p>
            </div>
            <CrewPersonMax>
              <div className="nickname">
                  <p>{crew?.nickname}</p>
                </div>
            </CrewPersonMax>
          </CrewPostReContent>
        </CrewPostRecent>
      ))}
      </CrewPostsRecents>

      <div className='loader' ref={observerRef}>
      {hasNextPage ? 'Loading...' : 'No search left'}
    </div>
      </>
    )}
      <div className="crewPostButton" onClick={modalHandler}>
        <p>오늘의<br/> 일지+</p>
        <button onClick={modalHandler}>
        <FiChevronsRight/>
        </button>
      </div>
    </CrewPostUpLoad>
  </CrewPosts>
  );
};

export default Community;