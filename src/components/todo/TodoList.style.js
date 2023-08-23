import { styled } from "styled-components";

export const TodosContainer = styled.div`
  background-color: #eeeeee;
  margin-bottom: 20px;
  width: 100%;

  > button {
    background-color: #dadada;
    border: none;
    width: 380px;
    height: 50px;
    border-radius: 10px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    padding-top: 5px;
    font-size: 30px;
    border: 1px solid transparent;

    &:hover {
      font-size: 31px;
      cursor: pointer;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }
  }
  .TodolsitTitle {
    display: flex;
    justify-content: space-between;

    > h2 {
      line-height: 2;
      height: 40px;
      font-size: 22px;
      font-weight: bold;
      margin-left: 15px;
      background-color: #eeeeee;
    }

    > p {
      line-height: 3;
      height: 40px;
      margin-right: 15px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const CalendarCenterBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const TodoListContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  width: 100%;

  background-color: #eeeeee;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE and Edge */
  padding: 0 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TodosList = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 215px;
  min-height: 0;
  width: 400px;
`;

export const TodosBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin: 5px 0;
  min-height: 100px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  background-color: ${(props) => (props.isComplete ? "#BBBBBB" : "white")};
  text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
  text-decoration-thickness: 2px; // 줄 굵기 설정

  &:hover {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  > input {
    display: flex;
    width: 20px;
    height: 20px;
    margin: 15px;
  }
  .TodolistContent {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 290px;

    > h2 {
      font-size: 14.5px;
      font-weight: bold;
      color: #000000;
      text-decoration: ${(props) =>
        props.$isComplete ? "line-through" : "none"};
      text-decoration-thickness: 2px;
      white-space: nowrap;
      max-width: 285px;
    }
    > h3 {
      font-size: 13px;
      color: #454545;
      text-decoration: ${(props) =>
        props.$isComplete ? "line-through" : "none"};
      text-decoration-thickness: 2px;
      height: 28px;
      display: flex;
      align-items: center;
      text-align: left;
      max-width: 285px;
      overflow-wrap: break-word;
      white-space: normal;
      word-break: break-all;
    }
    > h4 {
      font-size: 13px;
      color: #454545;
      text-decoration: ${(props) =>
        props.$isComplete ? "line-through" : "none"};
      text-decoration-thickness: 2px;
      height: 16px;
      padding-left: 2px;
    }
  }
`;

export const DayColor = styled.span`
  font-size: 11px;
  margin-right: 2px;
  border-radius: 100%;
  padding: 3px 5px;
  background-color: ${(props) =>
    props.$isComplete
      ? "#transparent"
      : props.$isCurrent
      ? "#93C3BC"
      : "#EEEEEE"};
  line-height: 1;
  text-decoration: ${(props) => (props.$isComplete ? "line-through" : "none")};
  text-decoration-thickness: 2px;
`;

export const MoreButton = styled.button`
  position: relative;
  border: 0;
  background-color: transparent;
  left: 0px;
  bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const MoreButtonContainer = styled.div`
  position: absolute;
  right: 3px;
  top: 35px;
  background: white;
  border-radius: 5px;
  padding: 1px;
  display: ${(props) => (props.visible ? "none" : "block")};
  border: 1px solid black;

  > button {
    font-size: 10px;
    width: 30px;
    border: 0;
    border-radius: 3px;
    padding: 5px 0;
    background-color: transparent;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: #eeeeee;
      cursor: pointer;
    }
  }
`;
