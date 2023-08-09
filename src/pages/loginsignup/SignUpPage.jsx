import React from "react";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  Buttons,
  LoginSignupInputs,
  SNSLoginContainer,
  SNSButtonWrapper,
} from "./Common.style";
import { styled } from "styled-components";
import { Register } from "../../api/CrewApi";
const SignupPage = () => {
  const registerquery = Register();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const nicknameRef = useRef();
  const [newuser, setNewuser] = useState({
    email: "",
    password: "",
    confrim: "",
    nickname: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewuser({
      ...newuser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newuser);
  };

  const newUserInfoCheck = () => {
    const passwordCondition = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (newuser.email < 1) {
      return emailRef.current.focus();
    }
    if (!passwordCondition.test(newuser.password)) {
      alert("비밀 번호가 조건에 맞지 않습니다.");
      return passwordRef.current.focus();
    }
    if (newuser.confrim === "") {
      return confirmRef.current.focus();
    }
    if (newuser.nickname === "") {
      return nicknameRef.current.focus();
    }
    if (newuser.confrim !== newuser.password) {
      alert("비밀번호 확인이 올바르지 않습니다.");
      return confirmRef.current.focus();
    }
    return register();
  };

  const register = () => {
    console.log(newuser);
    registerquery.mutate(newuser, {
      onSuccess: (data) => {
        console.log("회원가입 성공", data);
      },
    });
  };

  return (
    <SignUpPageBlock>
      <h1>회원가입</h1>

      <SNSLoginContainer>
        <span>SNS계정으로 간편 회원가입</span>
        <SNSButtonWrapper>
          <button>
            <SiNaver />
          </button>
          <button>
            <RiKakaoTalkFill />
          </button>
        </SNSButtonWrapper>
      </SNSLoginContainer>

      <SignUpForm onSubmit={handleSubmit}>
        <h3>이메일</h3>
        <LoginSignupInputs>
          <input
            name="email"
            value={newuser.email}
            type="email"
            onChange={handleChange}
            ref={emailRef}
            placeholder="이메일"
          />

          <Buttons onClick={newUserInfoCheck} type="submit">
            이메일 인증하기
          </Buttons>
        </LoginSignupInputs>

        <h3>비밀번호</h3>
        <span>영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
        <LoginSignupInputs>
          <input
            name="password"
            value={newuser.password}
            type="password"
            onChange={handleChange}
            ref={passwordRef}
            placeholder="비밀번호"
          />
        </LoginSignupInputs>

        <h3>비밀번호 확인</h3>
        <LoginSignupInputs>
          <input
            name="confrim"
            value={newuser.confrim}
            onChange={handleChange}
            ref={confirmRef}
            type="password"
            placeholder="비밀번호"
          />
        </LoginSignupInputs>

        <h3>닉네임</h3>
        <span>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</span>
        <LoginSignupInputs>
          <input
            name="nickname"
            value={newuser.nickname}
            type="text"
            onChange={handleChange}
            ref={nicknameRef}
            placeholder="별명 (2~15자)"
          />
        </LoginSignupInputs>
      </SignUpForm>

      <h3>약관동의</h3>
      <AgreementBox></AgreementBox>
      <Buttons onClick={newUserInfoCheck} type="submit">
        회원가입하기
      </Buttons>

      <LoginWrapper>
        <p>이미 아이디가 있으신가요?</p>
        <Nav to="/login">로그인</Nav>
      </LoginWrapper>
    </SignUpPageBlock>
  );
};

export default SignupPage;
const AgreementBox = styled.div`
  border: 1px solid gray;
  width: 95%;
  height: 200px;
`;
const SignUpPageBlock = styled.main`
  height: 100%;
  overflow: scroll;
  padding-bottom: 70px;
  &::-webkit-scrollbar {
    display: none;
  }
  & h1 {
    margin: 3%;
    font-size: 18px;
    font-weight: bold;
  }
`;
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & h3 {
    margin-top: 2%;
    padding-left: 3%;
  }
  & span {
    padding-left: 3%;
    color: grey;
  }
`;

const LoginWrapper = styled.div`
  margin-top: 30px;
  gap: 10px;
  margin-left: 20%;
  display: flex;
  align-items: center;
`;
