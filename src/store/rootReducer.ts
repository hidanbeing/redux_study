import { MyActions } from "./MyActions";
import { MyState } from "./MyState";

const initalAppState = {
  today: new Date(),
};

export const rootReducer = (
  state: MyState = initalAppState,
  action: MyActions
) => {
  switch (action.type) {
    case "setToday": {
      return { ...state, today: action.today };
    }
  }
  return state;
};
