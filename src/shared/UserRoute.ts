import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginStatus } from "../api/AuthApi";

interface UserRouteProps {
  element: React.ReactNode;
}

const UserRoute: React.FC<UserRouteProps> = ({ element }) => {
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    const LoginStatusCheck = async () => {
      const loginStatus = await LoginStatus();
      setAuthentication(loginStatus);
      if (!loginStatus) {
        navigate("/login");
      }
    };
    LoginStatusCheck();
  }, [navigate]);

  return authentication ? element : null;
};

export default UserRoute;
