import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "다운",
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
              {...register("name")}
            />
            <select className="border w-full p-1" {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
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
