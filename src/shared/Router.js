import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import CrewWritePage from "../pages/CrewWritePage";
import CrewPage from "../pages/CrewPage/CrewPage";
import CrewDetailPage from "../pages/CrewDetailPage/CrewDetailPage";
import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Template from "../components/layout/Template";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Route>

        <Route
          path="/crew"
          element={
            <Template header footer>
              <CrewPage />
            </Template>
          }
        />

        <Route
          path="/crew/:id"
          element={
            <Template header footer>
              <CrewDetailPage />
            </Template>
          }
        />

        <Route
          path="/crew/write"
          element={
            <Template header footer>
              <CrewWritePage />
            </Template>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
