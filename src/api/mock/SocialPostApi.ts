import { useQuery, UseQueryResult, useMutation, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';


export const useCommunityMutation = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const currentUserToken = {
    headers: {
      Access: `${access}`,
      Refresh: `${refresh}`,
      "Content-Type": "multipart/form-data",
    },
  };

  return useMutation<any, any, FormData>(
    ["socialPostData"],
    async (formData: FormData) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/socialPost`,
        formData,
        currentUserToken
      );
      return data;
    }
  );
};
