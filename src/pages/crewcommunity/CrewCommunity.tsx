import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import MyProfile from "../../components/common/myprofile/MyProfile";
import Community from "../../components/community/Community";
import { CheckuserInfo } from "../../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/ConfigStore";

interface Props {}

const CrewCommunity: React.FC<Props> = () => {
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
    <CrewCommunitySection>
       {loggedin ? <MyProfile /> : null}
       <Community />
    </CrewCommunitySection>
  );
}

export default CrewCommunity;

const CrewCommunitySection = styled.section`
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
