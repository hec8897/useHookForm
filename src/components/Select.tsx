import React, { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Iprops {
  //   message?: string;
  register?: UseFormRegisterReturn;
}

const Select = forwardRef((props: Iprops, _) => {
  return (
    <>
      <select className="border w-full p-1" {...props.register}>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
    </>
  );
});

export default Select;
