import axios from "axios";

// 회원가입
export const Register = async (newuser) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL }/signup`,
      newuser,
      { headers: { withCredentials: true } }
    );
    console.log("resdata", data);
    return data;
  } catch (e) {
    alert(e.response.data.msg);
  }
};

//로그인
export const UserCheck = async (user) => {
  await axios
    .post(`${process.env.REACT_APP_SERVER_URL }/login`, user)
    .then((response) => {
      const access = response.headers.get("Access");
      const refresh = response.headers.get("Refresh");
      localStorage.setItem("Access", access);
      localStorage.setItem("Refresh", refresh);
      return console.log("response", response);
    })
    .catch((error) => {
      console.log("an error occurred:", error.response);
      alert(error.response.data.msg);
    });
};

//유저프로필 요청
export const CheckuserInfo = async () => {
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
      `${process.env.REACT_APP_SERVER_URL }/auth/mypage`,
      currentUserToken
    );
    // console.log("API response:", response);
    if (response.status === 200) {
      // console.log("API response is successful");
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
      `${process.env.REACT_APP_SERVER_URL }/auth/mypage`,
      currentUserToken
    );
    // console.log(response);
    if (response.status === 200) {
      return true;
    } else {
      console.log("인증 실패");
      alert("인증 실패");
      return false;
    }
  } catch (error) {
    // console.log(error);
    alert("로그인유효성검사 실패");
    return false;
  }
};
