import React from "react";
import Todo from "../components/Todo";
import Calendar from "../components/Calendar";
import MyCrew from "../components/MyCrew";

function MyPage() {
  return (
    <>
      <div>My Page</div>
      <Todo></Todo>
      <div>
        <MyCrew />
      </div>
    </>
  );
}

export default MyPage;
