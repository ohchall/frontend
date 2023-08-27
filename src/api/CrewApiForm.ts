import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import secureLocalStorage from "react-secure-storage";

export const useAddCrewMutation = () => {
  const access = secureLocalStorage.getItem("Access");
  const refresh = secureLocalStorage.getItem("Refresh");
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
