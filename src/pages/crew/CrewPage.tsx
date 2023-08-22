import { CrewPageBlock } from "./CrewPage.style";
import MyProfile from "../../components/common/myprofile/MyProfile";
import Crew from "../../components/crew/Crew";
import { useEffect, useState } from "react";
import { CheckuserInfo } from "../../api/AuthApi";

function CrewPage() {
  const access = localStorage.getItem("Access");
  const refresh = localStorage.getItem("Refresh");
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    // console.log("triggered");
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo();
      setLoggedin(isUserLoggedIn);
    };
    if (access && refresh) {
      getUserInfo();
    }
  }, [access, refresh]);

  return (
    <CrewPageBlock>
      {loggedin ? <MyProfile /> : null}
      <Crew />
    </CrewPageBlock>
  );
}

export default CrewPage;
