import React from "react";
import TodoList from "../components/todo/TodoList";
import MyProfile from "../components/myprofile/MyProfile";
import MyCrews from "../components/MyCrews";
import { styled } from "styled-components";


function MyPage() {
  return (
    <MyPageSection>
      <MyProfile />
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

