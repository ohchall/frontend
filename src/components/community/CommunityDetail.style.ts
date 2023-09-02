import { styled } from "styled-components";

export const MainContent = styled.div`
  padding: 20px;

  .MainContentTitle {
    display: flex;
    justify-content: space-between;

    .NickLogo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #baf2ff;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      font-size: 20px;
      flex-shrink: 0;
    }

    .NickContent {
      padding-top: 6px;
      padding-left: 5px;
    }
    .MainContentUpdate {
      margin-left: auto;
      font-size: 22px;
      cursor: pointer;
    }
  }
`;

export const Nickname = styled.div`
  font-weight: bold;
`;

export const PostDate = styled.div`
  font-size: 0.8em;
  color: gray;
  padding-top: 3px;
`;

export const Title = styled.h1`
  margin-top: 10px;
`;

export const Content = styled.p`
  margin-top: 20px;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const CommentSection = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #dadada;

  .CommentContentTitle {
    display: flex;
    justify-content: space-between;

    .CommentLogo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #baf2ff;
      border-radius: 100%;
      width: 30px;
      height: 30px;
      font-size: 12px;
      flex-shrink: 0;
    }

    .CommentNickContent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 9px;
      padding-left: 5px;
      width: 100%;
      font-size: 0.8em;
      align-items: center;
      padding-bottom: 10px;
    }

    .CommentContentUpdate {
      margin-left: auto;
      font-size: 18px;
      padding-left: 10px;
      padding-top: 2px;
      cursor: pointer;
    }
  }
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  padding: 10px 10px 10px 10px;
  width: 95%;

  .CommentUndeline {
    display: flex;
    margin: auto;
    margin-top: 20px;
    width: 99%;
    border-bottom: 1px solid #dadada;
  }
`;

export const CommentContent = styled.div`
  margin-top: 5px;
  font-size: 15px;
`;

export const CommentInputSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid #979797;
  border-radius: 10px; // 둥글게 처리
  margin-top: 20px;
  margin-bottom: 135px;
  width: 90%;
  height: 140px;
`;

export const CommentInput = styled.textarea`
  flex-grow: 1;
  border-radius: 10px;
  border: none;
  outline: none;
  resize: none;
  padding: 10px 15px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #979797;
  border: none;
  cursor: pointer;
  border-radius: 0 0 5px 5px;
  width: 100%;
  height: 40px;
  color: white;
  font-size: 15px;
  font-weight: 500;
`;
