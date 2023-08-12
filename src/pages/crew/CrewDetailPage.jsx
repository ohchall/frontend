import { CrewDetaiPageBlock } from './CrewDetailPage.style';
import CrewDetail from '../../components/crew/CrewDetail';
import MyProfile from '../../components/myprofile/MyProfile';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CrewDetailPage() {
  const [loggedin, setLoggedin] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    console.log("실행");
    CheckuserInfo();
  }, []);

  //유저프로필 요청
  const CheckuserInfo = async () => {
    console.log("실행2");
    try {
      const access = localStorage.getItem("Access");
      const refresh = localStorage.getItem("Refresh");
      const currentUserToken = {
        headers: {
          Access: `${access}`,
          Refresh: `${refresh}`,
        },
      };
      const response = await axios.get(
        `${process.env.REACT_APP_REALSERVER_URL}/auth/mypage`,
        currentUserToken
      );

      console.log("API response:", response);

      if (response.status === 200) {
        console.log("API response is successful");
        return setLoggedin(true);
      } else {
        setLoggedin(false);
        return false;
      }
    } catch (error) {
      setLoggedin(false);
      return false;
    }
  };

  return (
    <CrewDetaiPageBlock>
      {loggedin ? <MyProfile /> : null}
      <CrewDetail />
    </CrewDetaiPageBlock>
  );
};

export default CrewDetailPage;
