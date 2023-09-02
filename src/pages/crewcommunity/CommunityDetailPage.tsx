import CommunityDetail from "../../components/community/CommunityDetail";
import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import MyProfile from "../../components/common/myprofile/MyProfile";
import { CheckuserInfo } from "../../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/ConfigStore";

interface Props {}

const CommunityDetailPage: React.FC<Props> = () => {
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
  const displayRemainingComponents = useSelector(
    (state: RootState) => state.display.displayRemainingComponents
  );

  return (
    <CommunityDetailSection>
      {loggedin ? <MyProfile /> : null}
      {displayRemainingComponents && <CommunityDetail></CommunityDetail>}
    </CommunityDetailSection>
  );
};

export default CommunityDetailPage;

const CommunityDetailSection = styled.section`
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
