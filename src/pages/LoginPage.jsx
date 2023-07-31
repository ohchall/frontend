import React from "react";
import { useState, useRef } from "react";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
function Loginpage() {
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
    // userRegistryCheck();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
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

          <button onClick={userCheck} type="submit">
            로그인
          </button>

          <button to={"/signup"}>회원가입</button>
        </form>

        <div>
          <span>SNS계정으로 간편 로그인/회원가입</span>
          <div>
            <button>
              <SiNaver />
            </button>
            <button>
              <RiKakaoTalkFill />
            </button>
          </div>
        </div>

        <div>로그인에 문제가 있으신가요?</div>
      </div>
    </div>
  );
}

export default Loginpage;
