import React from "react";
import Todo from "../components/Todo";
import Calendar from "../components/Calendar";
import MyCrew from "../components/MyCrew";
import { styled } from "styled-components";

function MyPage() {
  return (
    <MyPageBlock>
      <div>My Page</div>
      <Todo></Todo>
      <div>
        <MyCrew />
      </div>
    </MyPageBlock>
  );
}

export default MyPage;
const MyPageBlock = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;