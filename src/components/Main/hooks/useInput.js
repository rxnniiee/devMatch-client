import { useState } from "react";

const useInput = (validateValue) => {
  const [entrValue, setEntrValue] = useState("");
  const [isToouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(entrValue);
  const hasError = !valueIsValid && isToouched;
  const valueChangeHandler = (event) => {
    setEntrValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEntrValue("");
    setIsTouched(false);
  };
  return {
    value: entrValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
