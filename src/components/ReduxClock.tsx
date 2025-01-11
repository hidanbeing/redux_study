import React from "react";
import { useSelector } from "react-redux";
import { MyState } from "../store/MyState";

const ReduxClock: React.FC = () => {
  const today = useSelector<MyState, Date>((state) => state.today); // 상태 읽기
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h1 className="text-5xl">Redux Clock</h1>
      <h2 className="mt-4 text-3xl">{today.toLocaleTimeString()}</h2>
      <h3 className="mt-4 text-2xl">{today.toLocaleDateString()}</h3>
    </div>
  );
};

export default ReduxClock;
