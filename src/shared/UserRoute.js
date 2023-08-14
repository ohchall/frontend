import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginStatus } from "../api/AuthApi";

const UserRoute = ({ element }) => {
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
