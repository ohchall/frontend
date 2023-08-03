import axios from 'axios';

export const getCrews = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/posts`
  );
  return res;
}