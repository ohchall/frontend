import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Mainbox = ({ children }) => {
  return (
    <BackgroundColor>
      <MainLayout>
        <Header />
        <main>{children || <Outlet />}</main>
        <Footer />
      </MainLayout>
    </BackgroundColor>
  );
};

export default Mainbox;
const MainLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: 100%;
  background-color: white;
`;
const BackgroundColor = styled.div`
  background-color: lightblue;
`;
