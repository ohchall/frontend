import { styled } from "styled-components";
import MyProfile from "../../components/common/myprofile/MyProfile";
import Community from "../../components/community/Community";

const CrewCommunity: React.FC = () => {
  // If you decide to uncomment and use the below code,
  // add type definitions for your state and props where necessary.
  
  // const access = localStorage.getItem("Access");
  // const refresh = localStorage.getItem("Refresh");
  // const [loggedin, setLoggedin] = React.useState<boolean>(false);
  
  // React.useEffect(() => {
  //   // console.log('triggered');
  //   const getUserInfo = async () => {
  //     const isUserLoggedIn = await CheckuserInfo();
  //     setLoggedin(isUserLoggedIn);
  //   };
  //   if (access && refresh) {
  //     getUserInfo();
  //   }
  // }, [access, refresh]);

  return (
    <CrewCommunitySection>
       <MyProfile />
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
