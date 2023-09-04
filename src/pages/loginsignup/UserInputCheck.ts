import { MutableRefObject, useRef } from "react";

type User = {
  userName: string;
  useremail: string;
  password: string;
  pwCheck: string;
  nickname: string;
  // phonenumber: string;
};

type UseFormValidationResult = {
  userNameRef: MutableRefObject<HTMLInputElement | null>;
  useremailRef: MutableRefObject<HTMLInputElement | null>;
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  pwCheckRef: MutableRefObject<HTMLInputElement | null>;
  nicknameRef: MutableRefObject<HTMLInputElement | null>;
  // phonenumberRef: MutableRefObject<HTMLInputElement | null>;
  checkAllValidations: () => boolean;
};

const useFormValidation = (
  newuser: User,
  term: boolean,
  setTermError: (error: boolean) => void
): UseFormValidationResult => {
  const useremailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const pwCheckRef = useRef<HTMLInputElement | null>(null);
  const nicknameRef = useRef<HTMLInputElement | null>(null);
  const userNameRef = useRef<HTMLInputElement | null>(null);
  // const phonenumberRef = useRef<HTMLInputElement | null>(null);

  const validateUserName = (newuser: User) => {
    if (newuser.userName.length < 1) {
      userNameRef.current?.focus();
      return false;
    }
    return true;
  };

  const validateEmail = (newuser: User) => {
    const emailCondition = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailCondition.test(newuser.useremail)) {
      alert("올바른 이메일 형식이 아닙니다.");
      useremailRef.current?.focus();
      return false;
    }
    return true;
  }

  // const validatePhonenumber = (newuser: User) => {
  //   if (newuser.phonenumber < 1) {
  //     phonenumberRef.current.focus();
  //     return false;
  //   }
  //   return true;
  // };

  const validatePassword = (newuser: User) => {
    const passwordCondition = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordCondition.test(newuser.password)) {
      alert("비밀 번호가 조건에 맞지 않습니다.");
      passwordRef.current?.focus();
      return false;
    }
    return true;
  };

  const validatePwCheck = (newuser: User) => {
    if (newuser.pwCheck === "") {
      pwCheckRef.current?.focus();
      return false;
    }
    return true;
  };

  const validatePwCheckConfirm = (newuser: User) => {
    if (newuser.pwCheck !== newuser.password) {
      alert("비밀번호 확인이 올바르지 않습니다.");
      pwCheckRef.current?.focus();
      return false;
    }
    return true;
  };

  const validateNickname = (newuser: User) => {
    if (newuser.nickname.length < 2 || newuser.nickname.length > 15) {
      alert("닉네임은 최소 두 글자에서 최대 열다섯 글자까지 가능합니다.");
      nicknameRef.current?.focus();
      return false;
    }
    return true;
  }

  const validateTerm = (term: boolean) => {
    if (!term) {
      alert("약관에 동의해주세요.");
      setTermError(true);
      return false;
    }
    return true;
  };

  // 나머지 검증 함수들
  const validationFunctions = [
    () => validateUserName(newuser),
    () => validateEmail(newuser),
    // () => validatePhonenumber(newuser),
    () => validatePassword(newuser),
    () => validatePwCheck(newuser),
    () => validatePwCheckConfirm(newuser),
    () => validateNickname(newuser),
    () => validateTerm(term),
  ];

  const checkAllValidations = () => {
    return validationFunctions.every((validationFn) => {
      return validationFn();
    });
  };

  return {
    userNameRef,
    useremailRef,
    passwordRef,
    pwCheckRef,
    nicknameRef,
    // phonenumberRef,
    checkAllValidations,
  };
};

export default useFormValidation;
