import { CrewDetaiPageBlock } from "./CrewDetailPage.style";
import CrewDetail from "../../components/crew/CrewDetail";
import MyProfile from "../../components/myprofile/MyProfile";
import { useEffect, useState } from "react";
import { CheckuserInfo } from "../../api/CrewApi";

function CrewDetailPage() {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    // console.log("triggered");
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo();
      setLoggedin(isUserLoggedIn);
    };

    getUserInfo();
  }, []);

  // console.log(loggedin);

  return (
    <CrewDetaiPageBlock>
      {loggedin ? <MyProfile /> : null}
      <CrewDetail />
    </CrewDetaiPageBlock>
  );
}

export default CrewDetailPage;
