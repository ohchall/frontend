import axios from "axios";

const access = localStorage.getItem("Access");
const refresh = localStorage.getItem("Refresh");

const headersConfig = {
  headers: {
    Access: `${access}`,
    Refresh: `${refresh}`,
  },
};
export const getCommunityPost = async (socialPostId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/${socialPostId}`,
    headersConfig
  );
  return response.data;
};

export const deleteCommunityPost = async (socialPostId: string) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/socialPost/${socialPostId}`,
      headersConfig
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting community post:", error);
    throw error;
  }
};

export const getCommunityComments = async (socialPostId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/comment/${socialPostId}`,
    headersConfig
  );
  return response.data;
};

export const addCommunityComment = async (
  socialPostId: string,
  commentContent: string
): Promise<Comment> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/socialPost/comment/${socialPostId}`,
      { content: commentContent },
      headersConfig
    );
    if (response.data) {
      return response.data as Comment;
    }
    throw new Error("댓글을 추가하지 못했습니다.");
  } catch (error) {
    console.error("Error adding community comment:", error);
    throw error;
  }
};

export const deleteCommunityComment = async (socialCommentId: string) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/socialPost/comment/${socialCommentId}`,
      headersConfig
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting community comment:", error);
    throw error;
  }
};
