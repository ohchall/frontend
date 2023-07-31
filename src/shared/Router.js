import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import CrewWritePage from "../pages/CrewWritePage";

function Router() {

  return (
  <BrowserRouter>
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage />}/>
        <Route path='/crewpost' element={<CrewWritePage />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router;
