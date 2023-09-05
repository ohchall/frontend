import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginStatus } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { setRedirectUrl } from "../redux/modules/Modules";

interface UserRouteProps {
  element: React.ReactNode;
  path: string;
}

const UserRoute: React.FC<UserRouteProps> = ({ element, path }) => {
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const LoginStatusCheck = async () => {
      const loginStatus = await LoginStatus();
      setAuthentication(loginStatus);
      if (!loginStatus) {
        dispatch(setRedirectUrl(path));
        navigate("/login");
      }
    };
    LoginStatusCheck();
  }, [navigate]);

  return authentication ? element : null;
};

export default UserRoute;
