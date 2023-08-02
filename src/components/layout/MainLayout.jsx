import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WheatherReportApi from "../WheatherReportApi";
const MainLayout = ({ children }) => {
  return (
    <Background>
      <WheatherReportApi />
      <MainLayoutSection>
        <Header />
        <Footer />
        <main>{children || <Outlet />}</main>
      </MainLayoutSection>
    </Background>
  );
};

export default MainLayout;

const MainLayoutSection = styled.section`
  position: relative;

  width: 1000px;
  height: auto;
  background-color: white;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background-color: lightblue;
  height: 100vh;
  @media screen and (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
