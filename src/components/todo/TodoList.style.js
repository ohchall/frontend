import { styled } from "styled-components";

export const TodosContainer = styled.div`
  background-color: #eeeeee;
  margin-bottom: 200px; /*화면 보는용*/
  /* padding-bottom: 10px; */

  > button {
    background-color: white;
    border: none;
    width: 400px;
    height: 50px;
    border-radius: 10px;
    margin: 15px 10px 15px;
    padding: 10px 0 20px 0;
    font-size: 30px;
    border: 1px solid transparent;

    &:hover {
      font-size: 32px;
      cursor: pointer;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
  > h2 {
    line-height: 2;
    height: 40px;
    font-size: 22px;
    font-weight: bold;
    margin-left: 15px;
    background-color: #eeeeee;
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
  justify-content: flex-start;
  align-items: center;
  max-height: 215px;
  min-height: 0;
`;

export const TodosBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  margin: 5px 0;
  min-height: 100px;
  width: 400px;
  text-align: center;
  position: relative;
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
  > div {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    > h2 {
      font-size: 14px;
      font-weight: bold;
      color: #000000;
    }
    > h3 {
      font-size: 13px;
      color: #454545;
    }
    > h4 {
      font-size: 13px;
      color: #454545;
    }
  }
`;

export const DayColor = styled.span`
  font-size: 11px;
  margin-right: 2px;
  border-radius: 100%;
  padding: 3px 5px;
  background-color: ${(props) => (props.isCurrent ? "#BBBBBB" : "#EEEEEE")};
`;

export const MoreButton = styled.button`
  position: absolute;
  border: 0;
  background-color: transparent;
  top: 10px;
  right: 10px;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    font-size: 18.5px;
    cursor: pointer;
  }
`;

export const MoreButtonContainer = styled.div`
  position: absolute;
  top: 35px;
  right: 7px;
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

    &:hover {
      background-color: #eeeeee;
      cursor: pointer;
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
`;
