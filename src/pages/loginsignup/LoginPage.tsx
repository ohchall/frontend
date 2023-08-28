import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserCheck } from "../../api/AuthApi";
import {
  Buttons,
  LoginSignupInputsContainers,
  Nav,
  SNSLoginContainer,
  Etc,
} from "./Common.style";
import { useMutation } from "@tanstack/react-query";
import { LoginPageBlock } from "./LoginPage.style";
import SNSlogin from "../../components/loginsignup/SNSlogin";
import { useDispatch } from "react-redux";
import { login } from "../../redux/modules/Modules";

interface User {
  useremail: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const mutation = useMutation(UserCheck, {
    onSuccess: () => {
      navigate("/");
      dispatch(login({ email: user.useremail }));
    },
    onError: () => {
      navigate("/login");
      window.location.reload(); // 새로고침
    },
  });

  const useremailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [user, setUser] = useState<User>({
    useremail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("user", user);
  };

  const userCheck = () => {
    if (user.useremail.length < 1) {
      useremailRef.current?.focus();
    }
    if (user.password.length < 1) {
      passwordRef.current?.focus();
    }
    return mutation.mutate(user);
  };

  return (
    <LoginPageBlock>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <LoginSignupInputsContainers>
          <input
            ref={useremailRef}
            name="useremail"
            value={user.useremail}
            type="email"
            placeholder="이메일"
            onChange={handleChange}
          />
          <input
            ref={passwordRef}
            name="password"
            value={user.password}
            type="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />

          <Buttons onClick={userCheck} type="submit">
            로그인
          </Buttons>
        </LoginSignupInputsContainers>
      </form>
      <SNSLoginContainer>
        <span>SNS계정으로 간편 로그인</span>
        <SNSlogin />
      </SNSLoginContainer>
      <Etc>
        로그인에 문제가 있으신가요?
        <Nav to="/register">회원가입</Nav>
      </Etc>
    </LoginPageBlock>
  );
};

export default LoginPage;
