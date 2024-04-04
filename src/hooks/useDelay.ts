import React, { useEffect, useRef } from "react";

export default function useDelay() {
  const timerRef: { current: any } = useRef();

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return function (fn: () => void, ms: number) {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(fn, ms);
  };
}
