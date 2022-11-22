import React, { forwardRef } from "react";
import "./App.css";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
interface IInput {
  type: "text" | "number";
}

interface Iprops extends IInput {
  register?: UseFormRegisterReturn;
}

const Input = forwardRef((props: Iprops, _) => {
  return (
    <input
      className="border w-full p-1"
      autoComplete="off"
      type={props.type}
      {...props.register}
    />
  );
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      name: "dawoon",
      age: 20,
      gender: "male",
    },
  });

  const onSubmit = async (data: any) => console.log(data);

  return (
    <div className="App">
      <div className="h-screen p-[10%] py-[20%] bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center flex-col gap-2">
            <Input
              type="text"
              register={register("name", {
                required: "아이디는 필수 입력입니다.",
                pattern: /^[A-Za-z]+$/i,
                maxLength: 20,
                minLength: 1,
              })}
            />
            {errors.name?.message}

            <Input
              type="number"
              register={register("age", {
                max: 30,
                min: 20,
              })}
            />

            <select className="border w-full p-1" {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
            {isValid ? "true" : "false"}
            <input
              type="submit"
              className="border bg-blue-400 w-full"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
