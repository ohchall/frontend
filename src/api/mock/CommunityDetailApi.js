import axios from "axios";

export const getCommunityPost = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/${id}`
  );
  return response.data;
};

export const getCommunityComments = async (postId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/comments?postId=${postId}`
  );
  return response.data;
};

export const addCommunityComment = async (comment) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/comments`,
    comment
  );
  return response.data;
};

export const deleteCommunityComment = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/comments/${id}`
  );
  return response.data;
};
