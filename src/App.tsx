import React from "react";
import "./App.css";

const TextInput = () => (
  <input type="text" className="border p-2 rounded outline-none w-full" />
);

const App = () => {
  return (
    <div className="App">
      <div className="h-screen p-[10%] py-[20%] bg-gray-100">
        <div className="flex items-center justify-center flex-col gap-2">
          <TextInput />
          <TextInput />
          <TextInput />
          <input
            type="submit"
            className="border bg-blue-400 w-full"
            value="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
