import { styled } from "styled-components";

export const ModalShadow = styled.div`
  position: fixed;
  bottom: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 1000px;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  margin-top: 10px;

  > h2 {
    line-height: 2;
    height: 40px;
    font-size: 22px;
  }
  > button {
    width: 40px;
    height: 40px;
    font-size: 18px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 430px;
  height: 220px;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8); */

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 30px;
      margin-right: 5px;
    }

    > input {
      width: 380px;
      height: 50px;
      border: none;
      border-bottom: 2px solid #eeeeee;
      font-size: 18px;
    }

    > button {
      margin-top: 10px;
      width: 80%;
      height: 50px;
      background: #666666;
      color: #ffffff;
      font-size: 16px;
      border: none;
      padding: 6px 0;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
