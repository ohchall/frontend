import { useEffect, useState } from "react";
import TodoList from "../components/todo/TodoList";
import MyProfile from "../components/common/myprofile/MyProfile";
import MyCrews from "../components/mycrew/MyCrews";
import { styled } from "styled-components";
import { CheckuserInfo } from "../api/AuthApi";
import secureLocalStorage from "react-secure-storage";

function MyPage() {
  const access = secureLocalStorage.getItem("Access");
  const refresh = secureLocalStorage.getItem("Refresh");
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    // console.log('triggered');
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo();
      setLoggedin(isUserLoggedIn);
    };
    if (access && refresh) {
      getUserInfo();
    }
  }, [access, refresh]);

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
  height: 100vh;
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
