import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useAddCrewMutation = () => {
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
    ["crewData"],
    async (formData: FormData) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/crew`,
        formData,
        currentUserToken
      );
      return data;
    }
  );
};
export const useUpdateCrewMutation = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const {id}=useParams()
  const currentUserToken = {
    headers: {
      Access: `${access}`,
      Refresh: `${refresh}`,
      "Content-Type": "multipart/form-data",
    },
  };

  return useMutation<any, any, FormData>(
    ["crewData"],
    async (formData: FormData) => {
      const { data } = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/crew/${id}`,
        formData,
        currentUserToken
      );
      return data;
    }
  );
};