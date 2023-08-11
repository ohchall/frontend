import React from "react";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  Buttons,
  LoginSignupInputsContainers,
  SNSLoginContainer,
  SNSButtonWrapper,
} from "./Common.style";
import { styled } from "styled-components";
import { Register } from "../../api/CrewApi";
import { useMutation } from "@tanstack/react-query";
const SignupPage = () => {
  const mutation = useMutation(Register, {
    onSuccess: () => {
      console.log("success");
      navigate("/login");
    },
    onError: (error) => {
      console.log("error", error);
      // alert(error);
      // navigate("/register");
      // window.location.reload(); // 새로고침
    },
  });
  const useremailRef = useRef();
  const passwordRef = useRef();
  const pwCheckRef = useRef();
  const nicknameRef = useRef();
  const userNameRef = useRef();
  const phonenumberRef = useRef();
  const [newuser, setNewuser] = useState({
    useremail: "",
    password: "",
    pwCheck: "",
    nickname: "",
    userName: "",
    phonenumber: "",
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

  // const validation = [
  //   {
  //     check: newuser.email.length < 1,
  //     ref: emailRef,
  //     message: "",
  //   },
  //   {
  //     check: newuser.phonenumber.length < 1,
  //     ref: phonenumberRef,
  //     message: "",
  //   },
  //   {
  //     check: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(newuser.password),
  //     ref: passwordRef,
  //     message: "비밀 번호가 조건에 맞지 않습니다.",
  //   },
  //   {
  //     check: !newuser.pwCheck,
  //     ref: pwCheckRef,
  //     message: "",
  //   },
  //   {
  //     check: !newuser.nickname,
  //     ref: nicknameRef,
  //     message: "",
  //   },
  //   {
  //     check: newuser.pwCheck === newuser.password,
  //     ref: pwCheckRef,
  //     message: "비밀번호 확인이 올바르지 않습니다.",
  //   },
  // ];
  // const newUserInfoCheck = () => {
  //   for (const { check, ref, message } of validation) {
  //     if (!check) {
  //       if (message) {
  //         alert(message);
  //       }
  //       ref.current.focus();
  //       return;
  //     }
  //   }
  //   console.log("Check!");
  //   return mutation.mutate(newuser);
  // };

  const newUserInfoCheck = () => {
    const passwordCondition = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (newuser.userName < 1) {
      return userNameRef.current.focus();
    }
    if (newuser.useremail < 1) {
      return useremailRef.current.focus();
    }
    if (newuser.phonenumber < 1) {
      return phonenumberRef.current.focus();
    }
    if (!passwordCondition.test(newuser.password)) {
      alert("비밀 번호가 조건에 맞지 않습니다.");
      return passwordRef.current.focus();
    }
    if (newuser.pwCheck === "") {
      return pwCheckRef.current.focus();
    }
    if (newuser.nickname === "") {
      return nicknameRef.current.focus();
    }
    if (newuser.pwCheck !== newuser.password) {
      alert("비밀번호 확인이 올바르지 않습니다.");
      return pwCheckRef.current.focus();
    }
    return mutation.mutate(newuser);
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
        <h3>유저 이름</h3>
        <LoginSignupInputsContainers>
          <input
            name="userName"
            value={newuser.userName}
            type="text"
            onChange={handleChange}
            ref={userNameRef}
            placeholder="이름을 적어주세요."
          />
        </LoginSignupInputsContainers>

        <h3>이메일</h3>
        <LoginSignupInputsContainers>
          <input
            name="useremail"
            value={newuser.useremail}
            type="email"
            onChange={handleChange}
            ref={useremailRef}
            placeholder="이메일"
          />
        </LoginSignupInputsContainers>

        <h3>핸드폰 번호</h3>
        <LoginSignupInputsContainers>
          <input
            name="phonenumber"
            value={newuser.phonenumber}
            type="tel"
            onChange={handleChange}
            ref={phonenumberRef}
            placeholder="핸드폰 번호를 입력해주세요."
          />
        </LoginSignupInputsContainers>

        <h3>비밀번호</h3>
        <span>영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>
        <LoginSignupInputsContainers>
          <input
            name="password"
            value={newuser.password}
            type="password"
            onChange={handleChange}
            ref={passwordRef}
            placeholder="비밀번호"
          />
        </LoginSignupInputsContainers>

        <h3>비밀번호 확인</h3>
        <LoginSignupInputsContainers>
          <input
            name="pwCheck"
            value={newuser.pwCheck}
            onChange={handleChange}
            ref={pwCheckRef}
            type="password"
            placeholder="비밀번호"
          />
        </LoginSignupInputsContainers>

        <h3>닉네임</h3>
        <span>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</span>
        <LoginSignupInputsContainers>
          <input
            name="nickname"
            value={newuser.nickname}
            type="text"
            onChange={handleChange}
            ref={nicknameRef}
            placeholder="별명 (2~15자)"
          />
        </LoginSignupInputsContainers>
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
