import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const HeaderBlock = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & > button {
    margin-right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const StyledAiOutlineArrowLeft = styled(AiOutlineArrowLeft)`
  width: 18px;
  height: 18px;
`;