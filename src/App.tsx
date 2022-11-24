import React from "react";
import "./App.css";
import Input from "./components/Input";
import Select from "./components/Select";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
              message={errors.name?.message}
              register={register("name", {
                required: "아이디는 필수 입력입니다.",
                pattern: /^[A-Za-z]+$/i,
                maxLength: 20,
                minLength: 1,
              })}
            />

            <Input
              type="number"
              message={errors.age?.message}
              register={register("age", {
                required: "age는 필수 입력입니다.",
                max: 30,
                min: 20,
              })}
            />
            <Select register={register("gender")} />
            {/* 
            <select className="border w-full p-1" {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
            </select> */}
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
