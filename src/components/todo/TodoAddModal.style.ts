import { styled } from "styled-components";

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

  @media (min-width: 1000.1px) and (max-width: 1020px) {
    padding-left: 37.5vw;
  }

  @media (min-width: 1020px) and (max-width: 1040px) {
    padding-left: 37.2vw;
  }

  @media (min-width: 1040px) and (max-width: 1060px) {
    padding-left: 36.2vw;
  }

  @media (min-width: 1060px) and (max-width: 1080px) {
    padding-left: 35.2vw;
  }

  @media (min-width: 1080px) and (max-width: 1100px) {
    padding-left: 34.8vw;
  }

  @media (min-width: 1100px) and (max-width: 1120px) {
    padding-left: 34.3vw;
  }

  @media (min-width: 1120px) and (max-width: 1140px) {
    padding-left: 33.4vw;
  }

  @media (min-width: 1140px) and (max-width: 1160px) {
    padding-left: 32.9vw;
  }

  @media (min-width: 1160px) and (max-width: 1180px) {
    padding-left: 32.3vw;
  }

  @media (min-width: 1180px) and (max-width: 1200px) {
    padding-left: 31.7vw;
  }

  @media (min-width: 1200px) and (max-width: 1220px) {
    padding-left: 31.2vw;
  }

  @media (min-width: 1220px) and (max-width: 1240px) {
    padding-left: 30.9vw;
  }

  @media (min-width: 1240px) and (max-width: 1260px) {
    padding-left: 30.4vw;
  }

  @media (min-width: 1260px) and (max-width: 1280px) {
    padding-left: 29.7vw;
  }

  @media (min-width: 1280px) and (max-width: 1300px) {
    padding-left: 29.3vw;
  }

  @media (min-width: 1300px) and (max-width: 1320px) {
    padding-left: 29.1vw;
  }

  @media (min-width: 1320px) and (max-width: 1340px) {
    padding-left: 28.8vw;
  }

  @media (min-width: 1340px) and (max-width: 1365px) {
    padding-left: 28.2vw;
  }

  @media (min-width: 1365px) and (max-width: 1380px) {
    padding-left: 28.8vw;
  }

  @media (min-width: 1380px) and (max-width: 1400px) {
    padding-left: 29.2vw;
  }

  @media (min-width: 1400px) and (max-width: 1420px) {
    padding-left: 29.6vw;
  }

  @media (min-width: 1420px) and (max-width: 1440px) {
    padding-left: 30vw;
  }

  @media (min-width: 1440px) and (max-width: 1460px) {
    padding-left: 30.3vw;
  }

  @media (min-width: 1460px) and (max-width: 1480px) {
    padding-left: 30.6vw;
  }

  @media (min-width: 1480px) and (max-width: 1700px) {
    padding-left: 30.4vw;
  }

  @media (min-width: 1700px) and (max-width: 1900px) {
    padding-left: 30.55vw;
  }

  @media (min-width: 1900px) and (max-width: 2100px) {
    padding-left: 30.6vw;
  }

  @media (min-width: 2100px) {
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
      width: 90%;
      height: 50px;
      background: #ef902a;
      color: #111111;
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
