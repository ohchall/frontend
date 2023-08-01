import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return <Footersection>Footer</Footersection>;
};

export default Footer;

const Footersection = styled.footer`
  flex-shrink: 0; /* Prevent the footer from being squeezed */
  background-color: wheat; /* Add your desired background color */
  padding: 20px; /* Add any desired padding */
  text-align: center; /* Center align the content within the footer */
  font-size: 30px;
`;
