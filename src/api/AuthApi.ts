import axios, { AxiosResponse } from "axios";
import { setUserInfo } from "../redux/modules/Modules";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";

interface NewUser {
  useremail: string;
  password: string;
  pwCheck: string;
  nickname: string;
  userName: string;
  phonenumber: string;
}

interface User {
  useremail: string;
  password: string;
}

interface AxiosCustomHeaders {
  access: string;
  refresh: string;
  [header: string]: string;
}

interface CustomAxiosResponse extends AxiosResponse {
  headers: AxiosCustomHeaders;
}

// 회원가입
export const Register = async (newuser: NewUser) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/signup`,
      newuser,
      { headers: { withCredentials: true } }
    );
    // console.log("resdata", data);
    return data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      alert(e.response.data.msg);
    }
  }
};

//로그인
export const UserCheck = async (user: User): Promise<void> => {
  try {
    const response: CustomAxiosResponse = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      user
    );

    const access = response.headers.access;
    const refresh = response.headers.refresh;

    if (access && refresh) {
      localStorage.setItem("Access", access);
      localStorage.setItem("Refresh", refresh);
    }
  } catch (error) { 
    // console.log(error); 
    if (axios.isAxiosError(error) && error.response?.status === 500) { 
      throw new Error('Login failed');
    }
  }
};

//유저프로필 요청
export const CheckuserInfo = async (dispatch: Dispatch) => {
  try {
    const access = localStorage.getItem("Access");
    const refresh = localStorage.getItem("Refresh");
    const currentUserToken = {
      headers: {
        Access: `${access}`,
        Refresh: `${refresh}`,
      },
    };
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/auth/mypage`,
      currentUserToken
    );
    // console.log("API response:", response);
    if (response.status === 200) {
      // console.log("API response is successful");
      dispatch(setUserInfo(response.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// 로그인 여부 인증
export const LoginStatus = async () => {
  const accesstoken = localStorage.getItem("Access");
  const refreshtoken = localStorage.getItem("Refresh");
  if (!accesstoken || !refreshtoken) return false;
  try {
    const currentUserToken = {
      headers: {
        Access: `${accesstoken}`,
        Refresh: `${refreshtoken}`,
      },
    };
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/auth/mypage`,
      currentUserToken
    );
    // console.log(response);
    if (response.status === 200) {
      return true;
    } else {
      // console.log("인증 실패");
      alert("인증 실패");
      return false;
    }
  } catch (error) {
    // console.log(error);
    alert("로그인유효성검사 실패");
    return false;
  }
};
