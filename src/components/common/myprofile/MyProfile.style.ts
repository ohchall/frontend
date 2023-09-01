import { Link } from "react-router-dom";
import {
  LuUser,
  LuInbox,
  LuBell,
  LuLogOut,
  LuBookmark,
  LuHeart,
} from "react-icons/lu";
import styled from "styled-components";
import myProfileBG from "../../../assets/MyProfileBG.png";

interface WeekSpanProps {
  $isCurrent: boolean;
}

export const MyProfileBlock = styled.div`
  width: 100%;
  height: 239px;
  background-image: url(${myProfileBG});
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

export const StyledLuScrap = styled(LuBookmark)`
  width: 24px;
  height: 24px;
`;

export const StyledLuHeart = styled(LuHeart)`
  width: 24px;
  height: 24px;
`;

export const ThisMonthGoal = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 6px;
  background-color: #ffffff;
  padding: 10px;

  & > p {
    height: 34px;
    overflow: auto;
    font-size: 14px;
    font-weight: bold;
  }

  & > p:first-of-type {
    width: 70%;
  }

  & > p:nth-of-type(2) {
    line-height: 34px;
  }
`;

export const ThisWeekTodo = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  font-size: 14px;

  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & p {
    font-size: 13px;
    width: 70px;
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

  /* &:nth-of-type(-n + 3) {
    margin-bottom: 10px;
  } */

  margin-bottom: 10px;

  & > span {
    display: block;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

    &:nth-of-type(-n + 6) {
      margin-right: 5px;
    }

    margin-right: 5px;
  }
`;

export const WeekSpan = styled.span<WeekSpanProps>`
  width: 12px;
  height: 16px;
  border-radius: 6px;
  display: block;
  text-align: center;
  line-height: 16px;
  font-size: 8px;
  font-weight: normal;
  background-color: ${(props) => (props.$isCurrent ? "#93C3BC" : "#EEEEEE")};
`;
