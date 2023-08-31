import { Link } from "react-router-dom";
import {
  FiSmile,
  FiSearch } from 'react-icons/fi';
import { 
  LuUser,
  LuUsers } from 'react-icons/lu';
import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 99;

  @media (max-width: 430px) {
    position: fixed;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #111111;

  & > span {
    display: block;
    font-size: 10px;
  }
`;

export const StyledFiSmile = styled(FiSmile)`
  width: 24px;
  height: 24px;
`;

export const StyledFiSearch = styled(FiSearch)`
  width: 24px;
  height: 24px;
`;

export const StyledLuUser = styled(LuUser)`
  width: 24px;
  height: 24px;
`;

export const StyledLuUsers = styled(LuUsers)`
  width: 24px;
  height: 24px;
`;
