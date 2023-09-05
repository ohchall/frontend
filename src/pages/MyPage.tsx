import { useEffect } from "react";
import TodoList from "../components/todo/TodoList";
import MyProfile from "../components/common/myprofile/MyProfile";
import MyCrews from "../components/mycrew/MyCrews";
import { styled } from "styled-components";
import { CheckuserInfo } from "../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus } from "../redux/modules/Modules";

function MyPage() {
  const dispatch = useDispatch();
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const loggedin = useSelector((state) => state.loggedin.isLoggedIn);
  useEffect(() => {
    // console.log('triggered');
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo(dispatch);
      dispatch(setLoggedInStatus(isUserLoggedIn));
    };
    if (access && refresh) {
      getUserInfo();
    }
  }, [access, refresh, dispatch]);
  return (
    <MyPageSection>
      {loggedin ? <MyProfile /> : null}
      <TodoList />
      <MyCrews />
    </MyPageSection>
  );
}
export default MyPage;

const MyPageSection = styled.section`
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  & h1 {
    font-size: 20px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
