import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MyState } from "./store/MyState";
import { SetTodayAction } from "./store/MyActions";

export default function ReduxExample() {
  const dispatch = useDispatch();
  const today = useSelector<MyState, Date>((state) => state.today);

  const updateToday = useCallback(() => {
    dispatch<SetTodayAction>({ type: "setToday", today: new Date() });
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Example</h1>
      <p>현재 날짜: {today.toLocaleDateString()}</p>
      <p>현재 시간: {today.toLocaleTimeString()}</p>
      <button onClick={updateToday}>시간 업데이트</button>
    </div>
  );
}
