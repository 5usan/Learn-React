import { useReducer } from "react";

const initailInput = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return initailInput;
  }
  return initailInput;
};

const useInputs = (validityFn) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initailInput);

  const valueIsValid = validityFn(inputState.value);
  const ValueIsNotValid = !valueIsValid && inputState.isTouched;

  const ValueChangeHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    enteredValue: inputState.value,
    ValueIsTouched: inputState.isTouched,
    valueIsValid,
    ValueIsNotValid,
    ValueChangeHandler,
    reset,
  };
};

export default useInputs;
