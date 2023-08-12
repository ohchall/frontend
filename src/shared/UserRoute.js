// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// import axios from "axios";

// const UserRoute = ({ element }) => {
//   const navigate = useNavigate();
//   const [authentication, setAuthentication] = useState(false);

//   useEffect(() => {
//     const LoginStatusCheck = async () => {
//       const loginStatus = await LoginStatus();
//       setAuthentication(loginStatus);
//       if (!loginStatus) {
//         navigate("/login");
//       }
//     };
//     LoginStatusCheck();
//   }, [navigate]);

//   const LoginStatus = async () => {
//     const accesstoken = localStorage.getItem("Access");
//     const refreshtoken = localStorage.getItem("Refresh");
//     if (!accesstoken || !refreshtoken) return false;
//     try {
//       const userInfo = await CheckUserInfo({ accesstoken, refreshtoken });
//       console.log(userInfo);
//       return userInfo ? true : false;
//     } catch {
//       alert("로그인유효성검사 실패");
//       return false;
//     }
//   };

//   const CheckUserInfo = async ({ accesstoken, refreshtoken }) => {
//     const currentUserToken = {
//       headers: {
//         Access: `${accesstoken}`,
//         Refresh: `${refreshtoken}`,
//       },
//     };
//     console.log(currentUserToken);
//     await axios
//       .get(`https://api.ohchall.shop/api/auth/mypage`, currentUserToken)
//       .then((response) => {
//         if (response.status === 200) {
//           console.log(response.status);
//           return true;
//         }
//       })

//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   console.log(authentication);
//   return authentication ? element : console.log("인증 실패");
// };
// export default UserRoute;
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const UserRoute = ({ element }) => {
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    const LoginStatusCheck = async () => {
      const loginStatus = await LoginStatus();
      setAuthentication(loginStatus);
      if (!loginStatus) {
        navigate("/login");
      }
    };
    LoginStatusCheck();
  }, [navigate]);

  const LoginStatus = async () => {
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
        "https://api.ohchall.shop/api/auth/mypage",
        currentUserToken
      );

      console.log(response);
      if (response.status === 200) {
        setAuthentication(true);
        return true;
      } else {
        console.log("인증 실패");
        setAuthentication(false);
        return false;
      }
    } catch (error) {
      console.log(error);
      alert("로그인유효성검사 실패");
      setAuthentication(false);
      return false;
    }
  };

  return authentication ? element : null;
};

export default UserRoute;
