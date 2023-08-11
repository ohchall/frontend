import { useState, useRef } from "react";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Buttons, LoginSignupInputsContainers, Nav } from "./Common.style";
import { useMutation } from "@tanstack/react-query";
import { UserCheck } from "../../api/CrewApi";
function LoginPage() {
  const mutation = useMutation(UserCheck, {
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.log("error", error);
      alert(error);
      // navigate("/login");
      // window.location.reload(); // 새로고침
    },
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };

  const userCheck = () => {
    if (user.email < 1) {
      emailRef.current.focus();
    }
    if (user.password < 1) {
      passwordRef.current.focus();
    }
    return mutation.mutate(user);
  };

  return (
    <LoginPageBlock>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <LoginSignupInputsContainers>
          <input
            ref={emailRef}
            name="email"
            value={user.email}
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
        <SNSButtonWrapper>
          <button>
            <SiNaver />
          </button>
          <button>
            <RiKakaoTalkFill />
          </button>
        </SNSButtonWrapper>
      </SNSLoginContainer>
      <Etc>
        로그인에 문제가 있으신가요?
        <Nav to="/register">회원가입</Nav>
      </Etc>
    </LoginPageBlock>
  );
}

export default LoginPage;
const LoginPageBlock = styled.div`
  & h1 {
    margin: 3%;
    font-size: 18px;
    font-weight: bold;
  }
`;

const SNSButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const SNSLoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 10%;

  & button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: darkgray;
  }
`;

const Etc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & button {
    border: none;
    background-color: none;
  }
`;
