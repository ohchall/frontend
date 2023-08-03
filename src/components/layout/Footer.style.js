import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 430px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0px;

  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledLink = styled(Link)``;

export const LinkContainer = styled.div`
  display: inline-block;

  & ${StyledLink}:nth-of-type(-n+4) {
    margin-right: 20px;
  }
`;
