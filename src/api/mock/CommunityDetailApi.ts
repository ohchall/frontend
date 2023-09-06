import axios from "axios";

export const getCommunityPost = async (socialPostId: string) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/${socialPostId}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return response.data;
};

export const deleteCommunityPost = async (socialPostId: string) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/${socialPostId}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return response.data;
};

export const getCommunityComments = async (socialPostId: string) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/comment/${socialPostId}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return response.data;
};

export const addCommunityComment = async (
  socialPostId: string,
  commentContent: string
): Promise<Comment> => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/comment/${socialPostId}`,
    { content: commentContent },
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return response.data as Comment;
};

export const deleteCommunityComment = async (socialCommentId: string) => {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/socialPost/comment/${socialCommentId}`,
    {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    }
  );
  return response.data;
};
