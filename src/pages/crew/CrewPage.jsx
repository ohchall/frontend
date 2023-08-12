import { CrewPageBlock } from "./CrewPage.style";
import MyProfile from "../../components/myprofile/MyProfile";
import Crew from "../../components/crew/Crew";
import { useEffect, useState } from "react";
import { CheckuserInfo } from "../../api/CrewApi";

function CrewPage() {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    // console.log("triggered");
    const getUserInfo = async () => {
      const isUserLoggedIn = await CheckuserInfo();
      setLoggedin(isUserLoggedIn);
    };

    getUserInfo();
  }, []);

  return (
    <CrewPageBlock>
      {loggedin ? <MyProfile /> : null}
      <Crew />
    </CrewPageBlock>
  );
}

export default CrewPage;
