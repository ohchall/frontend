import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';

interface CustomInputProps {
  value?: number;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface CustomInputRef {
  focus: () => void;
  setCustomColor: (color: string) => void;
}
const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(({value, onClick, onChange }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    setCustomColor: (color: string) => {
      inputRef.current!.style.color = color;
    },
  }));

  useEffect(() => {
    inputRef.current!.style.color = "#b7b7b7";
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(e);
    if (inputRef.current!.value) {
      inputRef.current!.style.color = "#111111";
    } else {
      inputRef.current!.style.color = "#b7b7b7";
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onClick={handleClick}
      onChange={onChange} 
    />
  );
});

export default CustomInput;
