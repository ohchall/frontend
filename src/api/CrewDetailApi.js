import axios from 'axios';

export const getCrew = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/crew/${id}`
  );
  return res;
}