import { styled } from "styled-components";

export const CommunityDeleteContainer = styled.div`
  position: relative;
  display: inline-block;

  .CommunityDeleteModal {
    position: absolute;
    right: -7px;
    top: -8px;
    background: white;
    border-radius: 5px;
    padding: 1px;
    border: 1px solid black;

    > button {
      font-size: 10px;
      width: 30px;
      border: 0;
      border-radius: 3px;
      padding: 4px 0;
      background-color: transparent;
      display: flex;
      justify-content: center;

      &:hover {
        background-color: #eeeeee;
        cursor: pointer;
      }
    }
  }
`;
