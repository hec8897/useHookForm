import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

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
            <input
              className="border w-full p-1"
              type="text"
              autoComplete="off"
              {...register("name", {
                required: "아이디는 필수 입력입니다.",
                pattern: /^[A-Za-z]+$/i,
                maxLength: 20,
                minLength: 1,
              })}
            />
            {errors.name?.message}

            <input
              className="border w-full p-1"
              type="number"
              autoComplete="off"
              {...register("age", {
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
