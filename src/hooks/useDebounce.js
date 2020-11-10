import { useState, useEffect } from "react";

export default function useDebounce(value, delay, callbackFunc =() => {}) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
      callbackFunc(value)
    }, delay);
    return () => {
      clearTimeout(handler)
    };
  }, [value])

  return debounceValue;
}