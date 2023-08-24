import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AxiosCustomHeaders {
  access: string;
  refresh: string;
  [header: string]: string;
}

interface CustomAxiosResponse extends AxiosResponse {
  headers: AxiosCustomHeaders;
}

const Oauth: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res: CustomAxiosResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/user/kakao/callback?code=${code}`
        );
        const access = res.headers.access;
        const refresh = res.headers.refresh;
        localStorage.setItem("Access", access);
        localStorage.setItem("Refresh", refresh);
        console.log(res);
        navigate("/");
      } catch (e) {
        console.error(e);
        navigate("/");
      }
    })();
  }, [code, navigate]);
  return null;
};

export default Oauth;
