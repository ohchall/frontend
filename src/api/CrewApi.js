import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

// queryKey = crews
export const getCrews = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew?page=1&size=5&sortBy=createPostDate&isAsc=false`
  );
  return res;
};

// queryKey = crew
export const getCrew = async (id) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew/${id}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return res;
};

// queryKey = crew
export const deleteCrew = async (id) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const res = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/crew/${id}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return res;
};

// queryKey = crewData
export const useFetchCrew = () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const currentUserToken = {
    headers: {
      Access: `${access}`,
      Refresh: `${refresh}`,
    },
  };
  return useQuery(["crewData"], async () => {
    // queryKey를 배열로 변경
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/crew/more`,
      currentUserToken
    );
    return data;
  });
};

// queryKey = crewData
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

  return useMutation(["crewData"], async (formData) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/crew`,
      formData,
      currentUserToken
    );
    return data;
  });
};

// queryKey = crewComments
export const getCrewComments = async (crewRecruitmentId) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew/${crewRecruitmentId}/comments`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return res;
};

// queryKey = crewComments
export const addCrewComment = async (newComment) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");

  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/crew/${newComment.crewRecruitmentId}/comments`,
    newComment.data,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
};

// queryKey = crewComments
export const editCrewComment = async (editComment) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");

  await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/crew/${editComment.crewRecruitmentId}/comments/${editComment.commentId}`,
    editComment.data,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
};

// queryKey = crewComments
export const deleteCrewComment = async (deleteComment) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");

  await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/crew/${deleteComment.crewRecruitmentId}/comments/${deleteComment.commentId}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
};

// queryKey = crewApplicants
export const getCrewApplicants = async (applicantsObject) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/joinCrew/${applicantsObject.crewRecruitmentId}/${applicantsObject.isAccepted}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return res;
};

// queryKey = crewApplicants
export const approveCrewApplicant = async (approveObject) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");

  await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/joinCrew/detail/${approveObject.crewRecruitmentId}?applyerEmail=${approveObject.applyerEmail}`,
    {},
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
};

// queryKey = crewParticipants
export const getCrewParticipants = async (participantsObject) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/joinCrew/${participantsObject.crewRecruitmentId}/${participantsObject.isAccepted}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return res;
};

// queryKey = crewApplicant
export const joinCrew = async (crewRecruitmentId) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");

  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/crew/${crewRecruitmentId}`,
    {},
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
};

//scrap
export const addScrap = async (crewRecruitmentId) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  // console.log(access, refresh, crewRecruitmentId);
  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/crew/${crewRecruitmentId}/scrap`,
    crewRecruitmentId,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
        withCredentials: true,
      },
    }
  );
};

export const getScrap = async () => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  // console.log(access, refresh, crewRecruitmentId);
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew/scrap`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  const modifiedData = res.data.map((item) => ({ ...item, scrapped: true }));
  // console.log(modifiedData);
  return modifiedData;
};
