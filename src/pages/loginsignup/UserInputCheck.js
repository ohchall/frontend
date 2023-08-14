import { useRef } from "react";

const useFormValidation = (newuser, term, setTermError) => {
  const useremailRef = useRef();
  const passwordRef = useRef();
  const pwCheckRef = useRef();
  const nicknameRef = useRef();
  const userNameRef = useRef();
  const phonenumberRef = useRef();

  const validateUserName = (newuser) => {
    if (newuser.userName < 1) {
      userNameRef.current.focus();
      return false;
    }
    return true;
  };

  const validateEmail = (newuser) => {
    // 이메일 유효성 검사를 여기에 추가할 수 있습니다.
    if (newuser.useremail < 1) {
      useremailRef.current.focus();
      return false;
    }
    return true;
  };

  const validatePhonenumber = (newuser) => {
    if (newuser.phonenumber < 1) {
      phonenumberRef.current.focus();
      return false;
    }
    return true;
  };

  const validatePassword = (newuser) => {
    const passwordCondition = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordCondition.test(newuser.password)) {
      alert("비밀 번호가 조건에 맞지 않습니다.");
      passwordRef.current.focus();
      return false;
    }
    return true;
  };

  const validatePwCheck = (newuser) => {
    if (newuser.pwCheck === "") {
      pwCheckRef.current.focus();
      return false;
    }
    return true;
  };

  const validatePwCheckConfirm = (newuser) => {
    if (newuser.pwCheck !== newuser.password) {
      alert("비밀번호 확인이 올바르지 않습니다.");
      pwCheckRef.current.focus();
      return false;
    }
    return true;
  };

  const validateNickname = (newuser) => {
    if (newuser.nickname === "") {
      nicknameRef.current.focus();
      return false;
    }
    return true;
  };
  const validateTerm = (newuser) => {
    if (!term) {
      alert("약관에 동의해주세요.");
      setTermError(true);
      return false;
    }
    return true;
  };

  // 나머지 검증 함수들
  const validationFunctions = [
    validateUserName,
    validateEmail,
    validatePhonenumber,
    validatePassword,
    validatePwCheck,
    validatePwCheckConfirm,
    validateNickname,
    validateTerm,
    // 추가 검증 함수
  ];

  const checkAllValidations = () => {
    return validationFunctions.every((validationFn) => {
      return validationFn(newuser);
    });
  };

  return {
    userNameRef,
    useremailRef,
    passwordRef,
    pwCheckRef,
    nicknameRef,
    phonenumberRef,
    checkAllValidations,
  };
};

export default useFormValidation;
