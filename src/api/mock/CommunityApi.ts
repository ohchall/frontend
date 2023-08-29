import { useQuery, UseQueryResult, useMutation, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';

interface Crew {
  title: string;
  content: string;
  crewName: string;
  location: string;
  usersLocation: string;
  exerciseDate: string;
  exerciseKind: string;
  totalNumber: number;
  images: File[];
  time: string;
}

export const useFetchCommunity = (): UseQueryResult<Crew[], unknown> => {
  return useQuery<Crew[], unknown>(["crewData"], async () => {
    const { data } = await axios.get<Crew[]>(
      `${process.env.REACT_APP_MOCK_SERVER_URL}/community`
    );
    return data;
  });
};

export const useCommunityMutation = (): UseMutationResult<any, unknown, Crew, unknown> => {
  return useMutation<Crew, unknown, Crew, unknown>({
    mutationFn: (crew: Crew) => {
      return axios.post(`${process.env.REACT_APP_MOCK_SERVER_URL}/community`, crew);
    },
  });
};
