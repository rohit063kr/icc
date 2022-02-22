import { useState } from "react";

const useInput = function () {
  const [enteredInput, setEnteredInput] = useState("");

  const inputChangeHandler = function (obj) {
    if (obj.target) setEnteredInput(obj.target.value);
    else setEnteredInput(obj);
  };

  const reset = function () {
    setEnteredInput("");
  };

  return {
    enteredInput,
    reset,
    inputChangeHandler,
  };
};

export default useInput;
