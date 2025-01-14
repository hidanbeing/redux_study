import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyState } from "../store/MyState";
import { SetTodayAction } from "../store/MyActions";

export default function UpdateTodayButton() {
  const dispatch = useDispatch();
  const today = useSelector<MyState, Date>((state) => state.today);

  const updateToday = () => {
    dispatch<SetTodayAction>({ type: "setToday", today: new Date() });
  };

  return (
    <div>
      <p>현재 시간: {today.toLocaleTimeString()}</p>
      <button onClick={updateToday}>현재 시간 업데이트</button>
    </div>
  );
}
