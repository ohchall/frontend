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
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 60px;

  @media (min-width: 1000px) and (max-width: 1050px) {
    padding-left: 35.7vw;
  }

  @media (min-width: 1050px) and (max-width: 1100px) {
    padding-left: 34.7vw;
  }

  @media (min-width: 1100px) and (max-width: 1150px) {
    padding-left: 33.7vw;
  }

  @media (min-width: 1150px) and (max-width: 1200px) {
    padding-left: 32.7vw;
  }

  @media (min-width: 1200px) and (max-width: 1250px) {
    padding-left: 31.7vw;
  }

  @media (min-width: 1250px) and (max-width: 1300px) {
    padding-left: 30.7vw;
  }

  @media (min-width: 1300px) and (max-width: 1350px) {
    padding-left: 29vw;
  }

  @media (min-width: 1350px) and (max-width: 1450px) {
    padding-left: 29vw;
  }

  @media (min-width: 1450px) {
    padding-left: 30.7vw;
  }
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9999;
  width: 430px;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
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
