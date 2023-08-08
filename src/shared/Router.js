import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../components/layout/Template";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CrewPage from "../pages/crew/CrewPage";
import CrewWritePage from "../pages/CrewWritePage";
import CrewDetailPage from "../pages/crewdetail/CrewDetailPage";
import PostModal from "../components/crewpost/PostModal";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Template footer>
              <MainPage />
            </Template>
          }
        />

        <Route
          path="/mypage"
          element={
            <Template header footer>
              <MyPage />
            </Template>
          }
        />
        <Route
          path="/login"
          element={
            <Template header footer>
              <LoginPage />
            </Template>
          }
        />
        <Route
          path="/register"
          element={
            <Template header footer>
              <SignUpPage />
            </Template>
          }
        />

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
          <Route
          path="/postmodal"
          element={
            <Template header footer>
              <PostModal />
            </Template>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
