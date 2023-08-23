import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    setCustomColor: (color) => {
      if (inputRef.current) {
        inputRef.current.style.color = color;
      }
    },
  }));

  useEffect(() => {
   if (inputRef.current) {
     inputRef.current.style.color = "#b7b7b7";
   }
 }, []);

 const handleClick = (e) => {
  if (onClick) {
    onClick(e);
  }
  if (inputRef.current.value) {
    inputRef.current.style.color = "#111111";
  } else {
    inputRef.current.style.color = "#b7b7b7";
  }
};

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onClick={handleClick}
    />
  );
});

export default CustomInput;
