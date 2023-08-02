import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MyCrew = () => {
  const fetchCrewPosts = async () => {
    const res = await axios.get('http://localhost:4000/crew');
    return res.data;
  }

  const { data, status } = useQuery('crewPosts', fetchCrewPosts);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error fetching data</div>;

  return (
   <>
     <div className="crewPostUpload">
      <button>크루 post 업로드 버튼</button>
     </div>
      <div className="crewPosts">
        <div className="crewPostList">
          <button>More List</button>
        </div>
        <div className="crewPosts">
          {data.map((post) => (
            <div className="crewPost" key={post.id}>
              <img src={post.image} alt="" />
              <div className="crewPostsText">
                <strong>{post.title}</strong>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>
     </div>
   </>
   
  )
}

export default MyCrew