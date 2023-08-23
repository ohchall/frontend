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
    // 이메일 유효성 검사를 여기에 추가할 수 있습니다.
    if (newuser.useremail.length < 1) {
      useremailRef.current?.focus();
      return false;
    }
    return true;
  };

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
    if (newuser.nickname === "") {
      nicknameRef.current?.focus();
      return false;
    }
    return true;
  };
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
