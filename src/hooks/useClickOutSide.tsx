import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const ref = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const handleClickOutSide = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setToggle(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [toggle]);
  return {
    ref,
    toggle,
    setToggle,
    handleClickOutSide,
  };
}
