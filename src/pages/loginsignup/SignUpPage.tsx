import React, { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  Buttons,
  LoginSignupInputsContainers,
  SNSLoginContainer,
  Etc,
} from "./Common.style";
import { Register } from "../../api/AuthApi";
import { useMutation } from "@tanstack/react-query";
import { AgreementDetail } from "../../components/loginsignup/AgreementDetail";
import { AgreementBox, SignUpForm, SignUpPageBlock } from "./SignUpPage.style";
import useFormValidation from "./UserInputCheck";
import SNSlogin from "../../components/loginsignup/SNSlogin";

interface NewUser {
  useremail: string;
  password: string;
  pwCheck: string;
  nickname: string;
  userName: string;
  phonenumber: string;
}

const SignupPage: React.FC = () => {
  const [newuser, setNewuser] = useState<NewUser>({
    useremail: "",
    password: "",
    pwCheck: "",
    nickname: "",
    userName: "",
    phonenumber: "",
  });
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const navigate = useNavigate();

  const {
    userNameRef,
    useremailRef,
    passwordRef,
    pwCheckRef,
    nicknameRef,
    // phonenumberRef,
    checkAllValidations,
  } = useFormValidation(newuser, term, setTermError);

  const mutation = useMutation(Register, {
    onSuccess: () => {
      console.log("success");
      navigate("/login");
    },
    onError: (error) => {
      console.log("error", error);
      alert(error);
      navigate("/register");
      window.location.reload();
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewuser({
      ...newuser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(newuser);
  };

  const onChangeTerm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const newUserInfoCheck = () => {
    if (checkAllValidations()) {
      mutation.mutate(newuser);
    } else {
      return;
    }
  };

  const toggleAgreement = () => {
    setAgreement(!agreement);
  };
  return (
    <SignUpPageBlock>
      <h1>회원가입</h1>

      <SNSLoginContainer>
        <span>SNS계정으로 간편 회원가입</span>
        <SNSlogin />
      </SNSLoginContainer>

      <SignUpForm onSubmit={handleSubmit}>
        <LoginSignupInputsContainers>
          <h3>유저 이름</h3>

          <input
            name="userName"
            value={newuser.userName}
            type="text"
            onChange={handleChange}
            ref={userNameRef}
            placeholder="이름을 적어주세요."
          />

          <h3>이메일</h3>

          <input
            name="useremail"
            value={newuser.useremail}
            type="email"
            onChange={handleChange}
            ref={useremailRef}
            placeholder="이메일"
          />
          {/* <button>이메일 인증</button> */}
          {/* <h3>핸드폰 번호</h3>

          <input
            name="phonenumber"
            value={newuser.phonenumber}
            type="tel"
            onChange={handleChange}
            ref={phonenumberRef}
            placeholder="핸드폰 번호를 입력해주세요."
          /> */}

          <h3>비밀번호</h3>
          <span>영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</span>

          <input
            name="password"
            value={newuser.password}
            type="password"
            onChange={handleChange}
            ref={passwordRef}
            placeholder="비밀번호"
          />

          <h3>비밀번호 확인</h3>

          <input
            name="pwCheck"
            value={newuser.pwCheck}
            onChange={handleChange}
            ref={pwCheckRef}
            type="password"
            placeholder="비밀번호"
          />

          <h3>닉네임</h3>
          <span>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</span>

          <input
            name="nickname"
            value={newuser.nickname}
            type="text"
            onChange={handleChange}
            ref={nicknameRef}
            placeholder="별명 (2~15자)"
          />
          {/* <button>닉네임 중복 확인</button> */}
          <h3>약관동의</h3>
          <AgreementBox>
            <button onClick={toggleAgreement}>서비스 이용 약관</button>

            {agreement && <AgreementDetail />}
            <div>
              <input
                style={{ width: "16px", height: "16px" }}
                type="checkbox"
                id="term"
                checked={term}
                onChange={onChangeTerm}
              />
              <label htmlFor="term">약관에 동의합니다.</label>
            </div>
            {termError && (
              <span style={{ color: "red" }}>약관에 동의해주세요.</span>
            )}
          </AgreementBox>
          <Buttons onClick={newUserInfoCheck} type="submit">
            회원가입하기
          </Buttons>
        </LoginSignupInputsContainers>
      </SignUpForm>
      <Etc>
        <p>이미 아이디가 있으신가요?</p>
        <Nav to="/login">로그인</Nav>
      </Etc>
    </SignUpPageBlock>
  );
};

export default SignupPage;
