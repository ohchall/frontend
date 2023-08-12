import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../components/layout/Template";
import MainPage from "../pages/main/MainPage";
import MyPage from "../pages/MyPage";
import CrewPage from "../pages/crew/CrewPage";
import CrewDetailPage from "../pages/crew/CrewDetailPage";
import CrewWritePage from "../pages/CrewWritePage";
import PostModal from "../components/crewpost/PostModal";
import LoginPage from "../pages/loginsignup/LoginPage";
import SignUpPage from "../pages/loginsignup/SignUpPage";
import TodoListPage from "../pages/TodoListPage";
import UserRoute from "./UserRoute";

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
            <UserRoute
              element={
                <Template header footer>
                  <MyPage />
                </Template>
              }
            />
          }
        />
        <Route
          path="/mypage/todolist"
          element={
            <Template header footer>
              <TodoListPage />
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
