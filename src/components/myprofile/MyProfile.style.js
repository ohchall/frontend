import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  display: block;
  border-radius: 50%;
  background-color: #D9D9D9;
`;

export const MyProfileBlock = styled.div`
  width: 100%;
  height: 190px;
  background-color: #EEEEEE;
  padding: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  
  & p {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const LinkContainer = styled.div`
  display: flex;

  & ${StyledLink}:nth-of-type(-n+2) {
    margin-right: 10px;
  }
`;

export const TableWrapper = styled.div`
  & th, td {
    padding: 0 14px 10px 0;
  }
`;