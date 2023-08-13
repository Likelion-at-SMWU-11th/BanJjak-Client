import React, { useEffect, useState } from "react";

const useDetectClose = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
      //component가 unmount될 때 이벤트 핸들러를 제거
    };
  }, [isOpen, ref]);
  //useEffect dependency에 isOpen 포함 -> isOpen이 변할 때 마다 함수 실행

  return [isOpen, setIsOpen];
};

export default useDetectClose;
