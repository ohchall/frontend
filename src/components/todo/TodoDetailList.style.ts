import { styled } from "styled-components";

export const TodosContainer = styled.div`
  background-color: #f3f3f3;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;

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
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    > h2 {
      line-height: 2;
      height: 40px;
      font-size: 22px;
      font-weight: bold;
      margin-left: 25px;
      background-color: #f3f3f3;
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
  background-color: #f3f3f3;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 0;
  height: 40%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TodoCompleteListContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  width: 100%;
  background-color: #f3f3f3;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 0;
  height: 40%;
  /* margin-bottom: 40px; */
  /* padding-bottom: 40px; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TodosList = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  max-height: 215px;
  min-height: 0;
  width: 400px;
`;

type TodosBoxProps = {
  $isComplete?: boolean;
};

export const TodosBox = styled.div<TodosBoxProps>`
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
      white-space: nowrap;
      max-width: 285px;
    }
    > h3 {
      font-size: 13px;
      color: #454545;
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
      height: 16px;
      padding-left: 2px;
    }
  }
`;

type DayColorProps = {
  $isCurrent: boolean | undefined;
  $isComplete: boolean | undefined;
};

export const DayColor = styled.span<DayColorProps>`
  font-size: 11px;
  margin-right: 2px;
  border-radius: 100%;
  padding: 3px 5px;
  background-color: ${(props) =>
    props.$isComplete === true
      ? "#transparent"
      : props.$isCurrent === true
      ? "#93C3BC"
      : "#F3F3F3"};
  text-decoration-thickness: 2px;
`;

export const MoreButton = styled.button`
  position: relative;
  border: 0;
  background-color: transparent;
  left: -5px;
  bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

type MoreButtonContainerProps = {
  visible: string;
};

export const MoreButtonContainer = styled.div<MoreButtonContainerProps>`
  position: absolute;
  right: 8px;
  top: 35px;
  background: white;
  border-radius: 5px;
  padding: 1px;
  display: ${(props) => (props.visible ? "block" : "none")};
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
      background-color: #f3f3f3;
      cursor: pointer;
    }
  }
`;
