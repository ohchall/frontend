import { MutableRefObject, useRef } from "react";

type User = {
  useremail: string;
  password: string;
};

type UseUserValidationResult = {
  useremailRef: MutableRefObject<HTMLInputElement | null>;
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  checkAllValidations: () => boolean;
};

const useUserValidation = (user: User): UseUserValidationResult => {
  const useremailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const validateEmail = (user: User) => {
    const emailCondition = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailCondition.test(user.useremail)) {
      //   alert("올바른 이메일 형식이 아닙니다.");
      useremailRef.current?.focus();
      return false;
    }
    return true;
  };

  const validatePassword = (user: User) => {
    if (!user.password || user.password.trim() === "") {
      //   alert("비밀 번호를 입력해주세요.");
      passwordRef.current?.focus();
      return false;
    }
    return true;
  };

  // 나머지 검증 함수들
  const validationFunctions = [
    () => validateEmail(user),
    () => validatePassword(user),
  ];

  const checkAllValidations = () => {
    return validationFunctions.every((validationFn) => validationFn());
  };

  return {
    useremailRef,
    passwordRef,
    checkAllValidations,
  };
};

export default useUserValidation;
