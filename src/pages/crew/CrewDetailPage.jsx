import { CrewDetaiPageBlock } from "./CrewDetailPage.style";
import CrewDetail from "../../components/crew/CrewDetail";
import MyProfile from "../../components/myprofile/MyProfile";
import { useEffect, useState } from "react";
import { CheckuserInfo } from "../../api/AuthApi";

function CrewDetailPage() {
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

  // console.log(loggedin);

  return (
    <CrewDetaiPageBlock>
      {loggedin ? <MyProfile /> : null}
      <CrewDetail />
    </CrewDetaiPageBlock>
  );
}

export default CrewDetailPage;
