import React, { useEffect, useState } from "react";

import TodoList from "../components/todo/TodoList";
import MyProfile from "../components/myprofile/MyProfile";
import MyCrews from "../components/MyCrews";
import { styled } from "styled-components";
import { CheckuserInfo } from "../api/AuthApi";

function MyPage() {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    // console.log("triggered");
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo();
      setLoggedin(isUserLoggedIn);
    };
    if (access && refresh) {
      getUserInfo();
    }
  }, [access, refresh]);

  return (
    <MyPageSection>
      {loggedin ? <MyProfile /> : null}
      <TodoList />
      <MyCrews />
    </MyPageSection>
  );
}
export default MyPage;

const MyPageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  & h1 {
    font-size: 20px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
