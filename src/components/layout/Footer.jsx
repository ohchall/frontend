import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return <Footersection>Footer</Footersection>;
};

export default Footer;

const Footersection = styled.footer`
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background-color: wheat;
  width: 1000px;
  @media screen and (max-width: 1000px) {
    width: 500px;
    position: absolute;
  }
`;
