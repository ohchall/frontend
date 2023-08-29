import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../components/layout/Template";
import MainPage from "../pages/main/MainPage";
import MyPage from "../pages/MyPage";
import CrewPage from "../pages/crew/CrewPage";
import CrewDetailPage from "../pages/crew/CrewDetailPage";
import CrewMemberPage from "../pages/crewmember/CrewMemberPage";
import CrewWritePage from "../pages/crewwrite/CrewWritePage";
import LoginPage from "../pages/loginsignup/LoginPage";
import SignUpPage from "../pages/loginsignup/SignUpPage";
import TodoListPage from "../pages/TodoListPage";
import UserRoute from "./UserRoute";
import SearchPage from "../pages/search/SearchPage";
import Oauth from "../components/loginsignup/Oauth";
import CommunityDetailPage from "../pages/crewcommunity/CommunityDetailPage";
import ScrapPage from "../pages/scrap/ScrapPage";
import LikedPage from "../pages/liked/LikedPage";
import CrewCommunity from "../pages/crewcommunity/CrewCommunity";

function Router(): JSX.Element {
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
            <Template footer>
              <LoginPage />
            </Template>
          }
        />

        <Route
          path="/register"
          element={
            <Template footer>
              <SignUpPage />
            </Template>
          }
        />

        <Route
          path="/crew"
          element={
            <Template footer>
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
          path="/crew/member/:id"
          element={
            <Template header footer>
              <CrewMemberPage />
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
          path="/search"
          element={
            <Template header footer>
              <SearchPage />
            </Template>
          }
        />

        <Route
          path="/community"
          element={
            <UserRoute
              element={
                <Template header footer>
                  <CrewCommunity />
                </Template>
              }
            />
          }
        />

        <Route
          path="/communityDetail/:id"
          element={
            <Template footer>
              <CommunityDetailPage />
            </Template>
          }
        />

        <Route path="/oauth" element={<Oauth />} />

        <Route
          path="/scrap"
          element={
            <UserRoute
              element={
                <Template header footer>
                  <ScrapPage />
                </Template>
              }
            />
          }
        />

        <Route
          path="/liked"
          element={
            <UserRoute
              element={
                <Template header footer>
                  <LikedPage />
                </Template>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
