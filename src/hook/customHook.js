import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const getCrewPostData = async () => {
  const { data } = await axios.get("http://localhost:3000/api/crew");
  return data;
}

export const useCrewPostData = () => {
  return useQuery("crewData", getCrewPostData);
}