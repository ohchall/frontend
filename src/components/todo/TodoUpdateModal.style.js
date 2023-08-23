import styled from "styled-components";

export const ModalShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120%;
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
  width: 100%;
  margin-top: 10px;

  > h2 {
    line-height: 2;
    height: 40px;
    font-size: 22px;
  }
  > img {
    width: 30px;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 100%;
  height: 220px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 30px;
      margin-right: 5px;
    }

    > input {
      width: 360px;
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
    > img {
      margin-right: 5px;
    }
  }
`;
