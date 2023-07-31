import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import TodoWritePage from "../pages/TodoWritePage";
import CrewWritePage from "../pages/CrewWritePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CrewPage from "../pages/CrewPage";
import CrewDetailPage from "../pages/CrewDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/TodoWrite" element={<TodoWritePage />} />
        <Route path="/CrewWrite" element={<CrewWritePage />} />
        <Route path="/Crew" element={<CrewPage />} />
        <Route path="/CrewDetail" element={<CrewDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
