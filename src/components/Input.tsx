import React, { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  type: "text" | "number";
}

interface Iprops extends IInput {
  message?: string;
  register?: UseFormRegisterReturn;
}

const Input = forwardRef((props: Iprops, _) => {
  return (
    <>
      <input
        className="border w-full p-1"
        autoComplete="off"
        type={props.type}
        {...props.register}
      />
      {props.message}
    </>
  );
});

export default Input;
