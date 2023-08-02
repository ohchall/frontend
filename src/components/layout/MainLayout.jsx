import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const MainLayout = ({ children }) => {
  return (
    <BackgroundColor>
      <MainLayoutSection>
        <Header />
        <main>{children || <Outlet />}</main>
        <Footer />
      </MainLayoutSection>
    </BackgroundColor>
  );
};

export default MainLayout;
const MainLayoutSection = styled.div`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 100vh;
  background-color: white;

  @media screen and (max-width: 1000px) {
    width: 500px;
  }
`;
const BackgroundColor = styled.div`
  background-color: lightblue;
`;
