import { useEffect, useState } from "react";
import TodoList from "../components/todo/TodoList";
import MyProfile from "../components/common/myprofile/MyProfile";
import MyCrews from "../components/mycrew/MyCrews";
import { styled } from "styled-components";
import { CheckuserInfo } from "../api/AuthApi";
import { useDispatch } from "react-redux";

function MyPage() {
  const dispatch = useDispatch();
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    // console.log('triggered');
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo(dispatch);
      setLoggedin(isUserLoggedIn);
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
