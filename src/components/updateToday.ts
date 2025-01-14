import { useDispatch } from "react-redux";
import { SetTodayAction } from "../store/MyActions";

const dispatch = useDispatch();

const updateToday = () => {
  dispatch<SetTodayAction>({
    type: "setToday",
    today: new Date(),
  });
};
