import { Link } from 'react-router-dom';
import {
  LuUser,
  LuInbox,
  LuBell,
  LuLogOut } from 'react-icons/lu';
import styled from 'styled-components';

export const MyProfileBlock = styled.div`
  width: 100%;
  height: 249px;
  background-color: #F3F3F3;
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  & p {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  text-align: center;
  padding-top: 8px;
  color: #111111;
`;

export const LinkContainer = styled.div`
  display: flex;

  & ${StyledLink}:nth-of-type(-n+3) {
    margin-right: 2px;
  }
`;

export const StyledLuUser = styled(LuUser)`
  width: 22px;
  height: 24px;
`;

export const StyledLuInbox = styled(LuInbox)`
  width: 28px;
  height: 24px;
`;

export const StyledLuBell = styled(LuBell)`
  width: 26px;
  height: 24px;
`;

export const StyledLuLogOut = styled(LuLogOut)`
  width: 24px;
  height: 24px;
`;

export const ThisMonthGoal = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 6px;
  background-color: #FFFFFF;
  font-size: 14px;

  & > p {
    width: 68px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
  }

  & > span {
    margin-left: 14px;
  }
`;

export const ThisWeekTodo = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  background-color: #FFFFFF;
  font-size: 14px;

  & p {
    width: 68px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
  }

  & > div {
    width: calc(100% - 82px);
    margin-left: 14px;
  }
`;

export const Todo = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-of-type(-n+3) {
    margin-bottom: 10px;
  }

  & > span {
    display: block;
  }
`;

export const Week = styled.div`
  display: flex;

  & > span {
    width: 12px;
    height: 16px;
    border-radius: 6px;
    display: block;
    text-align: center;
    line-height: 16px;
    font-size: 8px;
    font-weight: normal;
    background-color: #F2F2F2;

    &:nth-of-type(-n+6) {
      margin-right: 5px;
    }
  }
`;
