import axios from "axios";

const CommunityApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const getCommunityPost = async (id) => {
  const response = await CommunityApi.get(`/posts/${id}`);
  return response.data;
};

export const getCommunityComments = async (postId) => {
  const response = await CommunityApi.get(`/comments?postId=${postId}`);
  return response.data;
};

export const addCommunityComment = async (comment) => {
  const response = await CommunityApi.post("/comments", comment);
  return response.data;
};

export const deleteCommunityComment = async (id) => {
  const response = await CommunityApi.delete(`/comments/${id}`);
  return response.data;
};
