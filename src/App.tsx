import { React } from "react";
import { Provider as MyProvider } from "react-redux";
import { useStore } from "./store/useStore";

function App() {
  const store = useStore();

  return (
    <MyProvider store={store}>
      <main></main>
    </MyProvider>
  );
}

export default App;
