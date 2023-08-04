import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFetchCrew } from '../api/CrewUploadApi';


const MyCrew = () => {
  const { data, isLoading, isError, refetch } = useFetchCrew();
  console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

 

  return (
   <>
     <div className="crewPostUpload">
      <button>크루 post 업로드 버튼</button>
     </div>
      <div className="crewPosts">
        <div className="crewPostList">
          <button>More List</button>
        </div>

     </div>
   </>
   
  )
}

export default MyCrew