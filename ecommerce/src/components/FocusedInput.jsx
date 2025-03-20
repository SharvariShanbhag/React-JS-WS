import React, { useRef, useEffect } from "react";
import "./FocusInput.css";

function FocusInput() {
  const inputRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    // Move pointer to the input field smoothly
    if (inputRef.current && pointerRef.current) {
      const input = inputRef.current;
      const pointer = pointerRef.current;

      const rect = input.getBoundingClientRect();
      pointer.style.transform = `translate(${rect.left + rect.width / 2}px, ${rect.top + rect.height / 2}px)`;
      
      setTimeout(() => {
        input.focus();
      }, 500);
    }
  }, []);

  return (
    <div className="focus-container">
      <div className="magic-pointer" ref={pointerRef}></div>
      <input ref={inputRef} type="text" placeholder="Watch the magic!" className="focus-input" />
    </div>
  );
}

export default FocusInput;
