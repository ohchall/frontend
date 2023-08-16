import styled from "styled-components";

const MODAL_WIDTH = "430px";
const INPUT_WIDTH = "380px";
const BUTTON_WIDTH = "80%";
const FONT_SIZE_LARGE = "30px";
const FONT_SIZE_MEDIUM = "18px";
const FONT_SIZE_SMALL = "16px";

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
  width: 400px; // 상수로 변경 가능
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
  width: ${MODAL_WIDTH};
  height: 220px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      font-size: ${FONT_SIZE_LARGE};
      margin-right: 5px;
    }

    > input {
      width: ${INPUT_WIDTH};
      height: 50px;
      border: none;
      border-bottom: 2px solid #eeeeee;
      font-size: ${FONT_SIZE_MEDIUM};
    }

    > button {
      margin-top: 10px;
      width: ${BUTTON_WIDTH};
      height: 50px;
      background: #666666;
      color: #ffffff;
      font-size: ${FONT_SIZE_SMALL};
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
