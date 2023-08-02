import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import CrewWritePage from "../pages/CrewWritePage";
import CrewPage from "../pages/CrewPage";
import CrewDetailPage from "../pages/CrewDetailPage";
import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/crew/write" element={<CrewWritePage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Route>
        <Route path="/crew/:id" element={<CrewDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
